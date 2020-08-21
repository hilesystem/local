import * as fs from "fs";

import { absolutePathFrom } from "./path/absolutePathFrom.js";
import { createDirectory } from "./create/createDirectory.js";
import { createFile } from "./create/createFile.js";
import { dirIsExecutable } from "./dir/dirIsExecutable.js";
import { dirIsReadable } from "./dir/dirIsReadable.js";
import { dirIsVisible } from "./dir/dirIsVisible.js";
import { dirIsWritable } from "./dir/dirIsWritable.js";
import { fileExtension } from "./path/fileExtension.js";
import { fileIsExecutable } from "./file/fileIsExecutable.js";
import { fileIsReadable } from "./file/fileIsReadable.js";
import { fileIsVisible } from "./file/fileIsVisible.js";
import { fileIsWritable } from "./file/fileIsWritable.js";
import { fileName } from "./path/fileName.js";
import { fileNameExt } from "./path/fileNameExt.js";
import { filePath } from "./path/filePath.js";
import { fileTruncate } from "./file/fileTruncate.js";
import { getStatus } from "./status/getStatus.js";
import { isDirExists } from "./status/isDirExists.js";
import { isFileExists } from "./status/isFileExists.js";
import { isPathExists } from "./status/isPathExists.js";
import { pathFrom } from "./path/pathFrom.js";
import { readFileToString } from "./read/readFileToString.js";
import { remove } from "./remove/remove.js";
import { writeFile } from "./write/writeFile.js";

export class HileSystemLocal {
  /**
   * @name absolutePathFrom
   * @description Join all arguments together and normalize the resulting path.
   * reates absolute path from right to left until an absolute path is constructed.
   * @since 0.1.5
   * @public
   * @param {string|Array.<string>} paths
   * @param {...string} morePaths
   * @returns {string}
   */
  absolutePathFrom = absolutePathFrom;
  /**
   * @name createDirectory
   * @description Asynchronous create a directory.
   * @since 0.0.10
   * @async
   * @public
   * @param {string|Buffer|URL} dirPath
   * @param {number|string=} mode
   * @param {boolean=} recursive
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  createDirectory = createDirectory;
  /**
   * @name createFile
   * @description Asynchronous create a file.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} pathLike
   * @param {number|string=} mode
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  createFile = createFile;
  /**
   * @name dirIsExecutable
   * @description Directory can be executed by the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsExecutable = dirIsExecutable;
  /**
   * @name dirIsReadable
   * @description Directory is visible to the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsReadable = dirIsReadable;
  /**
   * @name dirIsVisible
   * @description Directory is visible to the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsVisible = dirIsVisible;
  /**
   * @name dirIsWritable
   * @description Directory can be written by the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string} pathToDir
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  dirIsWritable = dirIsWritable;
  /**
   * @name getStatus
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<Array.<(fs.Stats|undefined|Error|{name: string, message: string, stack?: string})>>}
   */
  getStatus = getStatus;
  /**
   * @name isDirExists
   * @description Get directory status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  isDirExists = isDirExists;
  /**
   * @name isFileExists
   * @description Get file status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  isFileExists = isFileExists;
  /**
   * @name isPathExists
   * @description Get path status.
   * @since 0.0.11
   * @async
   * @public
   * @param {string|Buffer|URL} path
   * @returns {Promise<boolean>}
   */
  isPathExists = isPathExists;
  /**
   * @name fileExtension
   * @description Get file extension.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  fileExtension = fileExtension;
  /**
   * @name fileName
   * @description Return the file name without extension.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  fileName = fileName;
  /**
   * @name fileNameExt
   * @description Return the last portion of a path.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  fileNameExt = fileNameExt;
  /**
   * @name filePath
   * @description Return the directory name of a path.
   * @since 0.1.1
   * @public
   * @param {string} path
   * @returns {string}
   */
  filePath = filePath;
  /**
   * @name fileIsExecutable
   * @description File can be executed by the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsExecutable = fileIsExecutable;
  /**
   * @name fileIsReadable
   * @description File is visible to the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsReadable = fileIsReadable;
  /**
   * @name fileIsVisible
   * @description File is visible to the calling process
   * @since 0.0.5
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsVisible = fileIsVisible;
  /**
   * @name fileIsWritable
   * @description File can be written by the calling process
   * @since 0.0.1
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileIsWritable = fileIsWritable;
  /**
   * @name fileTruncate
   * @description Truncate a file to a specified length
   * @since 0.0.6
   * @async
   * @public
   * @param {string|Buffer|URL} pathToFile
   * @param {number=} length
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  fileTruncate = fileTruncate;
  /**
   * @name pathFrom
   * @description Join all arguments together and normalize the resulting path.
   * @since 0.1.3
   * @public
   * @param {string|Array.<string>} paths
   * @param {...string} morePaths
   * @returns {string}
   */
  pathFrom = pathFrom;

  /**
   * @name readFileToString
   * @description Asynchronously reads the entire contents of a file into string.
   * @since 0.1.7
   * @async
   * @param {string|Buffer|URL} pathLike
   * @returns {Promise<string|Error|{name: string, message: string, stack?: string}>}
   */
  readFileToString = readFileToString;

  /**
   * @name remove
   * @description Removes a file or directory.
   * @since 0.1.1
   * @async
   * @public
   * @param {string} pathLike
   * @returns {Promise<undefined|Error|{name: string, message: string, stack?: string}>}
   */
  remove = remove;
  /**
   * @name writeFile
   * @description Asynchronously writes data to a file, replacing the file if it already exists.
   * @since 0.0.10
   * @async
   * @public
   * @param {string|Buffer|URL|fs.promises.FileHandle} filePath
   * @param {*=} data
   * @param {*|null|string=} options
   * @returns {Promise<boolean|Error|{name: string, message: string, stack?: string}>}
   */
  writeFile = writeFile;
}