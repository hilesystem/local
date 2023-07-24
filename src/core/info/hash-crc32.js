import { readFile } from "node:fs/promises";

function crc32(text) {
  let chars = [];
  let actual;
  for (let current = 0; current < 256; current++) {
    actual = current;
    for (let f = 0; f < 8; f++) {
      actual = 1 & actual ? 3988292384 ^ (actual >>> 1) : actual >>> 1;
    }
    chars[current] = actual;
  }
  let number = -1;
  let index = 0;
  for (; index < text.length; index++) {
    number = (number >>> 8) ^ chars[255 & (number ^ text.charCodeAt(index))];
  }
  return (-1 ^ number) >>> 0;
}

/**
 * @name hashCrc32
 * @description CRC32.
 * @since 0.2.3
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
 */
export async function hashCrc32(pathToFile) {
  return crc32((await readFile(pathToFile)).toString("binary")).toString(16);
}
