import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from "eslint-plugin-astro";
import stylisticJs from "@stylistic/eslint-plugin-js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    plugins: {
      "@stylistic/js": stylisticJs
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/quotes": ["error", "double"],
      "@stylistic/js/semi": "error",
      "@stylistic/js/space-before-function-paren": ["error", "always"]
    }
  }
];