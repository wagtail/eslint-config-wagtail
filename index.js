module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    // See https://github.com/wagtail/wagtail/pull/9482.
    'class-methods-use-this': 'off',
    'id-length': [
      'warn',
      {
        min: 2,
        exceptions: ['x', 'y', 'e', 'i', 'j', 'k', 'd', 'n', '_', '$'],
      },
    ],
    // See https://github.com/wagtail/wagtail/pull/9483.
    'max-classes-per-file': 'off',
    'no-constant-binary-expression': 'error',
    'no-new': ['warn'],
    'no-var': ['off'],
    'no-warning-comments': ['off'],
    'object-shorthand': ['error', 'methods'],
    'prefer-template': ['off'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // Disallow with and label, allow for-in and for-of
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-no-bind': ['off'],
    'react/prefer-es6-class': ['off', 'never'],
    'react/sort-comp': ['off'],
    'react/prop-types': ['off'],
  },
};
