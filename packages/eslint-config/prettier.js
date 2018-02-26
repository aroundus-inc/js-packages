module.exports = {
  plugins: [require.resolve('eslint-plugin-prettier')],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('./flowtype'),
    require.resolve('eslint-config-prettier/flowtype'),
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
