module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    "import/resolver": {
        "node": {
          "paths": ["src"]
        }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": [
      "error",
      {
          code: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true
      }
    ],
  "react/jsx-filename-extension": [
      1, {
          "extensions": [".js", ".jsx"]
      }
  ],
  "react/forbid-prop-types": "off",
  "react/no-unescaped-entities": 0
  },
};

