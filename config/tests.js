/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],

  env: {
    node: true,
    'jest/globals': true,
  },

  plugins: ['jest', 'jest-dom'],

  // We're using Vitest which has a very similar API to jest (so the linting
  // plugins work nicely), but it means we have to explicitly set the jest version.
  settings: {
    jest: {
      version: 28,
    },
  },

  rules: {
    'jest/no-conditional-expect': 'warn',
    'jest/no-deprecated-functions': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'warn',
    'jest/no-interpolation-in-snapshots': 'warn',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'warn',
    'jest/no-mocks-import': 'warn',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',

    'jest-dom/prefer-checked': 'warn',
    'jest-dom/prefer-empty': 'warn',
    'jest-dom/prefer-enabled-disabled': 'warn',
    'jest-dom/prefer-focus': 'warn',
    'jest-dom/prefer-in-document': 'off',
    'jest-dom/prefer-required': 'warn',
    'jest-dom/prefer-to-have-attribute': 'warn',
    'jest-dom/prefer-to-have-class': 'warn',
    'jest-dom/prefer-to-have-style': 'warn',
    'jest-dom/prefer-to-have-text-content': 'warn',
    'jest-dom/prefer-to-have-value': 'warn',
  },
};
