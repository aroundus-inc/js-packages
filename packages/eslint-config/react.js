module.exports = {
  extends: [
    require.resolve('./index'),
    require.resolve('react-app'),
    require.resolve('./prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
};
