//!          ÖNEMLİ KLASÖR
const User = require("../models/user.model");
const UserDataAccess = {
  async create(userModel) {
    return await userModel.save();
  },
  async find(where) {
    return await User.find(where);
  },
  async findOne(where) {
    return await User.findOne(where);
  },
  async findById(id) {
    return await User.findById({ _id: id });
  },
  async updateById(id, body) {
    return await User.findByIdAndUpdate({ _id: id }, body, { new: true });
  },
};
module.exports = UserDataAccess;
