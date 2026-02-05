import { defineConfig } from 'eslint/config';
import globals from 'globals';
import config from './index.js';

export default defineConfig(
  {
    ignores: ['examples/**'],
  },
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
      'react': { version: '999.999.999' },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
);
