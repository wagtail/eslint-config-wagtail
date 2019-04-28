const fs = require('fs');
const eslint = require('eslint');
const config = require('..');

const { Linter } = eslint;

const validExample = fs.readFileSync('./examples/valid.js', 'utf-8');
const invalidExample = fs.readFileSync('./examples/invalid.js', 'utf-8');

const linter = new Linter();

describe('flags no warnings with valid js', () => {
  const messages = linter.verify(validExample, config, {
    filename: 'valid.js',
  });

  it('should return empty messages', () => expect(messages).toHaveLength(0));
});

describe('flags warnings with invalid js', () => {
  const messages = linter.verify(invalidExample, config, {
    filename: 'invalid.js',
  });

  it('should return non-empty messages', () => expect(messages).not.toHaveLength(0));
});
