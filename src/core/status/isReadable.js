import { constants, promises } from "fs";

/**
 * @name isReadable
 * @description Is file can be read by the calling process.
 * @since 0.2.6
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}}
 */
export async function isReadable(path) {
  try {
    await promises.access(path, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}
