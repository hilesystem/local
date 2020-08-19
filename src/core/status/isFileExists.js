import { getStatus } from "./getStatus.js";

/**
 * @name isFileExists
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export async function isFileExists(path) {
  const [status, error] = await getStatus(path);
  if (error) {
    return false;
  }
  return status.isFile();
}
