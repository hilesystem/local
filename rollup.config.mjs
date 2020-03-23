import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const INPUT_NAME = "index.js";
const OUTPUT_NAME = "local";

export default {
  input: `./src/${INPUT_NAME}`,
  output: [
    {
      exports: "named",
      file: `./dist/${OUTPUT_NAME}.cjs`,
      format: "cjs",
      sourcemap: true,
    },
    {
      exports: "named",
      file: `./dist/${OUTPUT_NAME}.mjs`,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelrc: true }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    terser({
      keep_classnames: true,
      keep_fnames: true,
      output: {
        comments: false,
      },
      sourcemap: true,
      warnings: true,
    }),
  ],
  external: ["fs", "@r37r0m0d3l/of"],
};
