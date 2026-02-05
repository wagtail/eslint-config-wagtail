import { defineConfig } from 'eslint/config';
import config from './index.js';
import globals from 'globals';

export default defineConfig(
  {
    ignores: ['examples/**'],
  },
  config,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    settings: {
      // Manually set the version to disable automated detection of the "react" dependency.
      react: { version: '999.999.999' },
    },
  },
);
