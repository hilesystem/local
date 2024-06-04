import { lstat } from "node:fs/promises";

/**
 * @name getLinkStatus
 * @description Get file status unless `path` refers to a symbolic link, in which case the link itself is stat-ed, not the file that it refers to.
 * @url http://man7.org/linux/man-pages/man2/lstat.2.html
 * @since 1.1.0
 * @async
 * @param {string|Buffer|URL} path
 * @returns {Promise<[import("node:fs").Stats|undefined, Error|undefined]>}
 */
export async function getLinkStatus(
	path: string | Buffer | URL,
): Promise<[import("node:fs").Stats | undefined, Error | undefined]> {
	try {
		return [await lstat(path), undefined];
	} catch (error: unknown) {
		return [undefined, error as Error];
	}
}
