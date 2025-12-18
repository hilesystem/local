/**
 * @name errorExtractOptions
 * @param {Error} error
 * @returns {{ cause: Error } | { cause: { code?: string, values?: any[] | { [key: string]: any } }}}
 */
export function errorExtractOptions(
	error: any,
): { cause: Error } | { cause: { code?: string; values?: any[] | { [key: string]: any } } } {
	if (!(error instanceof Error)) {
		return { cause: error };
	}
	if ("code" in error && "errno" in error && "path" in error && "syscall" in error) {
		return {
			cause: {
				code: (error as NodeJS.ErrnoException).code as string,
				values: {
					errno: error.errno,
					path: error.path,
					syscall: error.syscall,
				},
			},
		};
	}
	return { cause: error };
}
