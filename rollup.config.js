import babel from "rollup-plugin-babel";
import progress from "rollup-plugin-progress";
import resolve from "rollup-plugin-node-resolve";

export default {
  entry: "src/index.js",
  format: "cjs",
  plugins: [
    resolve({}),
    babel({
      presets: [["es2015", { modules: false }], "stage-2"],
      exclude: "node_modules/**",
    }),
    progress({}),
  ],
  dest: "dist/app.js",
  sourceMap: true,
};
