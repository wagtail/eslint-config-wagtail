import assert from 'node:assert/strict';
import fs from 'node:fs';
import { describe, it } from 'node:test';
import { ESLint } from 'eslint';
import config from '../eslint.config.js';

const validExample = fs.readFileSync('./examples/valid.js', 'utf-8');
const invalidExample = fs.readFileSync('./examples/invalid.js', 'utf-8');

describe('linting', () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });

  it('flags no warnings when valid', async () => {
    const lintResult = await eslint.lintText(validExample);
    assert.strictEqual(lintResult[0].errorCount, 0);
    assert.strictEqual(lintResult[0].warningCount, 0);
  });

  it('flags warnings when invalid', async () => {
    const [{ errorCount, warningCount }] =
      await eslint.lintText(invalidExample);

    assert.strictEqual(errorCount + warningCount, 2);
  });
});
