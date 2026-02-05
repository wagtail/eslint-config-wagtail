import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import { configs as tseslint } from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default defineConfig(
  js.configs.recommended,
  tseslint.recommended,
  tseslint.stylistic,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
  // Rules previously enabled via airbnb's config
  {
    rules: {
      'array-callback-return': ['error', { allowImplicit: true }],
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      'camelcase': ['error', { properties: 'never' }],
      'consistent-return': 'error',
      'default-case': ['error', { commentPattern: '^no default$' }],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'func-names': 'warn',
      'getter-return': ['error', { allowImplicit: true }],
      'guard-for-in': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/order': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      'jsx-a11y/lang': 'error',
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: false },
      ],
      'new-cap': 'error',
      'no-alert': 'warn',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'warn',
      'no-constructor-return': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-path-concat': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-restricted-exports': [
        'error',
        { restrictedNamedExports: ['default', 'then'] },
      ],
      'no-restricted-globals': ['error', 'isFinite', 'isNaN'],
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable-loop': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: false },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',

      'radix': 'error',
      'react/button-has-type': 'error',

      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],

      'react/jsx-fragments': 'error',

      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': 'error',

      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-danger': 'warn',
      'react/no-redundant-should-component-update': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/self-closing-comp': 'error',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'spaced-comment': ['error', 'always'],
      'strict': ['error', 'never'],
      'symbol-description': 'error',

      'unicode-bom': ['error', 'never'],
      'vars-on-top': 'error',

      'yoda': 'error',
    },
  },
  // Wagtail custom rules
  {
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
  },
);
