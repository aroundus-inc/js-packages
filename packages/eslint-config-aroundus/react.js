module.exports = {
  extends: [
    require.resolve('./index'),
    require.resolve('react-app'),
    require.resolve('./prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
};
