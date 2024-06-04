import { resolve } from "node:path";

import { absolutePath } from "./absolute-path";

/**
 * @name absolutePathFrom
 * @description Join all arguments together and normalize the resulting path.
 * Creates absolute path from right to left until an absolute path is constructed.
 * @since 0.1.5
 * @param {string|string[]} paths
 * @param {...string} morePaths
 * @returns {string}
 */
export function absolutePathFrom(paths: string | string[], ...morePaths: string[]): string {
	let routes: string[];
	if (Array.isArray(paths)) {
		routes = paths.map((path) => path.toString());
	} else {
		routes = [paths.toString()];
	}
	if (morePaths.length) {
		routes = routes.concat(morePaths.map((path) => path.toString()));
	}
	return absolutePath(resolve(...routes));
}
