import { writeFile } from "./write-file";

/**
 * @name objectKeys
 * @param {object} object
 * @returns {string[]}
 */
function objectKeys(object: object) {
	return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
}

/**
 * name isObjectLike
 * @param {*} value
 * @returns {boolean}
 */
function isObjectLike(value: any) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * @name collectionSortKeys
 * @param {*} value
 * @param {boolean=} [isDeep=true]
 * @returns {Record<string, any>|any[]}
 */
function collectionSortKeys(value: any, isDeep = true): Record<string, any> | any[] {
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
	return keys.reduce((sorted: Record<string, any>, key) => {
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
 * @name writeJson
 * @description Asynchronously writes data to a file, replacing the file if it already exists.
 * @since 0.1.25
 * @async
 * @param {string|Buffer|URL} filePath
 * @param {*} data
 * @param {*|null|string=} options
 * @param {{sort: boolean, space: number|string}=} configuration
 * @returns {Promise<boolean|Error>}
 */
export async function writeJson(
	filePath: string | Buffer | URL,
	data: any,
	options: any | null | string = null,
	configuration: { sort: boolean; space: number | string } | undefined,
): Promise<boolean | Error> {
	let json;
	let stringify = data;
	try {
		if (configuration) {
			if (configuration.sort) {
				if (isObjectLike(data)) {
					stringify = collectionSortKeys(JSON.parse(JSON.stringify(data)));
				} else if (Array.isArray(data)) {
					stringify = JSON.parse(JSON.stringify(data));
				}
			}
			if (configuration.space) {
				json = JSON.stringify(stringify, null, configuration.space);
			}
		} else {
			json = JSON.stringify(stringify);
		}
	} catch (error: unknown) {
		return error as Error;
	}
	return writeFile(filePath, json, options);
}
