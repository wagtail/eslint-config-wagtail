import config from './index.js';
import globals from 'globals';

export default [
  {
    ignores: ['examples/**', 'node_modules/**'],
  },
  ...config,
  {
    files: ['index.js'],
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^typescript-eslint$'],
        },
      ],
    },
  },
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
      'react': { version: '999.999.999' },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['**/*.test.{js,mjs}'],
    rules: {
      'import/extensions': ['error', 'always'],
      'import/no-commonjs': 'error',
    },
  },
];
