import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
export async function dirIsReadable(pathToDir: string | Buffer | URL): Promise<boolean | Error> {
	if (process?.permission?.has("fs.read") !== undefined) {
		const isWritable = process.permission?.has("fs.read", pathToDir as string);
		if (isWritable !== undefined) {
			return isWritable;
		}
	}
	return accessWrapper(constants.R_OK, pathToDir);
}
