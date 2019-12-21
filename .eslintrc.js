const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  extends: ['prettier', 'prettier/react'],
  rules: {
    'prettier/prettier': 'error',
    'eslint-comments/disable-enable-pair': 0,
    'eslint-comments/no-unlimited-disable': 0,
    '@typescript-eslint/camelcase': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'max-len': 0,
    'consistent-return': 0,
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  plugins: ['prettier', 'eslint-plugin-prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
};
