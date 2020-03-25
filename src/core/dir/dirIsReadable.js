const R_OK = require("fs").constants.R_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function dirIsReadable(pathToDir) {
  return accessWrapper(R_OK, pathToDir);
};
