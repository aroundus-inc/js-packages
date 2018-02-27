module.exports = {
  rulesDirectory: ['tslint-plugin-prettier', 'tslint-config-prettier'],
  rules: {
    prettier: true,
  },
  jsRules: Object.assign(
    {},
    require('eslint-config-aroundus').rules,
    require('eslint-config-aroundus/prettier').rules
  ),
};
