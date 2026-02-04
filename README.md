# [@wagtail/eslint-config-wagtail](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [<img src="https://raw.githubusercontent.com/wagtail/eslint-config-wagtail/main/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![npm](https://img.shields.io/npm/v/@wagtail/eslint-config-wagtail.svg)](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [![Build status](https://github.com/wagtail/eslint-config-wagtail/workflows/CI/badge.svg)](https://github.com/wagtail/eslint-config-wagtail/actions)

> Shareable ESLint config for Wagtail.

The package provides Wagtail's ESLint configuration as an extensible shared config using ESLint's flat config format.

- [Usage](#usage)
- [Links](#links)
- [Code style](#code-style)
- [Contribution Guidelines](#contribution-guidelines)
  - [Install](#install)
  - [Development](#development)
- [Rules](#rules)

## Usage

Our default export contains all of our ESLint rules (including ECMAScript 6+ and React support). It requires `eslint`, as well as the configuration's peer dependencies.

```sh
npm install --save-dev @wagtail/eslint-config-wagtail@latest
```

Then import the config in your `eslint.config.js`:

```js
import wagtailConfig from '@wagtail/eslint-config-wagtail';

export default [
  ...wagtailConfig,
  // Your overrides here
];
```

## Links

- [ESLint](https://eslint.org/)
- [ESLint Flat Config Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)

## Code style

This config enforces modern JavaScript best practices with a focus on readability and maintainability:

- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person’s environment.
- We accept `snake_case` in object properties, such as `ajaxResponse.page_title`, however camelCase or UPPER_CASE should be used everywhere else.

## Contribution Guidelines

### Install

- Required [Node](https://nodejs.org)
- We recommend using [nvm](https://github.com/creationix/nvm)
- Clone the project on to your computer
- Run `nvm install` to ensure you have the correct Node version
- Run `npm install` to install project dependencies
- Ensure your editor is set up to use [editorconfig](https://editorconfig.org/), [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)

### Development

- Run `nvm use` to set Node to the correct version
- Run tests via `npm run test`
- Run linting via `npm run lint`
- Run preflight checks before commiting final code via `npm run preflight`
- Note: When working with the rule set, only modify the `index.js` file, not the `eslint.config.js` file as it is for local linting only

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                | Severity | Config                                                                    |
| --------------------------------------------------- | -------- | ------------------------------------------------------------------------- |
| [`array-callback-return`][0]                        | `2`      | `{"allowImplicit":true,"checkForEach":false,"allowVoid":false}`           |
| [`arrow-body-style`][1]                             | `2`      | `"as-needed", {"requireReturnForObjectLiteral":false}`                    |
| [`block-scoped-var`][2]                             | `2`      |                                                                           |
| [`consistent-return`][3]                            | `2`      | `{"treatUndefinedAsUnspecified":false}`                                   |
| [`constructor-super`][4]                            | `2`      |                                                                           |
| [`default-case`][5]                                 | `2`      | `{"commentPattern":"^no default$"}`                                       |
| [`default-case-last`][6]                            | `2`      |                                                                           |
| [`default-param-last`][7]                           | `2`      |                                                                           |
| [`dot-notation`][8]                                 | `2`      | `{"allowKeywords":true,"allowPattern":""}`                                |
| [`eqeqeq`][9]                                       | `2`      | `"always", {"null":"ignore"}`                                             |
| [`for-direction`][10]                               | `2`      |                                                                           |
| [`getter-return`][11]                               | `2`      | `{"allowImplicit":false}`                                                 |
| [`grouped-accessor-pairs`][12]                      | `2`      | `"anyOrder", {"enforceForTSTypes":false}`                                 |
| [`guard-for-in`][13]                                | `2`      |                                                                           |
| [`id-length`][14]                                   | `1`      | [see Config][config]                                                      |
| [`import/default`][15]                              | `2`      |                                                                           |
| [`import/export`][16]                               | `2`      |                                                                           |
| [`import/extensions`][17]                           | `2`      | `"ignorePackages"`                                                        |
| [`import/first`][18]                                | `2`      |                                                                           |
| [`import/named`][19]                                | `2`      |                                                                           |
| [`import/namespace`][20]                            | `2`      |                                                                           |
| [`import/newline-after-import`][21]                 | `2`      |                                                                           |
| [`import/no-absolute-path`][22]                     | `2`      |                                                                           |
| [`import/no-amd`][23]                               | `2`      |                                                                           |
| [`import/no-cycle`][24]                             | `2`      | [see Config][config]                                                      |
| [`import/no-duplicates`][25]                        | `2`      |                                                                           |
| [`import/no-dynamic-require`][26]                   | `2`      |                                                                           |
| [`import/no-mutable-exports`][27]                   | `2`      |                                                                           |
| [`import/no-named-as-default`][28]                  | `2`      |                                                                           |
| [`import/no-named-as-default-member`][29]           | `2`      |                                                                           |
| [`import/no-named-default`][30]                     | `2`      |                                                                           |
| [`import/no-self-import`][31]                       | `2`      |                                                                           |
| [`import/no-unresolved`][32]                        | `2`      | `{"commonjs":true,"caseSensitive":true,"caseSensitiveStrict":false}`      |
| [`import/no-useless-path-segments`][33]             | `2`      | `{"commonjs":true}`                                                       |
| [`import/no-webpack-loader-syntax`][34]             | `2`      |                                                                           |
| [`import/order`][35]                                | `2`      | [see Config][config]                                                      |
| [`jsx-a11y/alt-text`][36]                           | `2`      |                                                                           |
| [`jsx-a11y/anchor-has-content`][37]                 | `2`      |                                                                           |
| [`jsx-a11y/anchor-is-valid`][38]                    | `2`      |                                                                           |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][39] | `2`      |                                                                           |
| [`jsx-a11y/aria-props`][40]                         | `2`      |                                                                           |
| [`jsx-a11y/aria-proptypes`][41]                     | `2`      |                                                                           |
| [`jsx-a11y/aria-role`][42]                          | `2`      |                                                                           |
| [`jsx-a11y/aria-unsupported-elements`][43]          | `2`      |                                                                           |
| [`jsx-a11y/heading-has-content`][44]                | `2`      |                                                                           |
| [`jsx-a11y/html-has-lang`][45]                      | `2`      |                                                                           |
| [`jsx-a11y/iframe-has-title`][46]                   | `2`      |                                                                           |
| [`jsx-a11y/img-redundant-alt`][47]                  | `2`      |                                                                           |
| [`jsx-a11y/no-access-key`][48]                      | `2`      |                                                                           |
| [`jsx-a11y/no-distracting-elements`][49]            | `2`      |                                                                           |
| [`jsx-a11y/no-redundant-roles`][50]                 | `2`      |                                                                           |
| [`jsx-a11y/role-has-required-aria-props`][51]       | `2`      |                                                                           |
| [`jsx-a11y/role-supports-aria-props`][52]           | `2`      |                                                                           |
| [`jsx-a11y/scope`][53]                              | `2`      |                                                                           |
| [`no-alert`][54]                                    | `1`      |                                                                           |
| [`no-async-promise-executor`][55]                   | `2`      |                                                                           |
| [`no-caller`][56]                                   | `2`      |                                                                           |
| [`no-case-declarations`][57]                        | `2`      |                                                                           |
| [`no-class-assign`][58]                             | `2`      |                                                                           |
| [`no-compare-neg-zero`][59]                         | `2`      |                                                                           |
| [`no-cond-assign`][60]                              | `2`      | `"except-parens"`                                                         |
| [`no-const-assign`][61]                             | `2`      |                                                                           |
| [`no-constant-binary-expression`][62]               | `2`      |                                                                           |
| [`no-constant-condition`][63]                       | `2`      | `{"checkLoops":"allExceptWhileTrue"}`                                     |
| [`no-constructor-return`][64]                       | `2`      |                                                                           |
| [`no-control-regex`][65]                            | `2`      |                                                                           |
| [`no-debugger`][66]                                 | `2`      |                                                                           |
| [`no-delete-var`][67]                               | `2`      |                                                                           |
| [`no-dupe-args`][68]                                | `2`      |                                                                           |
| [`no-dupe-class-members`][69]                       | `2`      |                                                                           |
| [`no-dupe-else-if`][70]                             | `2`      |                                                                           |
| [`no-dupe-keys`][71]                                | `2`      |                                                                           |
| [`no-duplicate-case`][72]                           | `2`      |                                                                           |
| [`no-else-return`][73]                              | `2`      | `{"allowElseIf":false}`                                                   |
| [`no-empty`][74]                                    | `2`      | `{"allowEmptyCatch":false}`                                               |
| [`no-empty-character-class`][75]                    | `2`      |                                                                           |
| [`no-empty-function`][76]                           | `2`      | `{"allow":["arrowFunctions","functions","methods"]}`                      |
| [`no-empty-pattern`][77]                            | `2`      | `{"allowObjectPatternsAsParameters":false}`                               |
| [`no-empty-static-block`][78]                       | `2`      |                                                                           |
| [`no-eval`][79]                                     | `2`      | `{"allowIndirect":false}`                                                 |
| [`no-ex-assign`][80]                                | `2`      |                                                                           |
| [`no-extend-native`][81]                            | `2`      | `{"exceptions":[]}`                                                       |
| [`no-extra-bind`][82]                               | `2`      |                                                                           |
| [`no-extra-boolean-cast`][83]                       | `2`      | `{}`                                                                      |
| [`no-fallthrough`][84]                              | `2`      | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}`         |
| [`no-func-assign`][85]                              | `2`      |                                                                           |
| [`no-global-assign`][86]                            | `2`      | `{"exceptions":[]}`                                                       |
| [`no-implied-eval`][87]                             | `2`      |                                                                           |
| [`no-import-assign`][88]                            | `2`      |                                                                           |
| [`no-invalid-regexp`][89]                           | `2`      | `{}`                                                                      |
| [`no-irregular-whitespace`][90]                     | `2`      | [see Config][config]                                                      |
| [`no-iterator`][91]                                 | `2`      |                                                                           |
| [`no-labels`][92]                                   | `2`      | `{"allowLoop":false,"allowSwitch":false}`                                 |
| [`no-lone-blocks`][93]                              | `2`      |                                                                           |
| [`no-loop-func`][94]                                | `2`      |                                                                           |
| [`no-loss-of-precision`][95]                        | `2`      |                                                                           |
| [`no-misleading-character-class`][96]               | `2`      | `{"allowEscape":false}`                                                   |
| [`no-multi-str`][97]                                | `2`      |                                                                           |
| [`no-new`][98]                                      | `1`      |                                                                           |
| [`no-new-func`][99]                                 | `2`      |                                                                           |
| [`no-new-native-nonconstructor`][100]               | `2`      |                                                                           |
| [`no-new-symbol`][101]                              | `2`      |                                                                           |
| [`no-new-wrappers`][102]                            | `2`      |                                                                           |
| [`no-nonoctal-decimal-escape`][103]                 | `2`      |                                                                           |
| [`no-obj-calls`][104]                               | `2`      |                                                                           |
| [`no-octal`][105]                                   | `2`      |                                                                           |
| [`no-octal-escape`][106]                            | `2`      |                                                                           |
| [`no-param-reassign`][107]                          | `2`      | `{"props":false}`                                                         |
| [`no-proto`][108]                                   | `2`      |                                                                           |
| [`no-prototype-builtins`][109]                      | `2`      |                                                                           |
| [`no-redeclare`][110]                               | `2`      | `{"builtinGlobals":true}`                                                 |
| [`no-regex-spaces`][111]                            | `2`      |                                                                           |
| [`no-restricted-syntax`][112]                       | `2`      | [see Config][config]                                                      |
| [`no-return-assign`][113]                           | `2`      | `"always"`                                                                |
| [`no-return-await`][114]                            | `2`      |                                                                           |
| [`no-script-url`][115]                              | `2`      |                                                                           |
| [`no-self-assign`][116]                             | `2`      | `{"props":true}`                                                          |
| [`no-self-compare`][117]                            | `2`      |                                                                           |
| [`no-sequences`][118]                               | `2`      | `{"allowInParentheses":true}`                                             |
| [`no-setter-return`][119]                           | `2`      |                                                                           |
| [`no-shadow`][120]                                  | `2`      | [see Config][config]                                                      |
| [`no-shadow-restricted-names`][121]                 | `2`      | `{"reportGlobalThis":false}`                                              |
| [`no-sparse-arrays`][122]                           | `2`      |                                                                           |
| [`no-this-before-super`][123]                       | `2`      |                                                                           |
| [`no-throw-literal`][124]                           | `2`      |                                                                           |
| [`no-undef`][125]                                   | `2`      | `{"typeof":false}`                                                        |
| [`no-undef-init`][126]                              | `2`      |                                                                           |
| [`no-unmodified-loop-condition`][127]               | `2`      |                                                                           |
| [`no-unreachable`][128]                             | `2`      |                                                                           |
| [`no-unsafe-finally`][129]                          | `2`      |                                                                           |
| [`no-unsafe-negation`][130]                         | `2`      | `{"enforceForOrderingRelations":false}`                                   |
| [`no-unsafe-optional-chaining`][131]                | `2`      | `{"disallowArithmeticOperators":false}`                                   |
| [`no-unused-expressions`][132]                      | `2`      | [see Config][config]                                                      |
| [`no-unused-labels`][133]                           | `2`      |                                                                           |
| [`no-unused-private-class-members`][134]            | `2`      |                                                                           |
| [`no-unused-vars`][135]                             | `2`      |                                                                           |
| [`no-use-before-define`][136]                       | `2`      | [see Config][config]                                                      |
| [`no-useless-backreference`][137]                   | `2`      |                                                                           |
| [`no-useless-call`][138]                            | `2`      |                                                                           |
| [`no-useless-catch`][139]                           | `2`      |                                                                           |
| [`no-useless-computed-key`][140]                    | `2`      | `{"enforceForClassMembers":true}`                                         |
| [`no-useless-concat`][141]                          | `2`      |                                                                           |
| [`no-useless-constructor`][142]                     | `2`      |                                                                           |
| [`no-useless-escape`][143]                          | `2`      | `{"allowRegexCharacters":[]}`                                             |
| [`no-useless-rename`][144]                          | `2`      | `{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}` |
| [`no-useless-return`][145]                          | `2`      |                                                                           |
| [`no-void`][146]                                    | `2`      | `{"allowAsStatement":false}`                                              |
| [`no-with`][147]                                    | `2`      |                                                                           |
| [`object-shorthand`][148]                           | `2`      | `"methods"`                                                               |
| [`prefer-arrow-callback`][149]                      | `2`      | `{"allowNamedFunctions":false,"allowUnboundThis":true}`                   |
| [`prefer-const`][150]                               | `2`      | `{"destructuring":"any","ignoreReadBeforeAssign":true}`                   |
| [`prefer-destructuring`][151]                       | `2`      | [see Config][config]                                                      |
| [`prefer-numeric-literals`][152]                    | `2`      |                                                                           |
| [`prefer-promise-reject-errors`][153]               | `2`      | `{"allowEmptyReject":true}`                                               |
| [`prefer-regex-literals`][154]                      | `2`      | `{"disallowRedundantWrapping":true}`                                      |
| [`prefer-rest-params`][155]                         | `2`      |                                                                           |
| [`prefer-spread`][156]                              | `2`      |                                                                           |
| [`radix`][157]                                      | `2`      | `"always"`                                                                |
| [`react-hooks/exhaustive-deps`][158]                | `1`      |                                                                           |
| [`react-hooks/rules-of-hooks`][159]                 | `2`      |                                                                           |
| [`react/jsx-key`][160]                              | `2`      |                                                                           |
| [`react/jsx-no-duplicate-props`][161]               | `2`      |                                                                           |
| [`react/jsx-no-target-blank`][162]                  | `2`      | `{"enforceDynamicLinks":"always","links":true,"forms":false}`             |
| [`react/jsx-no-undef`][163]                         | `2`      |                                                                           |
| [`react/jsx-pascal-case`][164]                      | `2`      | `{"allowAllCaps":true,"ignore":[]}`                                       |
| [`react/jsx-uses-react`][165]                       | `2`      |                                                                           |
| [`react/jsx-uses-vars`][166]                        | `2`      |                                                                           |
| [`react/no-children-prop`][167]                     | `2`      |                                                                           |
| [`react/no-danger-with-children`][168]              | `2`      |                                                                           |
| [`react/no-deprecated`][169]                        | `2`      |                                                                           |
| [`react/no-direct-mutation-state`][170]             | `2`      |                                                                           |
| [`react/no-find-dom-node`][171]                     | `2`      |                                                                           |
| [`react/no-is-mounted`][172]                        | `2`      |                                                                           |
| [`react/no-render-return-value`][173]               | `2`      |                                                                           |
| [`react/no-string-refs`][174]                       | `2`      |                                                                           |
| [`react/no-unescaped-entities`][175]                | `2`      |                                                                           |
| [`react/no-unknown-property`][176]                  | `2`      |                                                                           |
| [`react/require-render-return`][177]                | `2`      |                                                                           |
| [`react/self-closing-comp`][178]                    | `2`      |                                                                           |
| [`require-yield`][179]                              | `2`      |                                                                           |
| [`symbol-description`][180]                         | `2`      |                                                                           |
| [`use-isnan`][181]                                  | `2`      | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`                 |
| [`valid-typeof`][182]                               | `2`      | `{"requireStringLiterals":false}`                                         |
| [`vars-on-top`][183]                                | `2`      |                                                                           |
| [`yoda`][184]                                       | `2`      | `"never", {"exceptRange":false,"onlyEquality":false}`                     |

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
[0]: https://eslint.org/docs/latest/rules/array-callback-return
[1]: https://eslint.org/docs/latest/rules/arrow-body-style
[2]: https://eslint.org/docs/latest/rules/block-scoped-var
[3]: https://eslint.org/docs/latest/rules/consistent-return
[4]: https://eslint.org/docs/latest/rules/constructor-super
[5]: https://eslint.org/docs/latest/rules/default-case
[6]: https://eslint.org/docs/latest/rules/default-case-last
[7]: https://eslint.org/docs/latest/rules/default-param-last
[8]: https://eslint.org/docs/latest/rules/dot-notation
[9]: https://eslint.org/docs/latest/rules/eqeqeq
[10]: https://eslint.org/docs/latest/rules/for-direction
[11]: https://eslint.org/docs/latest/rules/getter-return
[12]: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
[13]: https://eslint.org/docs/latest/rules/guard-for-in
[14]: https://eslint.org/docs/latest/rules/id-length
[15]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
[16]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
[17]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
[18]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
[19]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
[20]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
[21]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
[22]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
[23]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
[24]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
[25]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
[26]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
[27]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
[28]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
[29]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
[30]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
[31]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
[32]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
[33]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
[34]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
[35]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
[36]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[37]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[38]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[39]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[40]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[41]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[42]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[43]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[44]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[45]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[46]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[47]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[48]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[49]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[50]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[51]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[52]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[53]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[54]: https://eslint.org/docs/latest/rules/no-alert
[55]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[56]: https://eslint.org/docs/latest/rules/no-caller
[57]: https://eslint.org/docs/latest/rules/no-case-declarations
[58]: https://eslint.org/docs/latest/rules/no-class-assign
[59]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[60]: https://eslint.org/docs/latest/rules/no-cond-assign
[61]: https://eslint.org/docs/latest/rules/no-const-assign
[62]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[63]: https://eslint.org/docs/latest/rules/no-constant-condition
[64]: https://eslint.org/docs/latest/rules/no-constructor-return
[65]: https://eslint.org/docs/latest/rules/no-control-regex
[66]: https://eslint.org/docs/latest/rules/no-debugger
[67]: https://eslint.org/docs/latest/rules/no-delete-var
[68]: https://eslint.org/docs/latest/rules/no-dupe-args
[69]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[70]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[71]: https://eslint.org/docs/latest/rules/no-dupe-keys
[72]: https://eslint.org/docs/latest/rules/no-duplicate-case
[73]: https://eslint.org/docs/latest/rules/no-else-return
[74]: https://eslint.org/docs/latest/rules/no-empty
[75]: https://eslint.org/docs/latest/rules/no-empty-character-class
[76]: https://eslint.org/docs/latest/rules/no-empty-function
[77]: https://eslint.org/docs/latest/rules/no-empty-pattern
[78]: https://eslint.org/docs/latest/rules/no-empty-static-block
[79]: https://eslint.org/docs/latest/rules/no-eval
[80]: https://eslint.org/docs/latest/rules/no-ex-assign
[81]: https://eslint.org/docs/latest/rules/no-extend-native
[82]: https://eslint.org/docs/latest/rules/no-extra-bind
[83]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[84]: https://eslint.org/docs/latest/rules/no-fallthrough
[85]: https://eslint.org/docs/latest/rules/no-func-assign
[86]: https://eslint.org/docs/latest/rules/no-global-assign
[87]: https://eslint.org/docs/latest/rules/no-implied-eval
[88]: https://eslint.org/docs/latest/rules/no-import-assign
[89]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[90]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[91]: https://eslint.org/docs/latest/rules/no-iterator
[92]: https://eslint.org/docs/latest/rules/no-labels
[93]: https://eslint.org/docs/latest/rules/no-lone-blocks
[94]: https://eslint.org/docs/latest/rules/no-loop-func
[95]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[96]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[97]: https://eslint.org/docs/latest/rules/no-multi-str
[98]: https://eslint.org/docs/latest/rules/no-new
[99]: https://eslint.org/docs/latest/rules/no-new-func
[100]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[101]: https://eslint.org/docs/latest/rules/no-new-symbol
[102]: https://eslint.org/docs/latest/rules/no-new-wrappers
[103]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[104]: https://eslint.org/docs/latest/rules/no-obj-calls
[105]: https://eslint.org/docs/latest/rules/no-octal
[106]: https://eslint.org/docs/latest/rules/no-octal-escape
[107]: https://eslint.org/docs/latest/rules/no-param-reassign
[108]: https://eslint.org/docs/latest/rules/no-proto
[109]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[110]: https://eslint.org/docs/latest/rules/no-redeclare
[111]: https://eslint.org/docs/latest/rules/no-regex-spaces
[112]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[113]: https://eslint.org/docs/latest/rules/no-return-assign
[114]: https://eslint.org/docs/latest/rules/no-return-await
[115]: https://eslint.org/docs/latest/rules/no-script-url
[116]: https://eslint.org/docs/latest/rules/no-self-assign
[117]: https://eslint.org/docs/latest/rules/no-self-compare
[118]: https://eslint.org/docs/latest/rules/no-sequences
[119]: https://eslint.org/docs/latest/rules/no-setter-return
[120]: https://eslint.org/docs/latest/rules/no-shadow
[121]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[122]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[123]: https://eslint.org/docs/latest/rules/no-this-before-super
[124]: https://eslint.org/docs/latest/rules/no-throw-literal
[125]: https://eslint.org/docs/latest/rules/no-undef
[126]: https://eslint.org/docs/latest/rules/no-undef-init
[127]: https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
[128]: https://eslint.org/docs/latest/rules/no-unreachable
[129]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[130]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[131]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[132]: https://eslint.org/docs/latest/rules/no-unused-expressions
[133]: https://eslint.org/docs/latest/rules/no-unused-labels
[134]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[135]: https://eslint.org/docs/latest/rules/no-unused-vars
[136]: https://eslint.org/docs/latest/rules/no-use-before-define
[137]: https://eslint.org/docs/latest/rules/no-useless-backreference
[138]: https://eslint.org/docs/latest/rules/no-useless-call
[139]: https://eslint.org/docs/latest/rules/no-useless-catch
[140]: https://eslint.org/docs/latest/rules/no-useless-computed-key
[141]: https://eslint.org/docs/latest/rules/no-useless-concat
[142]: https://eslint.org/docs/latest/rules/no-useless-constructor
[143]: https://eslint.org/docs/latest/rules/no-useless-escape
[144]: https://eslint.org/docs/latest/rules/no-useless-rename
[145]: https://eslint.org/docs/latest/rules/no-useless-return
[146]: https://eslint.org/docs/latest/rules/no-void
[147]: https://eslint.org/docs/latest/rules/no-with
[148]: https://eslint.org/docs/latest/rules/object-shorthand
[149]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[150]: https://eslint.org/docs/latest/rules/prefer-const
[151]: https://eslint.org/docs/latest/rules/prefer-destructuring
[152]: https://eslint.org/docs/latest/rules/prefer-numeric-literals
[153]: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
[154]: https://eslint.org/docs/latest/rules/prefer-regex-literals
[155]: https://eslint.org/docs/latest/rules/prefer-rest-params
[156]: https://eslint.org/docs/latest/rules/prefer-spread
[157]: https://eslint.org/docs/latest/rules/radix
[158]: https://legacy.reactjs.org/docs/hooks-rules.html
[159]: https://legacy.reactjs.org/docs/hooks-rules.html
[160]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[161]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[162]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[163]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[164]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[165]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[166]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[167]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[168]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[169]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[170]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[171]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[172]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[173]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[174]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[175]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[176]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[177]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[178]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
[179]: https://eslint.org/docs/latest/rules/require-yield
[180]: https://eslint.org/docs/latest/rules/symbol-description
[181]: https://eslint.org/docs/latest/rules/use-isnan
[182]: https://eslint.org/docs/latest/rules/valid-typeof
[183]: https://eslint.org/docs/latest/rules/vars-on-top
[184]: https://eslint.org/docs/latest/rules/yoda
