const R_OK = require("fs").constants.R_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function fileIsReadable(pathToFile) {
  return accessWrapper(R_OK, pathToFile);
};
