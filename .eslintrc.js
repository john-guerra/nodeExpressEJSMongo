module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "prettier"
        // "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        indent: ["warn", 2, { SwitchCase: 1 }],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": 0
    }
};
