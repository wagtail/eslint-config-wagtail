import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import { importX } from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
  // Rules previously enabled via airbnb's config
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          line: {
            exceptions: ['-', '+'],
            markers: ['=', '!', '/'],
          },
          block: {
            exceptions: ['-', '+'],
            markers: ['=', '!', ':', '::'],
            balanced: true,
          },
        },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['arrowFunctions', 'functions', 'methods'] },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
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
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-dynamic-require': 'error',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/test/**', // tape, common npm pattern
            '**/tests/**', // also common npm pattern
            '**/spec/**', // mocha, rspec-like pattern
            '**/__tests__/**', // jest pattern
            '**/__mocks__/**', // jest pattern
            'scripts/**', // Wagtail scripts
            'test.{js,jsx,ts,tsx}', // repos with a single test file
            'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
            '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
            '**/*.config.{js,mjs,ts,mts}', // various package config
            '**/*.setup.{js,mjs,ts,mts}', // jest and other packages setup
            '**/gulpfile.js', // gulp config
            '**/gulpfile.*.js', // gulp config
            '**/Gruntfile{,.js}', // grunt config
          ],
          optionalDependencies: false,
        },
      ],
      'import-x/no-import-module-exports': [
        'error',
        {
          exceptions: [],
        },
      ],
      'import-x/no-named-as-default': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-relative-packages': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unresolved': ['error', { commonjs: true }],
      'import-x/no-useless-path-segments': ['error', { commonjs: true }],
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['type', 'builtin', 'external', 'parent', 'sibling', 'index'],
          alphabetize: { order: 'asc' },
          distinctGroup: true,
          sortTypesGroup: true,
          named: true,
        },
      ],
      'jsx-a11y/control-has-associated-label': [
        'error',
        {
          labelAttributes: ['label'],
          ignoreElements: [
            'audio',
            'canvas',
            'embed',
            'input',
            'textarea',
            'tr',
            'video',
          ],
          ignoreRoles: [
            'grid',
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'row',
            'tablist',
            'toolbar',
            'tree',
            'treegrid',
          ],
          depth: 5,
        },
      ],
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'both',
          depth: 25,
        },
      ],
      'jsx-a11y/lang': 'error',
      'new-cap': [
        'error',
        {
          capIsNew: false,
        },
      ],
      'no-alert': 'warn',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'warn',
      'no-constructor-return': 'error',
      'no-continue': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-restricted-exports': [
        'error',
        { restrictedNamedExports: ['default', 'then'] },
      ],
      'no-restricted-globals': [
        'error',
        'isFinite',
        'isNaN',
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'defaultstatus',
        'event',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top',
      ],
      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        },
      ],
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': [
        'error',
        {
          enforceInMethodNames: true,
        },
      ],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable-loop': 'error',
      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true,
        },
      ],
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'radix': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/button-has-type': ['error', { reset: false }],
      'react/default-props-match-prop-types': [
        'error',
        { allowRequiredDefaults: false },
      ],
      'react/destructuring-assignment': 'error',
      'react/forbid-foreign-prop-types': [
        'warn',
        {
          allowInPropTypes: true,
        },
      ],
      'react/forbid-prop-types': [
        'error',
        {
          checkContextTypes: true,
          checkChildContextTypes: true,
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'function-expression'],
          unnamedComponents: 'function-expression',
        },
      ],
      'react/hook-use-state': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'react/jsx-filename-extension': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
      'react/jsx-props-no-spreading': [
        'error',
        {
          explicitSpread: 'ignore',
        },
      ],
      'react/jsx-uses-react': 'error',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-danger': 'warn',
      'react/no-did-update-set-state': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-namespace': 'error',
      'react/no-redundant-should-component-update': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-class-component-methods': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prefer-exact-props': 'error',
      'react/prefer-stateless-function': [
        'error',
        {
          ignorePureComponents: true,
        },
      ],
      'react/require-default-props': [
        'error',
        {
          forbidDefaultForRequired: true,
        },
      ],
      'react/self-closing-comp': 'error',
      'react/state-in-constructor': 'error',
      'react/static-property-placement': ['error', 'property assignment'],
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'strict': ['error', 'never'],
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: true,
        },
      ],
      'vars-on-top': 'error',
      'yoda': 'error',
    },
  },
  // Wagtail custom rules
  {
    rules: {
      // Good compromise between verbosity and readability.
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      // Prefer Record<K, V> in simple cases, but cannot enforce it as the
      // index-signature { [name: string]: value } style is more readable when
      // there is an explicit name for the key e.g. [href: string].
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      // Enabled from tseslint.strict, relaxed to allow constructor-only classes,
      // which can be useful for Error subclasses and telepath adapters.
      '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowConstructorOnly: true },
      ],
      // Can be useful when we're absolutely sure the value is not null, e.g.
      // when working with the DOM, but generally should be used sparingly.
      '@typescript-eslint/no-non-null-assertion': 'off',
      'id-length': [
        'warn',
        {
          min: 2,
          exceptions: ['x', 'y', 'e', 'h', 'i', 'j', 'k', 'd', 'n', '_', '$'],
        },
      ],
      // This rule does not work well with allowSyntheticDefaultImports (implied
      // via esModuleInterop enabled in Wagtail), which would force us to use
      // named imports in cases like `axe.run()` etc.
      'import-x/no-named-as-default-member': 'off',
      'no-new': ['warn'],
      'object-shorthand': ['error', 'methods'],
      'no-param-reassign': 'error',
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
      'react/prop-types': ['off'],
    },
  },
);
