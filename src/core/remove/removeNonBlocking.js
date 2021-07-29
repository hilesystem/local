import { remove } from "./remove.js";

/**
 * @name removeNonBlocking
 * @description Non-blocking remove of a file or directory.
 * @since 0.1.18
 * @param {string|Buffer|URL} pathLike
 * @returns {void}
 */
export function removeNonBlocking(pathLike) {
  remove(pathLike)
    .then(() => undefined)
    .catch(() => undefined); // don't put it into next tick
}
