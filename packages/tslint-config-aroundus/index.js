const eslintRules = require('eslint-config-aroundus').rules;
const convertedEslintRules = Object.keys(eslintRules).reduce((a, b) => {
  a[b] = Array.isArray(eslintRules[b]) ? eslintRules[b] : [eslintRules[b]];
  a[b][0] = a[b][0] === 'error';
  return a;
}, {});

module.exports = {
  extends: ['tslint:recommended'],
  rulesDirectory: ['tslint-config-standard'],
  env: {
    node: true,
    jest: true,
  },
  rules: Object.assign(
    {
      'object-literal-sort-keys': false,
      'no-unused-variable': true,
      'no-var-requires': false,
      'no-implicit-dependencies': false,
      'no-submodule-imports': false,
      'no-empty-interface': false,
      'no-console': false,
    },
    convertedEslintRules
  ),
  jsRules: convertedEslintRules,
};
