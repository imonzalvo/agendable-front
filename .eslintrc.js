const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: {
    'eslint-comments/disable-enable-pair': 0,
    'eslint-comments/no-unlimited-disable': 0,
    '@typescript-eslint/camelcase': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
