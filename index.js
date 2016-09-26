module.exports = {
  extends: ['eslint-config-airbnb'],
  rules: {
    'comma-dangle': [0],
    'id-length': [1, { min: 2, exceptions: ['x', 'y', 'e', 'i', 'j', 'k', 'd', 'n', '_', '$'] }],
    'indent': [2, 2],
    'max-len': [1, 120, 4, { ignoreUrls: true }],
    'no-multi-spaces': [0],
    'no-new': [1],
    'no-undef': [1],
    'no-unused-vars': [1],
    'no-var': [0],
    'no-warning-comments': [1, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    'object-shorthand': [2, 'methods'],
    'prefer-arrow-callback': [1],
    'prefer-template': [0],
    'quote-props': ['error', 'consistent-as-needed'],
    'react/jsx-boolean-value': [0],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-bind': [0],
    'react/prefer-es6-class': [0, 'never'],
    'react/sort-comp': [0],
  },
  env: {
    mocha: true,
  }
};
