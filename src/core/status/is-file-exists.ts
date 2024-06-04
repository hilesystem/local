import { getStatus } from "./get-status";

/**
 * @name isFileExists
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean>}
 */
export async function isFileExists(path: string | Buffer | URL): Promise<boolean> {
	const [status, error] = await getStatus(path);
	if (error) {
		return false;
	}
	return (status as import("node:fs").Stats).isFile();
}
