import { constants, promises } from "node:fs";

/**
 * @name isVisible
 * @description Is file visible to the calling process.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}}
 */
export async function isVisible(path) {
  try {
    await promises.access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
