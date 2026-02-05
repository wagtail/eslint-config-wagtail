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

  // Replace severity numbers with labels to preserve history in snapshots.
  const severityLabels = {
    0: 'off',
    1: 'warn',
    2: 'error',
  };
  computedConfig.rules = Object.fromEntries(
    Object.entries(computedConfig.rules).map(([rule, cfg]) => {
      const [severity, ...rest] = Array.isArray(cfg) ? cfg : [cfg];
      return [
        rule,
        rest.length > 0
          ? [severityLabels[severity], ...rest]
          : severityLabels[severity],
      ];
    }),
  );

  return computedConfig;
};

describe('rules snapshot', () => {
  it('has stable config rules', async (test) => {
    test.assert.snapshot(await getComputedConfig(config));
  });
});
