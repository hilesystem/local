import { constants } from "fs";

import accessWrapper from "../access/wrapper.mjs";

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export default async function dirIsReadable(pathToDir) {
  return accessWrapper(constants.R_OK, pathToDir);
}
