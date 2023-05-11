/**
 * @name errorExtractOptions
 * @param {Error} error
 * @returns {{ cause: Error } | { cause: { code?: string, values?: any[] | { [key: string]: any } }}}
 */
export function errorExtractOptions(error) {
  if (!(error instanceof Error)) {
    return {
      cause: error,
    };
  }
  if ("code" in error && "errno" in error && "path" in error && "syscall" in error) {
    return {
      cause: {
        code: error.code,
        values: {
          errno: error.errno,
          path: error.path,
          syscall: error.syscall,
        },
      },
    };
  }
}
