import { describe, it } from 'node:test';
import { ESLint } from 'eslint';

import config from '../index.js';

const getComputedConfig = async (baseConfig) => {
  const eslint = new ESLint({
    useEslintrc: false,
    allowInlineConfig: false,
    baseConfig,
  });

  const computedConfig = await eslint.calculateConfigForFile('index.js');
  // Delete env-specific config keys.
  delete computedConfig.filePath;
  delete computedConfig.baseDirectory;

  return computedConfig;
};

describe('rules snapshot', () => {
  it('has stable config rules', async (test) => {
    test.assert.snapshot(await getComputedConfig(config));
  });
});
