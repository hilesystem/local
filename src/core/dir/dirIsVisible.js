const F_OK = require("fs").constants.F_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function dirIsVisible(pathToDir) {
  return accessWrapper(F_OK, pathToDir);
};
