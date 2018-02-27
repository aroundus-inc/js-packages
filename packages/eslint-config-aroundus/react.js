module.exports = {
  plugins: ['react'],
  extends: [
    require.resolve('eslint-config-react-app'),
    require.resolve('./prettier'),
    require.resolve('eslint-config-prettier/react'),
    require.resolve('./index'),
  ],
  env: {
    browser: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
};
