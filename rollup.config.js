const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "build/cjs",
        format: "cjs",
        preserveModules: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ outDir: "build/cjs", declarationDir: "build/cjs/src" }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: "build/esm",
        format: "esm",
        preserveModules: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ outDir: "build/esm", declarationDir: "build/esm/src" }),
    ],
  },
];
