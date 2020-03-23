const fs = require("fs");

const accessWrapper = require("../access/wrapper.js");

module.exports = function dirIsWritable(pathToDir) {
  return accessWrapper(fs.constants.W_OK, pathToDir);
};
