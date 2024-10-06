const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: false,
    },
    text: {
      type: Schema.Types.String,
      required: false,
    },
    postDate: {
      type: Schema.Types.Date,
      required: false,
    },
  },
  {
    minimize: true,
    timestamp: true,
    autoIndex: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema, "blog");

module.exports = Blog;
