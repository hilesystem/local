import { getStatus } from "./getStatus";

/**
 * @name isDirExists
 * @description Get directory status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export async function isDirExists(path) {
  const [status, error] = await getStatus(path);
  if (error) {
    return false;
  }
  return status.isDirectory();
}
