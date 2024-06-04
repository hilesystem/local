import { rename } from "node:fs/promises";

/**
 * @name move
 * @description Change the name or location of a file or directory.
 * @since 0.1.29
 * @param {string} pathFrom
 * @param {string} pathTo
 * @returns {Promise<boolean|Error>}
 */
export async function move(pathFrom: string, pathTo: string): Promise<boolean | Error> {
	try {
		await rename(pathFrom, pathTo);
		return true;
	} catch (error: unknown) {
		return error as Error;
	}
}
