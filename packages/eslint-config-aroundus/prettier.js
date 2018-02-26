module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('./flowtype'),
    require.resolve('eslint-config-prettier/flowtype'),
    require.resolve('./index'),
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
