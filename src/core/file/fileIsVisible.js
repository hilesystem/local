import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper.js";

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function fileIsVisible(pathToFile) {
  return accessWrapper(constants.F_OK, pathToFile);
}
