import { access } from "node:fs/promises";

/**
 * @name accessWrapper
 * @description Asynchronously tests a user's permissions for the file specified by path.
 * @since 0.0.1
 * @async
 * @param {number} mode
 * @param {string|Buffer|URL} path
 * @returns {Promise<boolean|Error>}
 */
export async function accessWrapper(mode: number, path: string | Buffer | URL): Promise<boolean | Error> {
	try {
		await access(path, mode);
		return true;
	} catch (error: unknown) {
		return error as Error;
	}
}
