const fs = require('fs');
const eslint = require('eslint');

const { CLIEngine } = eslint;
const { readFileSync } = fs;

const validExample = readFileSync('./examples/valid.js', 'utf-8');
const invalidExample = readFileSync('./examples/invalid.js', 'utf-8');

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: '.eslintrc',
});

describe('flags no warnings with valid js', () => {
  const { errorCount, warningCount } = cli.executeOnText(validExample);

  it('should return no errors or warnings', () => {
    expect(errorCount).toEqual(0);
    expect(warningCount).toEqual(0);
  });
});

describe('flags warnings with invalid js', () => {
  const { errorCount, warningCount } = cli.executeOnText(invalidExample);

  it('should return some errors or warnings', () =>
    expect(errorCount + warningCount).not.toEqual(0));
});
