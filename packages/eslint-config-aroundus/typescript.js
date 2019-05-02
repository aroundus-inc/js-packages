module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    require.resolve('eslint-config-prettier/@typescript-eslint'),
    require.resolve('./index'),
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': ['off'],
        'no-undef': ['off'],
      },
    },
  ],
};
