const { StatusCodes } = require("http-status-codes");
const Service = require("../services/index");
const baseResponse = require("../dto/baseResponse.dto");

exports.createZodiac = async (req, res) => {
  try {
    const json = await Service.zodiac.createZodiac(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Burç ekleme başarılı.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.getDaily = async (req, res) => {
  try {
    const json = await Service.zodiac.getDaily(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Günlük burç yorumu",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.getWeekly = async (req, res) => {
  try {
    const json = await Service.zodiac.getWeekly(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Haftalık burç yorumu",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.getMonthly = async (req, res) => {
  try {
    const json = await Service.zodiac.getMonthly(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Aylık burç yorumu",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.getById = async (req, res) => {
  try {
    const json = await Service.zodiac.getById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Burç yorumu getirildi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.getZodiacByTitle = async (req, res) => {
  try {
    const json = await Service.zodiac.getZodiacByTitle(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Burç yorumu getirildi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.updateZodiacById = async (req, res) => {
  try {
    const json = await Service.zodiac.updateZodiacById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Burç yorumları güncellendi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.postRelationship = async (req, res) => {
  try {
    const json = await Service.zodiac.postRelationship(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Burç uyumu eklendi",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
exports.getRelationship = async (req, res) => {
  try {
    const json = await Service.zodiac.getRelationship(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Burç uyumu bulundu",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
