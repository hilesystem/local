import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error>}
 */
export async function fileIsExecutable(pathToFile: string | Buffer | URL): Promise<boolean | Error> {
	return accessWrapper(constants.X_OK, pathToFile);
}
