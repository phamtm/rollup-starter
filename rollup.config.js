import progress from "rollup-plugin-progress";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import typescriptCompiler from "typescript";

export default {
  entry: "src/index.ts",
  format: "cjs",
  plugins: [
    resolve({}),
    typescript({
      typescript: typescriptCompiler,
    }),
    progress({}),
  ],
  dest: "dist/app.js",
  sourceMap: true,
};
