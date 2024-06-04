import { parse } from "node:path";

/**
 * @name fileName
 * @description Return the file name without extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileName(path: string): string {
	return parse(path).name;
}
