const fs = require("fs");

const accessWrapper = require("../access/wrapper.js");

module.exports = async function dirIsReadable(pathToDir) {
  return accessWrapper(fs.constants.R_OK, pathToDir);
};
