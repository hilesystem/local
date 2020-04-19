import { getStatus } from "./getStatus";

/**
 * @name isPathExists
 * @description Get path status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export async function isPathExists(path) {
  const [status] = await getStatus(path);
  return Boolean(status);
}
