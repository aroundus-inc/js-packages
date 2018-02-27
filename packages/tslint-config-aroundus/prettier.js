const eslintRules = require('eslint-config-aroundus/prettier').rules;
const convertedEslintRules = Object.keys(eslintRules).reduce((a, b) => {
  a[b] = Array.isArray(eslintRules[b]) ? eslintRules[b] : [eslintRules[b]];
  a[b][0] = a[b][0] === 'error';
  return a;
}, {});

module.exports = {
  rulesDirectory: ['tslint-plugin-prettier', 'tslint-config-prettier'],
  rules: Object.assign(
    {
      prettier: true,
    },
    convertedEslintRules
  ),
  jsRules: convertedEslintRules,
};
