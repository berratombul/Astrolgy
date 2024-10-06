const Zodiac = require("../models/zodiac.model");
const Dal = require("../dal/index");
const Relationship = require("../models/relationship.model");

exports.createZodiac = async (req) => {
  try {
    const { title, daily, weekly, monthly } = req.body;
    const zodiac = new Zodiac({
      title,
      daily,
      weekly,
      monthly,
    });
    const json = await Dal.zodiac.create(zodiac);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getDaily = async (req) => {
  const { title } = req.params;
  try {
    const json = await Dal.zodiac.getPeriodic({ title: title }, "daily");
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getWeekly = async (req) => {
  const { title } = req.params;
  try {
    const json = await Dal.zodiac.getPeriodic({ title: title }, "weekly");
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getMonthly = async (req) => {
  const { title } = req.params;
  try {
    const json = await Dal.zodiac.getPeriodic({ title: title }, "monthly");
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getById = async (req) => {
  let id = req.params.id;
  try {
    let json = await Dal.zodiac.findById(id);
    if (!json) {
      throw new Error("Burç bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getZodiacByTitle = async (req) => {
  let title = req.params.title;
  try {
    let json = await Dal.zodiac.findOne({ title: title });
    if (!json) {
      throw new Error("Burç bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateZodiacById = async (req) => {
  let { id } = req.params;
  const { daily, weekly, monthly } = req.body;
  try {
    let json = await Dal.zodiac.updateById(id, {
      daily: daily,
      weekly: weekly,
      monthly: monthly,
    });
    if (!json) {
      throw new Error("Burç bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.postRelationship = async (req) => {
  try {
    const { title1, title2, relationship } = req.body;
    const pair = new Relationship({
      title1,
      title2,
      relationship,
    });
    const json = await Dal.relationship.create(pair);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getRelationship = async (req) => {
  try {
    const { title1, title2 } = req.query;
    const json = await Dal.relationship.findOne({
      title1: title1,
      title2: title2,
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
