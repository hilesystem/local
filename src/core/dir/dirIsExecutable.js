import { constants } from "fs";

import { accessWrapper } from "../access/wrapper.js";

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function dirIsExecutable(pathToDir) {
  return accessWrapper(constants.X_OK, pathToDir);
}
