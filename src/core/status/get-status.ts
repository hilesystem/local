import { stat } from "node:fs/promises";

/**
 * @name getStatus
 * @description Get file status.
 * @since 0.0.11
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[import("node:fs").Stats|undefined, Error|undefined]>}
 */
export async function getStatus(
	path: string | Buffer | URL,
): Promise<[import("node:fs").Stats | undefined, Error | undefined]> {
	try {
		return [await stat(path), undefined];
	} catch (error: unknown) {
		return [undefined, error as Error];
	}
}
