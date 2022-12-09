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
    'no-new': ['warn'],
    'no-var': ['off'],
    'no-warning-comments': ['off'],
    'object-shorthand': ['error', 'methods'],
    'prefer-template': ['off'],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-no-bind': ['off'],
    'react/prefer-es6-class': ['off', 'never'],
    'react/sort-comp': ['off'],
    'react/prop-types': ['off'],
  },
};
