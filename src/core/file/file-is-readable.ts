import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
export async function fileIsReadable(pathToFile: string | Buffer | URL): Promise<boolean | Error> {
	return accessWrapper(constants.R_OK, pathToFile);
}
