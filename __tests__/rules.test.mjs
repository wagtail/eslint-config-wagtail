import { describe, it } from 'node:test';

import config from '../index.js';

/**
 * Returns the config with environment-specific values replaced, so the
 * snapshot is stable across machines.
 */
const getStableConfig = () => ({
  ...config,
  jsPlugins: config.jsPlugins.map((plugin) =>
    plugin.name === 'wagtail'
      ? { ...plugin, specifier: '<root>/plugin/index.js' }
      : plugin,
  ),
});

describe('rules snapshot', () => {
  it('has stable config rules', async (test) => {
    test.assert.snapshot(getStableConfig());
  });
});
