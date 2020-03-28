import { constants } from "fs";

import accessWrapper from "../access/wrapper.mjs";

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function fileIsWritable(pathToFile) {
  return accessWrapper(constants.W_OK, pathToFile);
}
