// this is a trimmed down version of the eslintrc file from a nestjs project
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "padding-line-between-statements": [
      "warn",
      // one of the following rules must be enabled (i assume any "padding-line-between-statements" rule)
      // { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: "for", next: "*" },
    ],
  },
};
