module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    require.resolve('./prettier'),
    require.resolve('eslint-config-prettier/flowtype'),
    require.resolve('./index'),
  ],
  plugins: ['flowtype'],
};
