const fs = require('fs');
const path = require('path');
const { ESLint } = require('eslint');

const validExample = fs.readFileSync('./examples/valid.js', 'utf-8');
const invalidExample = fs.readFileSync('./examples/invalid.js', 'utf-8');

describe('linting', () => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: path.join(__dirname, '..', '.eslintrc'),
  });

  it('flags no warnings when valid', async () => {
    const lintResult = await eslint.lintText(validExample);
    expect(lintResult[0].errorCount).toEqual(0);
    expect(lintResult[0].warningCount).toEqual(0);
  });

  it('flags warnings when invalid', async () => {
    const lintResult = await eslint.lintText(invalidExample);
    expect(lintResult[0].errorCount + lintResult[0].warningCount).not.toEqual(0);
  })
});
