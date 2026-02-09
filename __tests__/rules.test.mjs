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

  const severityLabels = {
    0: 'off',
    1: 'warn',
    2: 'error',
  };

  computedConfig.rules = Object.fromEntries(
    Object.entries(computedConfig.rules).map(
      ([rule, cfg]) => {
        if (Array.isArray(cfg)) {
          const [severity, ...rest] = cfg;
          return [rule, [severityLabels[severity], ...rest]];
        }
        return [rule, [severityLabels[cfg]]];
      },
    ),
  );

  return computedConfig;
};

describe('rules snapshot', () => {
  it('has stable config rules', async (test) => {
    test.assert.snapshot(await getComputedConfig(config));
  });
});
