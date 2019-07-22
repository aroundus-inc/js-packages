module.exports = {
  plugins: ['eslint-plugin-prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('./index'),
  ],
  rules: {
    'no-confusing-arrow': ['error', { allowParens: false }],
    'prettier/prettier': 'error',
  },
};
