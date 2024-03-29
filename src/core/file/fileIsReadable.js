import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper.js";

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function fileIsReadable(pathToFile) {
  return accessWrapper(constants.R_OK, pathToFile);
}
