const X_OK = require("fs").constants.X_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function dirIsExecutable(pathToDir) {
  return accessWrapper(X_OK, pathToDir);
};
