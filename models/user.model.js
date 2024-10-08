const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: false,
    },
    surname: {
      type: Schema.Types.String,
      required: false,
    },
    email: {
      type: Schema.Types.String,
      required: false,
    },
    password: {
      type: Schema.Types.String,
      required: false,
    },
    birthDate: {
      type: Schema.Types.String,
      required: false,
    },
    age: {
      type: Schema.Types.Number,
      required: false,
    },
    profilePhoto: {
      type: Schema.Types.String,
      required: false,
    },
    zoodiacSing: {
      type: Schema.Types.String,
      required: false,
    },
    album: [
      {
        type: Schema.Types.String,
        required: false,
      },
    ],
  },
  {
    minimize: true,
    timestamp: true,
    autoIndex: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
