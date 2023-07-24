/*  eslint-env node */
import rollupConfigPkg from "@r37r0m0d3l/rollup-config-pkg";

let config = {};
Object.assign(config, rollupConfigPkg("index", "index"));
Object.assign(config, {
  external: [
    //
    "node:assert",
    "node:crypto",
    "node:fs",
    "node:fs/promises",
    "node:path",
  ],
});
config.output[2].format = "cjs";

export default config;
