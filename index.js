module.exports = {
  extends: ['eslint:recommended', 'airbnb'],
  rules: {
    'comma-dangle': ['off'],
    'id-length': [
      'warn',
      {
        min: 2,
        exceptions: ['x', 'y', 'e', 'i', 'j', 'k', 'd', 'n', '_', '$'],
      },
    ],
    'indent': ['error', 2],
    'max-len': ['warn', 120, 4, { ignoreUrls: true }],
    'no-multi-spaces': ['off'],
    'no-new': ['warn'],
    'no-undef': ['warn'],
    'no-unused-vars': ['warn'],
    'no-var': ['off'],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
    ],
    'object-shorthand': ['error', 'methods'],
    'prefer-arrow-callback': ['warn'],
    'prefer-template': ['off'],
    'quote-props': ['error', 'consistent-as-needed'],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-bind': ['off'],
    'react/prefer-es6-class': ['off', 'never'],
    'react/sort-comp': ['off'],
  },
};
