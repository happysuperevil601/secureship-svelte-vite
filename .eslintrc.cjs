module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['svelte3', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  settings: {
    'svelte3/typescript': true,
    'svelte3/ignore-styles': (attrs) => true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      parserOptions: {
        parser: 'babel-eslint', // Use the Babel parser for Svelte files
      },
    },
  ],
  rules: {
    // Add any custom rules or overrides here
  },
};
