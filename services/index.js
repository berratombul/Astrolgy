const userServices = require("./user.service");
const zodiacServices = require("./zodiac.service");
const fileService = require("./file.service");
const coffeeService = require("./coffee.service");
const blogService = require("./blog.service");

module.exports = {
  user: userServices,
  zodiac: zodiacServices,
  file: fileService,
  coffee: coffeeService,
  blog: blogService,
};
