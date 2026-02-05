# [@wagtail/eslint-config-wagtail](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [<img src="https://raw.githubusercontent.com/wagtail/eslint-config-wagtail/main/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![npm](https://img.shields.io/npm/v/@wagtail/eslint-config-wagtail.svg)](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [![Build status](https://github.com/wagtail/eslint-config-wagtail/workflows/CI/badge.svg)](https://github.com/wagtail/eslint-config-wagtail/actions)

> Shareable ESLint config for Wagtail.

The package provides Wagtail's ESLint configuration as an extensible shared config using the [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format.

- [Usage](#usage)
- [Links](#links)
- [Code style](#code-style)
- [Contribution Guidelines](#contribution-guidelines)
  - [Install](#install)
  - [Development](#development)
- [Rules](#rules)

## Usage

This package uses ESLint v9+ flat config format. Install it with its peer dependencies:

```sh
npm install --save-dev @wagtail/eslint-config-wagtail@latest
```

Then, import and use the config in your `eslint.config.js` file:

```js
import wagtailConfig from '@wagtail/eslint-config-wagtail';

export default [
  ...wagtailConfig,
  // Your custom config here
];
```

## Code style

This ESLint config includes `recommended` rules from:

- [ESLint rules](https://eslint.org/docs/latest/rules/)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

With some Wagtail-specific customizations:

- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
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
- Note: When working with the rule set, only modify the `index.js` file, not the `eslint.config.js` file as it is for the linting of this project only

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                               | Severity | Config                                                            |
| ------------------------------------------------------------------ | -------- | ----------------------------------------------------------------- |
| [`@typescript-eslint/adjacent-overload-signatures`][0]             | `error`  |                                                                   |
| [`@typescript-eslint/array-type`][1]                               | `error`  |                                                                   |
| [`@typescript-eslint/ban-ts-comment`][2]                           | `error`  | `{"minimumDescriptionLength":10}`                                 |
| [`@typescript-eslint/ban-tslint-comment`][3]                       | `error`  |                                                                   |
| [`@typescript-eslint/class-literal-property-style`][4]             | `error`  |                                                                   |
| [`@typescript-eslint/consistent-generic-constructors`][5]          | `error`  |                                                                   |
| [`@typescript-eslint/consistent-indexed-object-style`][6]          | `error`  |                                                                   |
| [`@typescript-eslint/consistent-type-assertions`][7]               | `error`  |                                                                   |
| [`@typescript-eslint/consistent-type-definitions`][8]              | `error`  |                                                                   |
| [`@typescript-eslint/no-array-constructor`][9]                     | `error`  |                                                                   |
| [`@typescript-eslint/no-confusing-non-null-assertion`][10]         | `error`  |                                                                   |
| [`@typescript-eslint/no-duplicate-enum-values`][11]                | `error`  |                                                                   |
| [`@typescript-eslint/no-dynamic-delete`][12]                       | `error`  |                                                                   |
| [`@typescript-eslint/no-empty-function`][13]                       | `error`  | `{"allow":[]}`                                                    |
| [`@typescript-eslint/no-empty-object-type`][14]                    | `error`  |                                                                   |
| [`@typescript-eslint/no-explicit-any`][15]                         | `error`  |                                                                   |
| [`@typescript-eslint/no-extra-non-null-assertion`][16]             | `error`  |                                                                   |
| [`@typescript-eslint/no-extraneous-class`][17]                     | `error`  |                                                                   |
| [`@typescript-eslint/no-inferrable-types`][18]                     | `error`  |                                                                   |
| [`@typescript-eslint/no-invalid-void-type`][19]                    | `error`  |                                                                   |
| [`@typescript-eslint/no-misused-new`][20]                          | `error`  |                                                                   |
| [`@typescript-eslint/no-namespace`][21]                            | `error`  |                                                                   |
| [`@typescript-eslint/no-non-null-asserted-nullish-coalescing`][22] | `error`  |                                                                   |
| [`@typescript-eslint/no-non-null-asserted-optional-chain`][23]     | `error`  |                                                                   |
| [`@typescript-eslint/no-non-null-assertion`][24]                   | `error`  |                                                                   |
| [`@typescript-eslint/no-require-imports`][25]                      | `error`  |                                                                   |
| [`@typescript-eslint/no-this-alias`][26]                           | `error`  |                                                                   |
| [`@typescript-eslint/no-unnecessary-type-constraint`][27]          | `error`  |                                                                   |
| [`@typescript-eslint/no-unsafe-declaration-merging`][28]           | `error`  |                                                                   |
| [`@typescript-eslint/no-unsafe-function-type`][29]                 | `error`  |                                                                   |
| [`@typescript-eslint/no-unused-expressions`][30]                   | `error`  | [see Config][config]                                              |
| [`@typescript-eslint/no-unused-vars`][31]                          | `error`  |                                                                   |
| [`@typescript-eslint/no-useless-constructor`][32]                  | `error`  |                                                                   |
| [`@typescript-eslint/no-wrapper-object-types`][33]                 | `error`  |                                                                   |
| [`@typescript-eslint/prefer-as-const`][34]                         | `error`  |                                                                   |
| [`@typescript-eslint/prefer-for-of`][35]                           | `error`  |                                                                   |
| [`@typescript-eslint/prefer-function-type`][36]                    | `error`  |                                                                   |
| [`@typescript-eslint/prefer-literal-enum-member`][37]              | `error`  |                                                                   |
| [`@typescript-eslint/prefer-namespace-keyword`][38]                | `error`  |                                                                   |
| [`@typescript-eslint/triple-slash-reference`][39]                  | `error`  |                                                                   |
| [`@typescript-eslint/unified-signatures`][40]                      | `error`  |                                                                   |
| [`constructor-super`][41]                                          | `error`  |                                                                   |
| [`for-direction`][42]                                              | `error`  |                                                                   |
| [`getter-return`][43]                                              | `error`  | `{"allowImplicit":false}`                                         |
| [`id-length`][44]                                                  | `warn`   | [see Config][config]                                              |
| [`import-x/default`][45]                                           | `error`  |                                                                   |
| [`import-x/export`][46]                                            | `error`  |                                                                   |
| [`import-x/namespace`][47]                                         | `error`  |                                                                   |
| [`import-x/no-duplicates`][48]                                     | `warn`   |                                                                   |
| [`import-x/no-named-as-default`][49]                               | `warn`   |                                                                   |
| [`import-x/no-named-as-default-member`][50]                        | `warn`   |                                                                   |
| [`import-x/no-unresolved`][51]                                     | `error`  |                                                                   |
| [`jsx-a11y/alt-text`][52]                                          | `error`  |                                                                   |
| [`jsx-a11y/anchor-has-content`][53]                                | `error`  |                                                                   |
| [`jsx-a11y/anchor-is-valid`][54]                                   | `error`  |                                                                   |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][55]                | `error`  |                                                                   |
| [`jsx-a11y/aria-props`][56]                                        | `error`  |                                                                   |
| [`jsx-a11y/aria-proptypes`][57]                                    | `error`  |                                                                   |
| [`jsx-a11y/aria-role`][58]                                         | `error`  |                                                                   |
| [`jsx-a11y/aria-unsupported-elements`][59]                         | `error`  |                                                                   |
| [`jsx-a11y/autocomplete-valid`][60]                                | `error`  |                                                                   |
| [`jsx-a11y/click-events-have-key-events`][61]                      | `error`  |                                                                   |
| [`jsx-a11y/heading-has-content`][62]                               | `error`  |                                                                   |
| [`jsx-a11y/html-has-lang`][63]                                     | `error`  |                                                                   |
| [`jsx-a11y/iframe-has-title`][64]                                  | `error`  |                                                                   |
| [`jsx-a11y/img-redundant-alt`][65]                                 | `error`  |                                                                   |
| [`jsx-a11y/interactive-supports-focus`][66]                        | `error`  | [see Config][config]                                              |
| [`jsx-a11y/label-has-associated-control`][67]                      | `error`  |                                                                   |
| [`jsx-a11y/media-has-caption`][68]                                 | `error`  |                                                                   |
| [`jsx-a11y/mouse-events-have-key-events`][69]                      | `error`  |                                                                   |
| [`jsx-a11y/no-access-key`][70]                                     | `error`  |                                                                   |
| [`jsx-a11y/no-autofocus`][71]                                      | `error`  |                                                                   |
| [`jsx-a11y/no-distracting-elements`][72]                           | `error`  |                                                                   |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][73]     | `error`  | `{"tr":["none","presentation"],"canvas":["img"]}`                 |
| [`jsx-a11y/no-noninteractive-element-interactions`][74]            | `error`  | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][75]     | `error`  | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-tabindex`][76]                        | `error`  | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`   |
| [`jsx-a11y/no-redundant-roles`][77]                                | `error`  |                                                                   |
| [`jsx-a11y/no-static-element-interactions`][78]                    | `error`  | [see Config][config]                                              |
| [`jsx-a11y/role-has-required-aria-props`][79]                      | `error`  |                                                                   |
| [`jsx-a11y/role-supports-aria-props`][80]                          | `error`  |                                                                   |
| [`jsx-a11y/scope`][81]                                             | `error`  |                                                                   |
| [`jsx-a11y/tabindex-no-positive`][82]                              | `error`  |                                                                   |
| [`no-async-promise-executor`][83]                                  | `error`  |                                                                   |
| [`no-case-declarations`][84]                                       | `error`  |                                                                   |
| [`no-class-assign`][85]                                            | `error`  |                                                                   |
| [`no-compare-neg-zero`][86]                                        | `error`  |                                                                   |
| [`no-cond-assign`][87]                                             | `error`  | `"except-parens"`                                                 |
| [`no-const-assign`][88]                                            | `error`  |                                                                   |
| [`no-constant-binary-expression`][89]                              | `error`  |                                                                   |
| [`no-constant-condition`][90]                                      | `error`  | `{"checkLoops":"allExceptWhileTrue"}`                             |
| [`no-control-regex`][91]                                           | `error`  |                                                                   |
| [`no-debugger`][92]                                                | `error`  |                                                                   |
| [`no-delete-var`][93]                                              | `error`  |                                                                   |
| [`no-dupe-args`][94]                                               | `error`  |                                                                   |
| [`no-dupe-class-members`][95]                                      | `error`  |                                                                   |
| [`no-dupe-else-if`][96]                                            | `error`  |                                                                   |
| [`no-dupe-keys`][97]                                               | `error`  |                                                                   |
| [`no-duplicate-case`][98]                                          | `error`  |                                                                   |
| [`no-empty`][99]                                                   | `error`  | `{"allowEmptyCatch":false}`                                       |
| [`no-empty-character-class`][100]                                  | `error`  |                                                                   |
| [`no-empty-pattern`][101]                                          | `error`  | `{"allowObjectPatternsAsParameters":false}`                       |
| [`no-empty-static-block`][102]                                     | `error`  |                                                                   |
| [`no-ex-assign`][103]                                              | `error`  |                                                                   |
| [`no-extra-boolean-cast`][104]                                     | `error`  | `{}`                                                              |
| [`no-fallthrough`][105]                                            | `error`  | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}` |
| [`no-func-assign`][106]                                            | `error`  |                                                                   |
| [`no-global-assign`][107]                                          | `error`  | `{"exceptions":[]}`                                               |
| [`no-import-assign`][108]                                          | `error`  |                                                                   |
| [`no-invalid-regexp`][109]                                         | `error`  | `{}`                                                              |
| [`no-irregular-whitespace`][110]                                   | `error`  | [see Config][config]                                              |
| [`no-loss-of-precision`][111]                                      | `error`  |                                                                   |
| [`no-misleading-character-class`][112]                             | `error`  | `{"allowEscape":false}`                                           |
| [`no-new`][113]                                                    | `warn`   |                                                                   |
| [`no-new-native-nonconstructor`][114]                              | `error`  |                                                                   |
| [`no-nonoctal-decimal-escape`][115]                                | `error`  |                                                                   |
| [`no-obj-calls`][116]                                              | `error`  |                                                                   |
| [`no-octal`][117]                                                  | `error`  |                                                                   |
| [`no-param-reassign`][118]                                         | `error`  | `{"props":false}`                                                 |
| [`no-prototype-builtins`][119]                                     | `error`  |                                                                   |
| [`no-redeclare`][120]                                              | `error`  | `{"builtinGlobals":true}`                                         |
| [`no-regex-spaces`][121]                                           | `error`  |                                                                   |
| [`no-restricted-syntax`][122]                                      | `error`  | [see Config][config]                                              |
| [`no-self-assign`][123]                                            | `error`  | `{"props":true}`                                                  |
| [`no-setter-return`][124]                                          | `error`  |                                                                   |
| [`no-shadow-restricted-names`][125]                                | `error`  | `{"reportGlobalThis":false}`                                      |
| [`no-sparse-arrays`][126]                                          | `error`  |                                                                   |
| [`no-this-before-super`][127]                                      | `error`  |                                                                   |
| [`no-undef`][128]                                                  | `error`  | `{"typeof":false}`                                                |
| [`no-unreachable`][129]                                            | `error`  |                                                                   |
| [`no-unsafe-finally`][130]                                         | `error`  |                                                                   |
| [`no-unsafe-negation`][131]                                        | `error`  | `{"enforceForOrderingRelations":false}`                           |
| [`no-unsafe-optional-chaining`][132]                               | `error`  | `{"disallowArithmeticOperators":false}`                           |
| [`no-unused-labels`][133]                                          | `error`  |                                                                   |
| [`no-unused-private-class-members`][134]                           | `error`  |                                                                   |
| [`no-useless-backreference`][135]                                  | `error`  |                                                                   |
| [`no-useless-catch`][136]                                          | `error`  |                                                                   |
| [`no-useless-escape`][137]                                         | `error`  | `{"allowRegexCharacters":[]}`                                     |
| [`no-with`][138]                                                   | `error`  |                                                                   |
| [`object-shorthand`][139]                                          | `error`  | `"methods"`                                                       |
| [`react-hooks/component-hook-factories`][140]                      | `error`  |                                                                   |
| [`react-hooks/config`][141]                                        | `error`  |                                                                   |
| [`react-hooks/error-boundaries`][142]                              | `error`  |                                                                   |
| [`react-hooks/exhaustive-deps`][143]                               | `warn`   |                                                                   |
| [`react-hooks/gating`][144]                                        | `error`  |                                                                   |
| [`react-hooks/globals`][145]                                       | `error`  |                                                                   |
| [`react-hooks/immutability`][146]                                  | `error`  |                                                                   |
| [`react-hooks/incompatible-library`][147]                          | `warn`   |                                                                   |
| [`react-hooks/preserve-manual-memoization`][148]                   | `error`  |                                                                   |
| [`react-hooks/purity`][149]                                        | `error`  |                                                                   |
| [`react-hooks/refs`][150]                                          | `error`  |                                                                   |
| [`react-hooks/rules-of-hooks`][151]                                | `error`  |                                                                   |
| [`react-hooks/set-state-in-effect`][152]                           | `error`  |                                                                   |
| [`react-hooks/set-state-in-render`][153]                           | `error`  |                                                                   |
| [`react-hooks/static-components`][154]                             | `error`  |                                                                   |
| [`react-hooks/unsupported-syntax`][155]                            | `warn`   |                                                                   |
| [`react-hooks/use-memo`][156]                                      | `error`  |                                                                   |
| [`react/display-name`][157]                                        | `error`  |                                                                   |
| [`react/jsx-key`][158]                                             | `error`  |                                                                   |
| [`react/jsx-no-comment-textnodes`][159]                            | `error`  |                                                                   |
| [`react/jsx-no-duplicate-props`][160]                              | `error`  |                                                                   |
| [`react/jsx-no-target-blank`][161]                                 | `error`  |                                                                   |
| [`react/jsx-no-undef`][162]                                        | `error`  |                                                                   |
| [`react/jsx-uses-react`][163]                                      | `error`  |                                                                   |
| [`react/jsx-uses-vars`][164]                                       | `error`  |                                                                   |
| [`react/no-children-prop`][165]                                    | `error`  |                                                                   |
| [`react/no-danger-with-children`][166]                             | `error`  |                                                                   |
| [`react/no-deprecated`][167]                                       | `error`  |                                                                   |
| [`react/no-direct-mutation-state`][168]                            | `error`  |                                                                   |
| [`react/no-find-dom-node`][169]                                    | `error`  |                                                                   |
| [`react/no-is-mounted`][170]                                       | `error`  |                                                                   |
| [`react/no-render-return-value`][171]                              | `error`  |                                                                   |
| [`react/no-string-refs`][172]                                      | `error`  |                                                                   |
| [`react/no-unescaped-entities`][173]                               | `error`  |                                                                   |
| [`react/no-unknown-property`][174]                                 | `error`  |                                                                   |
| [`react/react-in-jsx-scope`][175]                                  | `error`  |                                                                   |
| [`react/require-render-return`][176]                               | `error`  |                                                                   |
| [`require-yield`][177]                                             | `error`  |                                                                   |
| [`use-isnan`][178]                                                 | `error`  | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`         |
| [`valid-typeof`][179]                                              | `error`  | `{"requireStringLiterals":false}`                                 |

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
[0]: https://typescript-eslint.io/rules/adjacent-overload-signatures/
[1]: https://typescript-eslint.io/rules/array-type/
[2]: https://typescript-eslint.io/rules/ban-ts-comment/
[3]: https://typescript-eslint.io/rules/ban-tslint-comment/
[4]: https://typescript-eslint.io/rules/class-literal-property-style/
[5]: https://typescript-eslint.io/rules/consistent-generic-constructors/
[6]: https://typescript-eslint.io/rules/consistent-indexed-object-style/
[7]: https://typescript-eslint.io/rules/consistent-type-assertions/
[8]: https://typescript-eslint.io/rules/consistent-type-definitions/
[9]: https://typescript-eslint.io/rules/no-array-constructor/
[10]: https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
[11]: https://typescript-eslint.io/rules/no-duplicate-enum-values/
[12]: https://typescript-eslint.io/rules/no-dynamic-delete/
[13]: https://typescript-eslint.io/rules/no-empty-function/
[14]: https://typescript-eslint.io/rules/no-empty-object-type/
[15]: https://typescript-eslint.io/rules/no-explicit-any/
[16]: https://typescript-eslint.io/rules/no-extra-non-null-assertion/
[17]: https://typescript-eslint.io/rules/no-extraneous-class/
[18]: https://typescript-eslint.io/rules/no-inferrable-types/
[19]: https://typescript-eslint.io/rules/no-invalid-void-type/
[20]: https://typescript-eslint.io/rules/no-misused-new/
[21]: https://typescript-eslint.io/rules/no-namespace/
[22]: https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
[23]: https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
[24]: https://typescript-eslint.io/rules/no-non-null-assertion/
[25]: https://typescript-eslint.io/rules/no-require-imports/
[26]: https://typescript-eslint.io/rules/no-this-alias/
[27]: https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
[28]: https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
[29]: https://typescript-eslint.io/rules/no-unsafe-function-type/
[30]: https://typescript-eslint.io/rules/no-unused-expressions/
[31]: https://typescript-eslint.io/rules/no-unused-vars/
[32]: https://typescript-eslint.io/rules/no-useless-constructor/
[33]: https://typescript-eslint.io/rules/no-wrapper-object-types/
[34]: https://typescript-eslint.io/rules/prefer-as-const/
[35]: https://typescript-eslint.io/rules/prefer-for-of/
[36]: https://typescript-eslint.io/rules/prefer-function-type/
[37]: https://typescript-eslint.io/rules/prefer-literal-enum-member/
[38]: https://typescript-eslint.io/rules/prefer-namespace-keyword/
[39]: https://typescript-eslint.io/rules/triple-slash-reference/
[40]: https://typescript-eslint.io/rules/unified-signatures/
[41]: https://eslint.org/docs/latest/rules/constructor-super
[42]: https://eslint.org/docs/latest/rules/for-direction
[43]: https://eslint.org/docs/latest/rules/getter-return
[44]: https://eslint.org/docs/latest/rules/id-length
[45]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
[46]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
[47]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
[48]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
[49]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
[50]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
[51]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
[52]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[53]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[54]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[55]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[56]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[57]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[58]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[59]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[60]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[61]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[62]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[63]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[64]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[65]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[66]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[67]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[68]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[69]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[70]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[71]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[72]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[73]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[74]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[75]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[76]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[77]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[78]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[79]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[80]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[81]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[82]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[83]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[84]: https://eslint.org/docs/latest/rules/no-case-declarations
[85]: https://eslint.org/docs/latest/rules/no-class-assign
[86]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[87]: https://eslint.org/docs/latest/rules/no-cond-assign
[88]: https://eslint.org/docs/latest/rules/no-const-assign
[89]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[90]: https://eslint.org/docs/latest/rules/no-constant-condition
[91]: https://eslint.org/docs/latest/rules/no-control-regex
[92]: https://eslint.org/docs/latest/rules/no-debugger
[93]: https://eslint.org/docs/latest/rules/no-delete-var
[94]: https://eslint.org/docs/latest/rules/no-dupe-args
[95]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[96]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[97]: https://eslint.org/docs/latest/rules/no-dupe-keys
[98]: https://eslint.org/docs/latest/rules/no-duplicate-case
[99]: https://eslint.org/docs/latest/rules/no-empty
[100]: https://eslint.org/docs/latest/rules/no-empty-character-class
[101]: https://eslint.org/docs/latest/rules/no-empty-pattern
[102]: https://eslint.org/docs/latest/rules/no-empty-static-block
[103]: https://eslint.org/docs/latest/rules/no-ex-assign
[104]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[105]: https://eslint.org/docs/latest/rules/no-fallthrough
[106]: https://eslint.org/docs/latest/rules/no-func-assign
[107]: https://eslint.org/docs/latest/rules/no-global-assign
[108]: https://eslint.org/docs/latest/rules/no-import-assign
[109]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[110]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[111]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[112]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[113]: https://eslint.org/docs/latest/rules/no-new
[114]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[115]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[116]: https://eslint.org/docs/latest/rules/no-obj-calls
[117]: https://eslint.org/docs/latest/rules/no-octal
[118]: https://eslint.org/docs/latest/rules/no-param-reassign
[119]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[120]: https://eslint.org/docs/latest/rules/no-redeclare
[121]: https://eslint.org/docs/latest/rules/no-regex-spaces
[122]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[123]: https://eslint.org/docs/latest/rules/no-self-assign
[124]: https://eslint.org/docs/latest/rules/no-setter-return
[125]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[126]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[127]: https://eslint.org/docs/latest/rules/no-this-before-super
[128]: https://eslint.org/docs/latest/rules/no-undef
[129]: https://eslint.org/docs/latest/rules/no-unreachable
[130]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[131]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[132]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[133]: https://eslint.org/docs/latest/rules/no-unused-labels
[134]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[135]: https://eslint.org/docs/latest/rules/no-useless-backreference
[136]: https://eslint.org/docs/latest/rules/no-useless-catch
[137]: https://eslint.org/docs/latest/rules/no-useless-escape
[138]: https://eslint.org/docs/latest/rules/no-with
[139]: https://eslint.org/docs/latest/rules/object-shorthand
[140]: https://legacy.reactjs.org/docs/hooks-rules.html
[141]: https://legacy.reactjs.org/docs/hooks-rules.html
[142]: https://legacy.reactjs.org/docs/hooks-rules.html
[143]: https://legacy.reactjs.org/docs/hooks-rules.html
[144]: https://legacy.reactjs.org/docs/hooks-rules.html
[145]: https://legacy.reactjs.org/docs/hooks-rules.html
[146]: https://legacy.reactjs.org/docs/hooks-rules.html
[147]: https://legacy.reactjs.org/docs/hooks-rules.html
[148]: https://legacy.reactjs.org/docs/hooks-rules.html
[149]: https://legacy.reactjs.org/docs/hooks-rules.html
[150]: https://legacy.reactjs.org/docs/hooks-rules.html
[151]: https://legacy.reactjs.org/docs/hooks-rules.html
[152]: https://legacy.reactjs.org/docs/hooks-rules.html
[153]: https://legacy.reactjs.org/docs/hooks-rules.html
[154]: https://legacy.reactjs.org/docs/hooks-rules.html
[155]: https://legacy.reactjs.org/docs/hooks-rules.html
[156]: https://legacy.reactjs.org/docs/hooks-rules.html
[157]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[158]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[159]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[160]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[161]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[162]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[163]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[164]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[165]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[166]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[167]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[168]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[169]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[170]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[171]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[172]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[173]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[174]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[175]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[176]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[177]: https://eslint.org/docs/latest/rules/require-yield
[178]: https://eslint.org/docs/latest/rules/use-isnan
[179]: https://eslint.org/docs/latest/rules/valid-typeof
