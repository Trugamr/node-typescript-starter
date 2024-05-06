import esbuild from "esbuild";

await esbuild.build({
	entryPoints: ["./src/**/*.ts"],
	bundle: true,
	sourcemap: true,
	splitting: true,
	minify: false,
	platform: "node",
	target: "node20",
	format: "esm",
	packages: "external",
	outdir: "./dist",
});
