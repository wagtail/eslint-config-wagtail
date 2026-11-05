import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { describe, it } from 'node:test';
import { promisify } from 'node:util';

const CONFIG = '__tests__/fixtures/oxlint-test-config.ts';

/**
 * Runs oxlint on the given file with the test config, and returns the
 * diagnostics from its JSON output.
 */
const lint = async (file) => {
  let stdout;
  try {
    ({ stdout } = await promisify(execFile)('npx', [
      'oxlint',
      '-c',
      CONFIG,
      '-f',
      'json',
      file,
    ]));
  } catch (error) {
    // oxlint exits with a non-zero code when it reports errors.
    if (!error.stdout) throw error;
    ({ stdout } = error);
  }
  return JSON.parse(stdout).diagnostics;
};

describe('linting', () => {
  it('flags no warnings when valid', async () => {
    assert.deepStrictEqual(await lint('examples/valid.js'), []);
  });

  it('flags warnings when invalid', async () => {
    const diagnostics = await lint('examples/invalid.js');
    assert.strictEqual(diagnostics.length, 2);
  });

  it('resolves TypeScript imports with the shared settings', async () => {
    assert.deepStrictEqual(await lint('examples/ts-imports/index.ts'), []);
  });

  it('runs rules from JS plugins', async () => {
    const codes = new Set(
      (await lint('examples/invalid-plugins.jsx')).map(({ code }) => code),
    );

    for (const code of [
      '@stylistic(spaced-comment)',
      'import-x-js(no-extraneous-dependencies)',
      'import-x-js(no-unresolved)',
      'react-js(no-typos)',
      'wagtail(camelcase)',
    ]) {
      assert.ok(codes.has(code), `Expected ${code} to be reported`);
    }
  });
});
