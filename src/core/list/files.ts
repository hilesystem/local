import { getStatus } from "../status/get-status";
import { listContents } from "./contents";
import { pathFrom } from "../path/path-from";

/**
 * @name listFiles
 * @description Lists files in path
 * @since 0.1.32
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<string[]|Error>}
 */
export async function listFiles(pathToDir: string | Buffer | URL): Promise<string[] | Error> {
	const contents = await listContents(pathToDir);
	if (!Array.isArray(contents)) {
		return contents;
	}
	const files = await Promise.all(
		contents.map(async (content) => {
			const contentPath = pathFrom(pathToDir, content);
			const [status, error] = await getStatus(contentPath);
			if (error) {
				return undefined;
			}
			if ((status as import("node:fs").Stats).isDirectory()) {
				return undefined;
			}
			return content;
		}),
	);
	return files.filter((content) => content) as string[];
}
