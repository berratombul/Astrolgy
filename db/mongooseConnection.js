const mongoose = require("mongoose");
const logger = require("../utils/index");

//! mongoose bağlantısının başarılı şekilde çalışıp çalışmadığını kontrol ettik
exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.MONGODB_COLECTION,
      connectTimeoutMS: process.env.MONGODB_CONNECTION_TIMEOUT,
    });
    console.log("Database bağlantı başarılı!");
    logger.logger.info("MongoDB bağlantısı başarılı");
  } catch (error) {
    console.log("DB connect hatası!", error.message);
    throw new Error(error.message);
  }
};
