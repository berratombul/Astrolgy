const utils = require("../utils/index");
const User = require("../models/user.model");
const Dal = require("../dal/index");
const fileService = require("./file.service");
const userDto = require("../dto/user.dto")

exports.createUser = async (req) => {
  try {
    let { name, surname, email, password, birthDate } = req.body;
    birthDate = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    const _password = utils.helper.hashToPassword(password);
    const user = new User({
      password: _password,
      name,
      surname,
      email,
      birthDate,
      age,
    });
    const json = await Dal.user.create(user);
    const token = utils.helper.createToken(
      json._id,
      json.name + "" + json.surname,
      json.email
    )
    return {
      ...userDto,
      token: token,
      email: json.email,
      name: json.name,
      surname: json.surname,
      birthDate: json.birthDate,
      age: json.age,
      zodiacSign: json.zodiacSign,
      password: json.password,
      id: json._id
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const _password = utils.helper.hashToPassword(password);
    const json = await Dal.user.findOne({
      email: email,
      password: _password,
    });
    if (!json) {
      throw new Error("Şifre veya email hatalı!");
    } else {
      const token = utils.helper.createToken(
        json._id,
        json.name + "" + json.surname,
        json.email
      );
      return {json, token}
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUserById = async (req) => {
  let id = req.params.id;
  try {
    let json = await Dal.user.findById(id);
    if (!json) {
      throw new Error("Kullanıcı bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.getUserByName = async (req) => {
  let name = req.params.name;
  try {
    let json = await Dal.user.find({ name: name });
    if (json.length === 0) {
      throw new Error("Kullanıcı bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.updateUser = async (req) => {
  const id = req.params.id;
  const { name, surname, email } = req.body;
  try {
    const json = await Dal.user.updateById(id, { name, surname, email });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateProfilePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const str = await fileService.uploadImage(req, res);
    const json = await Dal.user.updateById(id, { profilePhoto: str });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const str = await fileService.uploadImageMultiple(req, res);
    const json = await Dal.user.updateById(id, { album: str });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updatePassword = async (req) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const _password = utils.helper.hashToPassword(password);
    const json = await Dal.user.findById(id, { password: _password });
    if (!json) {
      throw new Error("Kullanıcı Bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllUsers = async (req) => {
  try {
    const json = await Dal.user.find();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
