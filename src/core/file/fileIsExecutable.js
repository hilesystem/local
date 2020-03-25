const X_OK = require("fs").constants.X_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function fileIsExecutable(pathToFile) {
  return accessWrapper(X_OK, pathToFile);
};
