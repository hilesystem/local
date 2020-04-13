import { constants } from "fs";

import accessWrapper from "../access/wrapper.mjs";

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function fileIsReadable(pathToFile) {
  return accessWrapper(constants.R_OK, pathToFile);
}