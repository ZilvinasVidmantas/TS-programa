module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: [2, 'single'],
    'max-len': [0],
    'no-console': [0],
    'no-lone-blocks': [0],
    'no-inner-declarations': [0],
    'no-param-reassign': [0],
    'no-empty': [0],
  },
};
