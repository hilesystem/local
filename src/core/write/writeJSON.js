import { writeFile } from "./writeFile.js";

/**
 * @name objectKeys
 * @param {object} object
 * @returns {Array.<string>}
 */
function objectKeys(object) {
  return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
}

/**
 * name isObjectLike
 * @param {*} value
 * @returns {boolean}
 */
function isObjectLike(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * @name collectionSortKeys
 * @param {*} value
 * @param {boolean=} [isDeep=true]
 * @returns {*}
 */
function collectionSortKeys(value, isDeep = true) {
  if (!isObjectLike(value)) {
    if (Array.isArray(value)) {
      return value.map((arrayValue) => collectionSortKeys(arrayValue, isDeep));
    }
    return value;
  }
  const keys = objectKeys(value);
  if (!keys.length) {
    return value;
  }
  return keys.reduce((sorted, key) => {
    if (isDeep && isObjectLike(value[key])) {
      sorted[key] = collectionSortKeys(value[key], isDeep);
    } else if (isDeep && Array.isArray(value[key])) {
      sorted[key] = collectionSortKeys(value[key], isDeep);
    } else {
      sorted[key] = value[key];
    }
    return sorted;
  }, {});
}

/**
 * @name writeJSON
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.1.25
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {*} data
 * @param {*|null|string=} options
 * @param {{sort: boolean, space: number|string}=} configuration
 * @returns {Promise<boolean|Error|{name: string, message: string, stack: string}>}
 */
export async function writeJSON(filePath, data, options, configuration) {
  let json;
  let stringify = data;
  try {
    if (configuration) {
      if (configuration.sort) {
        if (isObjectLike(data)) {
          stringify = collectionSortKeys(JSON.parse(JSON.stringify(data)));
        } else if (Array.isArray(data)) {
          stringify = JSON.parse(JSON.stringify(data));
        } else {
          stringify = data;
        }
      }
      if (configuration.space) {
        json = JSON.stringify(stringify, null, configuration.space);
      }
    } else {
      json = JSON.stringify(stringify);
    }
  } catch (error) {
    return error;
  }
  return writeFile(filePath, json, options);
}
