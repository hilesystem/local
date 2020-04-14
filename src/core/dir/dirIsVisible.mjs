import { constants } from "fs";

import accessWrapper from "../access/wrapper.mjs";

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function dirIsVisible(pathToDir) {
  return accessWrapper(constants.F_OK, pathToDir);
}
