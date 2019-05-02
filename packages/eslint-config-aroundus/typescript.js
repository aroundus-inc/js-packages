module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    require.resolve('./prettier'),
    require.resolve('eslint-config-jest-enzyme'),
    require.resolve('./index'),
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
  },
};
