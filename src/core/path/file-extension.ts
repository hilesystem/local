import { extname } from "node:path";

/**
 * @name fileExtension
 * @description Get file extension.
 * @since 0.1.1
 * @param {string} path
 * @returns {string}
 */
export function fileExtension(path: string): string {
	return extname(path).substring(1);
}
