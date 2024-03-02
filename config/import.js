/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ['**/*.{ts,tsx,mts}'],

  plugins: ['simple-import-sort'],

  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
