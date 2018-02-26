module.exports = {
  extends: [
    require.resolve('./index'),
    require.resolve('eslint-config-react-app'),
    require.resolve('./prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'default-case': 'off',
    eqeqeq: ['error', 'smart'],
    'no-template-curly-in-string': 'off',
    'jsx-a11y/href-no-hash': 'off',
  },
};
