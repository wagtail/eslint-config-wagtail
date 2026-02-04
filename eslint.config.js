import config from './index.js';

export default [
  ...config,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'writable',
      },
    },
    settings: {
      // Manually set the version to disable automated detection of the "react" dependency.
      react: { version: '999.999.999' },
    },
  },
  {
    files: ['*.test.{js,mjs}'],
    rules: {
      'import/extensions': ['error', 'always'],
      'import/no-commonjs': 'error',
    },
  },
  {
    ignores: ['examples/**'],
  },
];
