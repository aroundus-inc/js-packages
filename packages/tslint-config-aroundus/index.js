const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  extends: ['tslint:recommended'],
  rulesDirectory: ['tslint-config-standard'],
  rules: {
    'object-literal-sort-keys': false,
    'no-console': isDev ? false : true,
    'no-unused-variable': isDev ? false : true,
    'no-var-requires': false,
    'no-implicit-dependencies': false,
    'no-submodule-imports': false,
    'no-empty-interface': false,
    'default-case': false,
    'no-case-declarations': false,
    'no-constant-condition': false,
    'no-duplicate-imports': true,
    'no-empty': false,
    'no-template-curly-in-string': false,
    'prefer-const': true,
  },
};
