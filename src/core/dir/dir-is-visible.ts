import { constants } from "node:fs";

import { accessWrapper } from "../access/wrapper";

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error>}
 */
export async function dirIsVisible(pathToDir: string | Buffer | URL): Promise<boolean | Error> {
	return accessWrapper(constants.F_OK, pathToDir);
}
