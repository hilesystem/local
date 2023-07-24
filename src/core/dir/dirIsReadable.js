import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper.js";

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function dirIsReadable(pathToDir) {
  return accessWrapper(constants.R_OK, pathToDir);
}
