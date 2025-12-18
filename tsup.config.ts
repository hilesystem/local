import type { Options } from "tsup";

const tsup: Options = {
	splitting: false,
	clean: false,
	dts: true,
	format: ["cjs", "esm"],
	minify: false,
	bundle: true,
	skipNodeModulesBundle: true,
	outDir: "dist",
	entry: ["src/index.ts"],
	esbuildOptions(options) {
		// the directory structure will be the same as the source
		options.outbase = "./";
	},
};

export default tsup;
