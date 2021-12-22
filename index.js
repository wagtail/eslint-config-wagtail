module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'id-length': [
      'warn',
      {
        min: 2,
        exceptions: ['x', 'y', 'e', 'i', 'j', 'k', 'd', 'n', '_', '$'],
      },
    ],
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
