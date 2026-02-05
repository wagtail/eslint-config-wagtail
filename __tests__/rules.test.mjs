import { describe, it } from 'node:test';
import { ESLint } from 'eslint';

import config from '../index.js';

const getComputedConfig = async (overrideConfig) => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig,
  });

  const computedConfig = await eslint.calculateConfigForFile('index.js');
  // Delete env-specific config keys.
  delete computedConfig.filePath;

  return computedConfig;
};

describe('rules snapshot', () => {
  it('has stable config rules', async (test) => {
    test.assert.snapshot(await getComputedConfig(config));
  });
});
