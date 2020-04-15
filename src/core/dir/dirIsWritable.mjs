import { constants } from "fs";

import { accessWrapper } from "../access/wrapper.mjs";

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export async function dirIsWritable(pathToDir) {
  return accessWrapper(constants.W_OK, pathToDir);
}
