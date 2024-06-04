import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
export async function dirIsWritable(pathToDir: string | Buffer | URL): Promise<boolean | Error> {
	if (process?.permission?.has("fs.write") !== undefined) {
		const isWritable = process.permission?.has("fs.write", pathToDir as string);
		if (isWritable !== undefined) {
			return isWritable;
		}
	}
	return accessWrapper(constants.W_OK, pathToDir);
}
