import globals from 'globals';
import config from './index.js';

export default [
  ...config,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    settings: {
      // Manually set the version to disable automated detection of the "react" dependency.
      react: { version: '999.999.999' },
    },
    rules: {
      // Allow .js extensions for local ESM imports since this package uses "type": "module"
      'import/extensions': ['error', 'ignorePackages'],
    },
  },
  {
    files: ['*.test.{js,mjs}'],
    rules: {
      'import/extensions': ['error', 'always'],
      'import/no-commonjs': 'error',
    },
  },
  {
    ignores: ['examples/**'],
  },
];
