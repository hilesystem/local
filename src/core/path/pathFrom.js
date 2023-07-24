import { join, normalize } from "node:path";

/**
 * @name pathFrom
 * @description Join all arguments together and normalize the resulting path.
 * @since 0.1.3
 * @param {string|Array.<string>} paths
 * @param {...string} morePaths
 * @returns {string}
 */
export function pathFrom(paths, ...morePaths) {
  let routes;
  if (Array.isArray(paths)) {
    routes = paths.map((path) => path.toString());
  } else {
    routes = [paths.toString()];
  }
  if (morePaths.length) {
    routes = routes.concat(morePaths.map((path) => path.toString()));
  }
  return normalize(join(...routes));
}
