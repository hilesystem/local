import { rm } from "node:fs/promises";

import type { RmOptions } from "node:fs";

/**
 * @name removeSilent
 * @description Removes files and directories (modeled on the standard POSIX rm utility).
 * @summary Minimum Node version 14.14.0
 * @since 0.1.36
 * @async
 * @param {string|Buffer|URL} pathLike
 * @param {RmOptions=} options
 * @returns {Promise<void>}
 */
export async function removeSilent(pathLike: string | Buffer | URL, options: RmOptions): Promise<void> {
	try {
		await rm(pathLike, {
			force: true,
			recursive: true,
			...options,
		});
	} catch (__error) {
		//
	}
}
