module.exports = {
  extends: [
    'plugin:eslint-plugin-flowtype/recommended',
    require.resolve('./prettier'),
    require.resolve('eslint-config-prettier/flowtype'),
    require.resolve('./index'),
  ],
  plugins: ['eslint-plugin-flowtype'],
};
