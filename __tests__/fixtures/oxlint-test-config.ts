import { defineConfig } from 'oxlint';
import wagtail from '../../index.js';

/**
 * Config used by the tests to lint the files in examples/, which the
 * repository config ignores.
 */
export default defineConfig({
  extends: [wagtail],
  env: { node: true },
  settings: {
    // Settings are not inherited from extended configs, so spread them in.
    ...wagtail.settings,
    react: { version: '999.999.999' },
  },
  options: {
    typeAware: true,
  },
});
