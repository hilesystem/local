import { getStatus } from "./get-status";

/**
 * @name isPathExists
 * @description Get path status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export async function isPathExists(path: string | Buffer | URL): Promise<boolean> {
	const [status] = await getStatus(path);
	return Boolean(status);
}
