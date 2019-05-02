module.exports = {
  plugins: ['eslint-plugin-prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('./index'),
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
