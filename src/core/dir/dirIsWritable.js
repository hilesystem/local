const W_OK = require("fs").constants.W_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function dirIsWritable(pathToDir) {
  return accessWrapper(W_OK, pathToDir);
};
