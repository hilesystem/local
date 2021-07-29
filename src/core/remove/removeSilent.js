import { promises } from "fs";

/**
 * @name removeSilent
 * @description Removes files and directories (modeled on the standard POSIX rm utility).
 * @summary Minimum Node version 14.14.0
 * @since 0.1.36
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {object=} options
 * @returns {Promise<void>}
 */
export async function removeSilent(pathLike, options) {
  try {
    await promises.rm(pathLike, {
      force: true,
      recursive: true,
      ...options,
    });
  } catch (__error) {
    //
  }
}
