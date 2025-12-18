import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
export async function fileIsWritable(pathToFile: string | Buffer | URL): Promise<boolean | Error> {
	return accessWrapper(constants.W_OK, pathToFile);
}
