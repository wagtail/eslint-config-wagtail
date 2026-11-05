import { defineConfig } from 'oxlint';
import wagtail from './index.js';

/**
 * Config used to lint this repository only. The shared config is index.js.
 */
export default defineConfig({
  extends: [wagtail],
  ignorePatterns: ['examples/**'],
  env: { node: true },
  settings: {
    // Settings are not inherited from extended configs, so spread them in.
    ...wagtail.settings,
    // Set manually to disable automated detection of the "react" dependency.
    react: { version: '999.999.999' },
  },
  options: {
    typeAware: true,
    reportUnusedDisableDirectives: 'warn',
  },
});
