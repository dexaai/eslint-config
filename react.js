const reactRules = require('./rules/react');
const jsxA11yRules = require('./rules/jsx-a11y');
const reactSettings = require('./settings/react');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  settings: {
    ...reactSettings,
  },
  rules: {
    ...reactRules,
    ...jsxA11yRules,
  },
};
