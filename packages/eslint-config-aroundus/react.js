module.exports = {
  plugins: ['eslint-plugin-react'],
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
