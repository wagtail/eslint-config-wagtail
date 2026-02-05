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
- [typescript-eslint (including `stylistic`)](https://typescript-eslint.io/)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
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

| Rule                                                           | Severity | Config                                                            |
| -------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| [`@typescript-eslint/adjacent-overload-signatures`][0]         | `2`      |                                                                   |
| [`@typescript-eslint/array-type`][1]                           | `2`      |                                                                   |
| [`@typescript-eslint/ban-ts-comment`][2]                       | `2`      |                                                                   |
| [`@typescript-eslint/ban-tslint-comment`][3]                   | `2`      |                                                                   |
| [`@typescript-eslint/class-literal-property-style`][4]         | `2`      |                                                                   |
| [`@typescript-eslint/consistent-generic-constructors`][5]      | `2`      |                                                                   |
| [`@typescript-eslint/consistent-indexed-object-style`][6]      | `2`      |                                                                   |
| [`@typescript-eslint/consistent-type-assertions`][7]           | `2`      |                                                                   |
| [`@typescript-eslint/consistent-type-definitions`][8]          | `2`      |                                                                   |
| [`@typescript-eslint/no-array-constructor`][9]                 | `2`      |                                                                   |
| [`@typescript-eslint/no-confusing-non-null-assertion`][10]     | `2`      |                                                                   |
| [`@typescript-eslint/no-duplicate-enum-values`][11]            | `2`      |                                                                   |
| [`@typescript-eslint/no-empty-function`][12]                   | `2`      | `{"allow":[]}`                                                    |
| [`@typescript-eslint/no-empty-object-type`][13]                | `2`      |                                                                   |
| [`@typescript-eslint/no-explicit-any`][14]                     | `2`      |                                                                   |
| [`@typescript-eslint/no-extra-non-null-assertion`][15]         | `2`      |                                                                   |
| [`@typescript-eslint/no-inferrable-types`][16]                 | `2`      |                                                                   |
| [`@typescript-eslint/no-misused-new`][17]                      | `2`      |                                                                   |
| [`@typescript-eslint/no-namespace`][18]                        | `2`      |                                                                   |
| [`@typescript-eslint/no-non-null-asserted-optional-chain`][19] | `2`      |                                                                   |
| [`@typescript-eslint/no-require-imports`][20]                  | `2`      |                                                                   |
| [`@typescript-eslint/no-this-alias`][21]                       | `2`      |                                                                   |
| [`@typescript-eslint/no-unnecessary-type-constraint`][22]      | `2`      |                                                                   |
| [`@typescript-eslint/no-unsafe-declaration-merging`][23]       | `2`      |                                                                   |
| [`@typescript-eslint/no-unsafe-function-type`][24]             | `2`      |                                                                   |
| [`@typescript-eslint/no-unused-expressions`][25]               | `2`      | [see Config][config]                                              |
| [`@typescript-eslint/no-unused-vars`][26]                      | `2`      |                                                                   |
| [`@typescript-eslint/no-wrapper-object-types`][27]             | `2`      |                                                                   |
| [`@typescript-eslint/prefer-as-const`][28]                     | `2`      |                                                                   |
| [`@typescript-eslint/prefer-for-of`][29]                       | `2`      |                                                                   |
| [`@typescript-eslint/prefer-function-type`][30]                | `2`      |                                                                   |
| [`@typescript-eslint/prefer-namespace-keyword`][31]            | `2`      |                                                                   |
| [`@typescript-eslint/triple-slash-reference`][32]              | `2`      |                                                                   |
| [`constructor-super`][33]                                      | `2`      |                                                                   |
| [`for-direction`][34]                                          | `2`      |                                                                   |
| [`getter-return`][35]                                          | `2`      | `{"allowImplicit":false}`                                         |
| [`id-length`][36]                                              | `1`      | [see Config][config]                                              |
| [`import-x/default`][37]                                       | `2`      |                                                                   |
| [`import-x/export`][38]                                        | `2`      |                                                                   |
| [`import-x/namespace`][39]                                     | `2`      |                                                                   |
| [`import-x/no-duplicates`][40]                                 | `1`      |                                                                   |
| [`import-x/no-named-as-default`][41]                           | `1`      |                                                                   |
| [`import-x/no-named-as-default-member`][42]                    | `1`      |                                                                   |
| [`import-x/no-unresolved`][43]                                 | `2`      |                                                                   |
| [`jsx-a11y/alt-text`][44]                                      | `2`      |                                                                   |
| [`jsx-a11y/anchor-has-content`][45]                            | `2`      |                                                                   |
| [`jsx-a11y/anchor-is-valid`][46]                               | `2`      |                                                                   |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][47]            | `2`      |                                                                   |
| [`jsx-a11y/aria-props`][48]                                    | `2`      |                                                                   |
| [`jsx-a11y/aria-proptypes`][49]                                | `2`      |                                                                   |
| [`jsx-a11y/aria-role`][50]                                     | `2`      |                                                                   |
| [`jsx-a11y/aria-unsupported-elements`][51]                     | `2`      |                                                                   |
| [`jsx-a11y/autocomplete-valid`][52]                            | `2`      |                                                                   |
| [`jsx-a11y/click-events-have-key-events`][53]                  | `2`      |                                                                   |
| [`jsx-a11y/heading-has-content`][54]                           | `2`      |                                                                   |
| [`jsx-a11y/html-has-lang`][55]                                 | `2`      |                                                                   |
| [`jsx-a11y/iframe-has-title`][56]                              | `2`      |                                                                   |
| [`jsx-a11y/img-redundant-alt`][57]                             | `2`      |                                                                   |
| [`jsx-a11y/interactive-supports-focus`][58]                    | `2`      | [see Config][config]                                              |
| [`jsx-a11y/label-has-associated-control`][59]                  | `2`      |                                                                   |
| [`jsx-a11y/media-has-caption`][60]                             | `2`      |                                                                   |
| [`jsx-a11y/mouse-events-have-key-events`][61]                  | `2`      |                                                                   |
| [`jsx-a11y/no-access-key`][62]                                 | `2`      |                                                                   |
| [`jsx-a11y/no-autofocus`][63]                                  | `2`      |                                                                   |
| [`jsx-a11y/no-distracting-elements`][64]                       | `2`      |                                                                   |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][65] | `2`      | `{"tr":["none","presentation"],"canvas":["img"]}`                 |
| [`jsx-a11y/no-noninteractive-element-interactions`][66]        | `2`      | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][67] | `2`      | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-tabindex`][68]                    | `2`      | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`   |
| [`jsx-a11y/no-redundant-roles`][69]                            | `2`      |                                                                   |
| [`jsx-a11y/no-static-element-interactions`][70]                | `2`      | [see Config][config]                                              |
| [`jsx-a11y/role-has-required-aria-props`][71]                  | `2`      |                                                                   |
| [`jsx-a11y/role-supports-aria-props`][72]                      | `2`      |                                                                   |
| [`jsx-a11y/scope`][73]                                         | `2`      |                                                                   |
| [`jsx-a11y/tabindex-no-positive`][74]                          | `2`      |                                                                   |
| [`no-async-promise-executor`][75]                              | `2`      |                                                                   |
| [`no-case-declarations`][76]                                   | `2`      |                                                                   |
| [`no-class-assign`][77]                                        | `2`      |                                                                   |
| [`no-compare-neg-zero`][78]                                    | `2`      |                                                                   |
| [`no-cond-assign`][79]                                         | `2`      | `"except-parens"`                                                 |
| [`no-const-assign`][80]                                        | `2`      |                                                                   |
| [`no-constant-binary-expression`][81]                          | `2`      |                                                                   |
| [`no-constant-condition`][82]                                  | `2`      | `{"checkLoops":"allExceptWhileTrue"}`                             |
| [`no-control-regex`][83]                                       | `2`      |                                                                   |
| [`no-debugger`][84]                                            | `2`      |                                                                   |
| [`no-delete-var`][85]                                          | `2`      |                                                                   |
| [`no-dupe-args`][86]                                           | `2`      |                                                                   |
| [`no-dupe-class-members`][87]                                  | `2`      |                                                                   |
| [`no-dupe-else-if`][88]                                        | `2`      |                                                                   |
| [`no-dupe-keys`][89]                                           | `2`      |                                                                   |
| [`no-duplicate-case`][90]                                      | `2`      |                                                                   |
| [`no-empty`][91]                                               | `2`      | `{"allowEmptyCatch":false}`                                       |
| [`no-empty-character-class`][92]                               | `2`      |                                                                   |
| [`no-empty-pattern`][93]                                       | `2`      | `{"allowObjectPatternsAsParameters":false}`                       |
| [`no-empty-static-block`][94]                                  | `2`      |                                                                   |
| [`no-ex-assign`][95]                                           | `2`      |                                                                   |
| [`no-extra-boolean-cast`][96]                                  | `2`      | `{}`                                                              |
| [`no-fallthrough`][97]                                         | `2`      | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}` |
| [`no-func-assign`][98]                                         | `2`      |                                                                   |
| [`no-global-assign`][99]                                       | `2`      | `{"exceptions":[]}`                                               |
| [`no-import-assign`][100]                                      | `2`      |                                                                   |
| [`no-invalid-regexp`][101]                                     | `2`      | `{}`                                                              |
| [`no-irregular-whitespace`][102]                               | `2`      | [see Config][config]                                              |
| [`no-loss-of-precision`][103]                                  | `2`      |                                                                   |
| [`no-misleading-character-class`][104]                         | `2`      | `{"allowEscape":false}`                                           |
| [`no-new`][105]                                                | `1`      |                                                                   |
| [`no-new-native-nonconstructor`][106]                          | `2`      |                                                                   |
| [`no-nonoctal-decimal-escape`][107]                            | `2`      |                                                                   |
| [`no-obj-calls`][108]                                          | `2`      |                                                                   |
| [`no-octal`][109]                                              | `2`      |                                                                   |
| [`no-param-reassign`][110]                                     | `2`      | `{"props":false}`                                                 |
| [`no-prototype-builtins`][111]                                 | `2`      |                                                                   |
| [`no-redeclare`][112]                                          | `2`      | `{"builtinGlobals":true}`                                         |
| [`no-regex-spaces`][113]                                       | `2`      |                                                                   |
| [`no-restricted-syntax`][114]                                  | `2`      | [see Config][config]                                              |
| [`no-self-assign`][115]                                        | `2`      | `{"props":true}`                                                  |
| [`no-setter-return`][116]                                      | `2`      |                                                                   |
| [`no-shadow-restricted-names`][117]                            | `2`      | `{"reportGlobalThis":false}`                                      |
| [`no-sparse-arrays`][118]                                      | `2`      |                                                                   |
| [`no-this-before-super`][119]                                  | `2`      |                                                                   |
| [`no-undef`][120]                                              | `2`      | `{"typeof":false}`                                                |
| [`no-unreachable`][121]                                        | `2`      |                                                                   |
| [`no-unsafe-finally`][122]                                     | `2`      |                                                                   |
| [`no-unsafe-negation`][123]                                    | `2`      | `{"enforceForOrderingRelations":false}`                           |
| [`no-unsafe-optional-chaining`][124]                           | `2`      | `{"disallowArithmeticOperators":false}`                           |
| [`no-unused-labels`][125]                                      | `2`      |                                                                   |
| [`no-unused-private-class-members`][126]                       | `2`      |                                                                   |
| [`no-useless-backreference`][127]                              | `2`      |                                                                   |
| [`no-useless-catch`][128]                                      | `2`      |                                                                   |
| [`no-useless-escape`][129]                                     | `2`      | `{"allowRegexCharacters":[]}`                                     |
| [`no-with`][130]                                               | `2`      |                                                                   |
| [`object-shorthand`][131]                                      | `2`      | `"methods"`                                                       |
| [`react-hooks/component-hook-factories`][132]                  | `2`      |                                                                   |
| [`react-hooks/config`][133]                                    | `2`      |                                                                   |
| [`react-hooks/error-boundaries`][134]                          | `2`      |                                                                   |
| [`react-hooks/exhaustive-deps`][135]                           | `1`      |                                                                   |
| [`react-hooks/gating`][136]                                    | `2`      |                                                                   |
| [`react-hooks/globals`][137]                                   | `2`      |                                                                   |
| [`react-hooks/immutability`][138]                              | `2`      |                                                                   |
| [`react-hooks/incompatible-library`][139]                      | `1`      |                                                                   |
| [`react-hooks/preserve-manual-memoization`][140]               | `2`      |                                                                   |
| [`react-hooks/purity`][141]                                    | `2`      |                                                                   |
| [`react-hooks/refs`][142]                                      | `2`      |                                                                   |
| [`react-hooks/rules-of-hooks`][143]                            | `2`      |                                                                   |
| [`react-hooks/set-state-in-effect`][144]                       | `2`      |                                                                   |
| [`react-hooks/set-state-in-render`][145]                       | `2`      |                                                                   |
| [`react-hooks/static-components`][146]                         | `2`      |                                                                   |
| [`react-hooks/unsupported-syntax`][147]                        | `1`      |                                                                   |
| [`react-hooks/use-memo`][148]                                  | `2`      |                                                                   |
| [`react/display-name`][149]                                    | `2`      |                                                                   |
| [`react/jsx-key`][150]                                         | `2`      |                                                                   |
| [`react/jsx-no-comment-textnodes`][151]                        | `2`      |                                                                   |
| [`react/jsx-no-duplicate-props`][152]                          | `2`      |                                                                   |
| [`react/jsx-no-target-blank`][153]                             | `2`      |                                                                   |
| [`react/jsx-no-undef`][154]                                    | `2`      |                                                                   |
| [`react/jsx-uses-react`][155]                                  | `2`      |                                                                   |
| [`react/jsx-uses-vars`][156]                                   | `2`      |                                                                   |
| [`react/no-children-prop`][157]                                | `2`      |                                                                   |
| [`react/no-danger-with-children`][158]                         | `2`      |                                                                   |
| [`react/no-deprecated`][159]                                   | `2`      |                                                                   |
| [`react/no-direct-mutation-state`][160]                        | `2`      |                                                                   |
| [`react/no-find-dom-node`][161]                                | `2`      |                                                                   |
| [`react/no-is-mounted`][162]                                   | `2`      |                                                                   |
| [`react/no-render-return-value`][163]                          | `2`      |                                                                   |
| [`react/no-string-refs`][164]                                  | `2`      |                                                                   |
| [`react/no-unescaped-entities`][165]                           | `2`      |                                                                   |
| [`react/no-unknown-property`][166]                             | `2`      |                                                                   |
| [`react/react-in-jsx-scope`][167]                              | `2`      |                                                                   |
| [`react/require-render-return`][168]                           | `2`      |                                                                   |
| [`require-yield`][169]                                         | `2`      |                                                                   |
| [`use-isnan`][170]                                             | `2`      | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`         |
| [`valid-typeof`][171]                                          | `2`      | `{"requireStringLiterals":false}`                                 |

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
[12]: https://typescript-eslint.io/rules/no-empty-function/
[13]: https://typescript-eslint.io/rules/no-empty-object-type/
[14]: https://typescript-eslint.io/rules/no-explicit-any/
[15]: https://typescript-eslint.io/rules/no-extra-non-null-assertion/
[16]: https://typescript-eslint.io/rules/no-inferrable-types/
[17]: https://typescript-eslint.io/rules/no-misused-new/
[18]: https://typescript-eslint.io/rules/no-namespace/
[19]: https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
[20]: https://typescript-eslint.io/rules/no-require-imports/
[21]: https://typescript-eslint.io/rules/no-this-alias/
[22]: https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
[23]: https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
[24]: https://typescript-eslint.io/rules/no-unsafe-function-type/
[25]: https://typescript-eslint.io/rules/no-unused-expressions/
[26]: https://typescript-eslint.io/rules/no-unused-vars/
[27]: https://typescript-eslint.io/rules/no-wrapper-object-types/
[28]: https://typescript-eslint.io/rules/prefer-as-const/
[29]: https://typescript-eslint.io/rules/prefer-for-of/
[30]: https://typescript-eslint.io/rules/prefer-function-type/
[31]: https://typescript-eslint.io/rules/prefer-namespace-keyword/
[32]: https://typescript-eslint.io/rules/triple-slash-reference/
[33]: https://eslint.org/docs/latest/rules/constructor-super
[34]: https://eslint.org/docs/latest/rules/for-direction
[35]: https://eslint.org/docs/latest/rules/getter-return
[36]: https://eslint.org/docs/latest/rules/id-length
[37]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
[38]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
[39]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
[40]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
[41]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
[42]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
[43]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
[44]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[45]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[46]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[47]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[48]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[49]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[50]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[51]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[52]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[53]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[54]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[55]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[56]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[57]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[58]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[59]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[60]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[61]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[62]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[63]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[64]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[65]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[66]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[67]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[68]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[69]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[70]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[71]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[72]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[73]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[74]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[75]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[76]: https://eslint.org/docs/latest/rules/no-case-declarations
[77]: https://eslint.org/docs/latest/rules/no-class-assign
[78]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[79]: https://eslint.org/docs/latest/rules/no-cond-assign
[80]: https://eslint.org/docs/latest/rules/no-const-assign
[81]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[82]: https://eslint.org/docs/latest/rules/no-constant-condition
[83]: https://eslint.org/docs/latest/rules/no-control-regex
[84]: https://eslint.org/docs/latest/rules/no-debugger
[85]: https://eslint.org/docs/latest/rules/no-delete-var
[86]: https://eslint.org/docs/latest/rules/no-dupe-args
[87]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[88]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[89]: https://eslint.org/docs/latest/rules/no-dupe-keys
[90]: https://eslint.org/docs/latest/rules/no-duplicate-case
[91]: https://eslint.org/docs/latest/rules/no-empty
[92]: https://eslint.org/docs/latest/rules/no-empty-character-class
[93]: https://eslint.org/docs/latest/rules/no-empty-pattern
[94]: https://eslint.org/docs/latest/rules/no-empty-static-block
[95]: https://eslint.org/docs/latest/rules/no-ex-assign
[96]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[97]: https://eslint.org/docs/latest/rules/no-fallthrough
[98]: https://eslint.org/docs/latest/rules/no-func-assign
[99]: https://eslint.org/docs/latest/rules/no-global-assign
[100]: https://eslint.org/docs/latest/rules/no-import-assign
[101]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[102]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[103]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[104]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[105]: https://eslint.org/docs/latest/rules/no-new
[106]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[107]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[108]: https://eslint.org/docs/latest/rules/no-obj-calls
[109]: https://eslint.org/docs/latest/rules/no-octal
[110]: https://eslint.org/docs/latest/rules/no-param-reassign
[111]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[112]: https://eslint.org/docs/latest/rules/no-redeclare
[113]: https://eslint.org/docs/latest/rules/no-regex-spaces
[114]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[115]: https://eslint.org/docs/latest/rules/no-self-assign
[116]: https://eslint.org/docs/latest/rules/no-setter-return
[117]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[118]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[119]: https://eslint.org/docs/latest/rules/no-this-before-super
[120]: https://eslint.org/docs/latest/rules/no-undef
[121]: https://eslint.org/docs/latest/rules/no-unreachable
[122]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[123]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[124]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[125]: https://eslint.org/docs/latest/rules/no-unused-labels
[126]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[127]: https://eslint.org/docs/latest/rules/no-useless-backreference
[128]: https://eslint.org/docs/latest/rules/no-useless-catch
[129]: https://eslint.org/docs/latest/rules/no-useless-escape
[130]: https://eslint.org/docs/latest/rules/no-with
[131]: https://eslint.org/docs/latest/rules/object-shorthand
[132]: https://legacy.reactjs.org/docs/hooks-rules.html
[133]: https://legacy.reactjs.org/docs/hooks-rules.html
[134]: https://legacy.reactjs.org/docs/hooks-rules.html
[135]: https://legacy.reactjs.org/docs/hooks-rules.html
[136]: https://legacy.reactjs.org/docs/hooks-rules.html
[137]: https://legacy.reactjs.org/docs/hooks-rules.html
[138]: https://legacy.reactjs.org/docs/hooks-rules.html
[139]: https://legacy.reactjs.org/docs/hooks-rules.html
[140]: https://legacy.reactjs.org/docs/hooks-rules.html
[141]: https://legacy.reactjs.org/docs/hooks-rules.html
[142]: https://legacy.reactjs.org/docs/hooks-rules.html
[143]: https://legacy.reactjs.org/docs/hooks-rules.html
[144]: https://legacy.reactjs.org/docs/hooks-rules.html
[145]: https://legacy.reactjs.org/docs/hooks-rules.html
[146]: https://legacy.reactjs.org/docs/hooks-rules.html
[147]: https://legacy.reactjs.org/docs/hooks-rules.html
[148]: https://legacy.reactjs.org/docs/hooks-rules.html
[149]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[150]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[151]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[152]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[153]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[154]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[155]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[156]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[157]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[158]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[159]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[160]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[161]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[162]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[163]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[164]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[165]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[166]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[167]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[168]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[169]: https://eslint.org/docs/latest/rules/require-yield
[170]: https://eslint.org/docs/latest/rules/use-isnan
[171]: https://eslint.org/docs/latest/rules/valid-typeof
