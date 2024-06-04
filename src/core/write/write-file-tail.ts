import { createFile } from "../create/create-file";
import { isFileExists } from "../status/is-file-exists";
import { readFileToString } from "../read/read-file-to-string";
import { writeFile } from "./write-file";

/**
 * @name writeFileTail
 * @description Asynchronously writes data to the end of a file.
 * @since 1.0.1
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {string} data
 * @param {*|null|string=} options
 * @returns {Promise<boolean|Error>}
 */
export async function writeFileTail(
	filePath: string | Buffer | URL,
	data: any,
	options: any | null | string = null,
): Promise<boolean | Error> {
	const isFileExist = await isFileExists(filePath);
	if (!isFileExist) {
		const isFileCreatedOrError = await createFile(filePath);
		if (isFileCreatedOrError !== true) {
			return isFileCreatedOrError as Error;
		}
	}
	const contentOrError = await readFileToString(filePath);
	if (contentOrError instanceof Error) {
		return contentOrError;
	}
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			writeFile(filePath, `${String(contentOrError)}${String(data)}`, options)
				.then(() => {
					resolve(true);
				})
				.catch((error) => {
					reject(error);
				});
		}, 1);
	});
}
