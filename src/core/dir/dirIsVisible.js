import { constants } from "fs";

import { accessWrapper } from "../access/wrapper.js";

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function dirIsVisible(pathToDir) {
  return accessWrapper(constants.F_OK, pathToDir);
}
