const fs = require("fs");

const accessWrapper = require("../access/wrapper.js");

module.exports = async function fileIsWritable(pathToFile) {
  return accessWrapper(fs.constants.W_OK, pathToFile);
};
