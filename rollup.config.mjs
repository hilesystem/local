/*  eslint-env node */
import rollupConfigPkg from "@r37r0m0d3l/rollup-config-pkg";

let config = {};
Object.assign(config, rollupConfigPkg("index", "index"));
Object.assign(config, { external: ["@r37r0m0d3l/of", "fs", "path"] });

export default config;
