const fileService = require("./file.service");
const Coffee = require("../models/coffee.model");
const Dal = require("../dal/index");

exports.uploadCoffee = async (req, res) => {
  try {
    const { id } = req.params;
    const arr = await fileService.uploadImageMultiple(req, res);
    const coffee = new Coffee({
      uri: arr,
      user: id,
    });
    const json = await Dal.coffee.create(coffee);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeByUser = async (req) => {
  try {
    const { userId } = req.params;
    const json = Dal.coffee.find({ user: userId });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeById = async (req) => {
  try {
    const { id } = req.params;
    const json = Dal.coffee.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCoffeeById = async (req) => {
  try {
    const { id } = req.params;
    const { status, result } = req.body;
    const json = Dal.coffee.updateById(id, { result, status });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getContinueCoffee = async (req) => {
  try {
    const { userId } = req.params;
    const json = await Dal.coffee.find({
      user: userId,
      status: "Hazırlanıyor",
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCanceledCoffee = async (req) => {
  try {
    const { userId } = req.params;
    const json = await Dal.coffee.find({ user: userId, status: "İptal" });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getFinishedCoffee = async (req) => {
  try {
    const { userId } = req.params;
    const json = await Dal.coffee.find({ user: userId, status: "Bitti" });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.listAll = async (req) => {
  try {
    const json = await Dal.coffee.find();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
