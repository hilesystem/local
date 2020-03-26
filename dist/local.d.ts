/**
 * @name dirIsExecutable
 * @description Directory can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsExecutable(
  pathToDir: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsReadable
 * @description Directory is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsReadable(
  pathToDir: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsVisible
 * @description Directory is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsVisible(
  pathToDir: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name dirIsWritable
 * @description Directory can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string} pathToDir
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function dirIsWritable(
  pathToDir: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsExecutable
 * @description File can be executed by the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsExecutable(
  pathToFile: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsReadable
 * @description File is visible to the calling process
 * @since 0.0.1
 * @async
 * @param {string} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsReadable(
  pathToFile: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsVisible
 * @description File is visible to the calling process
 * @since 0.0.5
 * @async
 * @param {string} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsVisible(
  pathToFile: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;

/**
 * @name fileIsWritable
 * @description File can be written by the calling process
 * @since 0.0.1
 * @async
 * @param {string} pathToFile
 * @returns {Promise<boolean|Error|{readonly name: string, readonly message: string, readonly stack?: string}>}
 */
export declare function fileIsWritable(
  pathToFile: string,
): Promise<true | Error | { readonly name: string; readonly message: string; readonly stack?: string }>;
