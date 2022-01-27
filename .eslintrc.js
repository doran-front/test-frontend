module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "eslint-config-prettier",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "impliedStric": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    "rules": {
      "prettier/prettier": "error"
    }
}
