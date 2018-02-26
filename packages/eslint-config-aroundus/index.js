const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
  },
  rules: {
    'default-case': 'off',
    eqeqeq: ['error', 'smart'],
    'no-console': isDev ? 'warn' : 'error',
    'no-shadow': 'error',
    'no-undef': 'error',
    'no-var': 'error',
    'no-empty': 'off',
    'no-unused-vars': isDev ? 'warn' : 'error',
    'prefer-const': 'error',
    'no-continue': 'error',
    'no-duplicate-imports': 'error',
    'no-dupe-keys': 'error',
    'no-extend-native': 'error',
    'no-template-curly-in-string': 'off',
    'prettier/prettier': 'error',
  },
};
