import { access } from "node:fs/promises";

/**
 * @name accessWrapper
 * @description Asynchronously tests a user's permissions for the file specified by path.
 * @since 0.0.1
 * @async
 * @param {number} mode
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
 */
export async function accessWrapper(mode, path) {
  try {
    await access(path, mode);
    return true;
  } catch (error) {
    return error;
  }
}
