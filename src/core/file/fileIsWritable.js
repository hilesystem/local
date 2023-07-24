import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper.js";

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function fileIsWritable(pathToFile) {
  return accessWrapper(constants.W_OK, pathToFile);
}
