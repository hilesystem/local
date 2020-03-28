const W_OK = require("fs").constants.W_OK;

const accessWrapper = require("../access/wrapper.js");

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
module.exports = async function fileIsWritable(pathToFile) {
  return accessWrapper(W_OK, pathToFile);
};
