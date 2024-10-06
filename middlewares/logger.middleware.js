const logger = require("../utils/index");

module.exports = (req, res, next) => {
  logger.logger.info(
    `IP Adresi: ${req.ip} - PATH: ${req.path} - BODY: ${JSON.stringify(
      req.body
    )} - PARAMS : ${JSON.stringify(
      req.params
    )}- MODDLEWARE ACCES TIME: ${Date.now()} - URL: ${req.url}`
  );
  next();
};
