import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
export async function dirIsExecutable(pathToDir: string | Buffer | URL): Promise<boolean | Error> {
	return accessWrapper(constants.X_OK, pathToDir);
}
