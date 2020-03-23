const fs = require("fs");

const accessWrapper = require("../access/wrapper.js");

module.exports = async function fileIsReadable(pathToFile) {
  return accessWrapper(fs.constants.R_OK, pathToFile);
};
