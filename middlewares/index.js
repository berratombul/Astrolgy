const singleImageUploadMiddleware = require("./singleimageupload.middleware");
const multipleImageUploadMiddleware = require("./multipleimageupload.middleware");
const loggerMiddleware = require("./logger.middleware");
const authMiddleware = require("./auth.middleware");

module.exports = {
  singleImageUploadMiddleware,
  loggerMiddleware,
  authMiddleware,
  multipleImageUploadMiddleware,
};
