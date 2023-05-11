// @ts-ignore

declare global {
  /**
   * @typedef {Object} ErrorOptions
   * @property {Error | { code?: string, values?: any[] | { [key: string]: any } }} [cause]
   */
  export interface ErrorOptions {
    cause?:
      | { cause: Error }
      | {
          code?: string;
          values?:
            | any[]
            | {
                [key: string]: any;
              };
        };
  }

  export interface ErrorConstructor {
    new (message?: string, options?: ErrorOptions): Error;
    (message?: string): Error;
    readonly prototype: Error;
  }

  var Error: ErrorConstructor;
}

/**
 * @param {Error} error
 * @returns {ErrorOptions}
 */
export declare function errorExtractOptions(error: Error): ErrorOptions;
