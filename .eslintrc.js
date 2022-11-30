module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react", "jest"],
  rules: {},
  ignorePatterns: ["/node_modules", "/homepage"],
};
