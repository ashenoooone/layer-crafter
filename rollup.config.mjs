import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";
export default {
  input: "src/cli.ts",
  output: [
    {
      file: "build/cli.js",
      format: "cjs",
      sourcemap: true,
      banner: "#!/usr/bin/env node\n",
    },
  ],
  plugins: [
    replace({
      delimiters: ["", ""],
      "#!/usr/bin/env node": "",
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};
