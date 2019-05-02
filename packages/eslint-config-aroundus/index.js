const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  extends: ['eslint:recommended'],
  parser: require.resolve('babel-eslint'),
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'default-case': 'off',
    eqeqeq: ['error', 'smart'],
    'no-case-declarations': 'off',
    'no-console': isDev ? 'warn' : 'error',
    'no-constant-condition': 'off',
    'no-continue': 'error',
    'no-duplicate-imports': 'error',
    'no-dupe-keys': 'error',
    'no-empty': 'off',
    'no-extend-native': 'error',
    'no-shadow': 'error',
    'no-template-curly-in-string': 'off',
    'no-undef': 'error',
    'no-unused-vars': isDev ? 'warn' : 'error',
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
