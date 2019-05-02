module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('./index'),
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
