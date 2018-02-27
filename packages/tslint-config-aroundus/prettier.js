module.exports = {
  rulesDirectory: [
    'tslint-plugin-prettier',
    'tslint-config-prettier',
    require.resolve('./index'),
  ],
  rules: {
    prettier: true,
  },
};
