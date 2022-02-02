module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
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
    '@typescript-eslint/no-unused-vars': ['2', { argsIgnorePattern: '^_' }],
    'no-lone-blocks': [0],
    'no-inner-declarations': [0],
  },
};
