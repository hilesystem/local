import { URL } from "url";

export type PathLike = string | Buffer | URL;

/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsExecutable(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsReadable(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsVisible(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsWritable(
  pathToDir: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsExecutable(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsReadable(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsVisible(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsWritable(
  pathToFile: PathLike,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileTruncate
 * @description Truncate a file to a specified length
 * @since 0.0.6
 * @async
 * @param {string|Buffer|URL} pathToFile
 * @param {number=0} length
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileTruncate(
  pathToFile: PathLike,
  length: number,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;
