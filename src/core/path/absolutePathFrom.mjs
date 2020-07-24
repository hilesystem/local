import { resolve } from "path";

/**
 * @name pathFrom
 * @description Join all arguments together and normalize the resulting path.
 * Creates absolute path from right to left until an absolute path is constructed.
 * @since 0.1.5
 * @param {string|Array.<string>} paths
 * @param {...string} morePaths
 * @returns {string}
 */
export function absolutePathFrom(paths, ...morePaths) {
  let routes;
  if (Array.isArray(paths)) {
    routes = paths.map((path) => path.toString());
  } else {
    routes = [paths.toString()];
  }
  if (morePaths.length) {
    routes = routes.concat(morePaths.map((path) => path.toString()));
  }
  return resolve(...routes);
}
