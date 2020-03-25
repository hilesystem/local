const F_OK = require("fs").constants.F_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function fileIsVisible(pathToFile) {
  return accessWrapper(F_OK, pathToFile);
};
