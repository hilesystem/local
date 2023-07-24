import { constants, promises } from "node:fs";

/**
 * @name isExecutable
 * @description Is file can be executed by the calling process.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}}
 */
export async function isExecutable(path) {
  try {
    await promises.access(path, constants.X_OK);
    return true;
  } catch {
    return false;
  }
}
