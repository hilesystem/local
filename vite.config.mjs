import nodeExternals from "vite-plugin-node-externals";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "./src/index.ts",
			formats: ["cjs", "es"],
			fileName: (format) => `index.${format === "cjs" ? "cjs" : "mjs"}`,
		},
		rollupOptions: {
			external: [
				//
				"node:assert",
				"node:crypto",
				"node:fs",
				"node:fs/promises",
				"node:os",
				"node:path",
			],
		},
		plugins: [
			//
			nodeExternals(),
		],
		sourcemap: true,
		minify: 'esbuild',
	},
});
