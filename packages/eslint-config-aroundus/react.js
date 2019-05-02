module.exports = {
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-flowtype',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
  ],
  extends: [
    require.resolve('eslint-config-react-app'),
    require.resolve('./index'),
  ],
  env: {
    browser: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
};
