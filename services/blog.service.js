const Dal = require("../dal/index");
const Blog = require("../models/blog.model");

exports.postBlog = async (req) => {
  try {
    const { title, text } = req.body;
    const postDate = new Date();
    const blog = new Blog({
      title,
      text,
      postDate: postDate,
    });
    const json = await Dal.blog.create(blog);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBlogById = async (req) => {
  try {
    const { id } = req.params;
    const json = await Dal.blog.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.listAll = async (req) => {
  try {
    const json = await Dal.blog.find();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
