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

| Rule                                                           | Severity | Config                                                            |
| -------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| [`constructor-super`][0]                                       | `error`  |                                                                   |
| [`for-direction`][1]                                           | `error`  |                                                                   |
| [`getter-return`][2]                                           | `error`  | `{"allowImplicit":false}`                                         |
| [`id-length`][3]                                               | `warn`   | [see Config][config]                                              |
| [`import/default`][4]                                          | `error`  |                                                                   |
| [`import/export`][5]                                           | `error`  |                                                                   |
| [`import/named`][6]                                            | `error`  |                                                                   |
| [`import/namespace`][7]                                        | `error`  |                                                                   |
| [`import/no-duplicates`][8]                                    | `warn`   |                                                                   |
| [`import/no-named-as-default`][9]                              | `warn`   |                                                                   |
| [`import/no-named-as-default-member`][10]                      | `warn`   |                                                                   |
| [`import/no-unresolved`][11]                                   | `error`  |                                                                   |
| [`jsx-a11y/alt-text`][12]                                      | `error`  |                                                                   |
| [`jsx-a11y/anchor-has-content`][13]                            | `error`  |                                                                   |
| [`jsx-a11y/anchor-is-valid`][14]                               | `error`  |                                                                   |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][15]            | `error`  |                                                                   |
| [`jsx-a11y/aria-props`][16]                                    | `error`  |                                                                   |
| [`jsx-a11y/aria-proptypes`][17]                                | `error`  |                                                                   |
| [`jsx-a11y/aria-role`][18]                                     | `error`  |                                                                   |
| [`jsx-a11y/aria-unsupported-elements`][19]                     | `error`  |                                                                   |
| [`jsx-a11y/autocomplete-valid`][20]                            | `error`  |                                                                   |
| [`jsx-a11y/click-events-have-key-events`][21]                  | `error`  |                                                                   |
| [`jsx-a11y/heading-has-content`][22]                           | `error`  |                                                                   |
| [`jsx-a11y/html-has-lang`][23]                                 | `error`  |                                                                   |
| [`jsx-a11y/iframe-has-title`][24]                              | `error`  |                                                                   |
| [`jsx-a11y/img-redundant-alt`][25]                             | `error`  |                                                                   |
| [`jsx-a11y/interactive-supports-focus`][26]                    | `error`  | [see Config][config]                                              |
| [`jsx-a11y/label-has-associated-control`][27]                  | `error`  |                                                                   |
| [`jsx-a11y/media-has-caption`][28]                             | `error`  |                                                                   |
| [`jsx-a11y/mouse-events-have-key-events`][29]                  | `error`  |                                                                   |
| [`jsx-a11y/no-access-key`][30]                                 | `error`  |                                                                   |
| [`jsx-a11y/no-autofocus`][31]                                  | `error`  |                                                                   |
| [`jsx-a11y/no-distracting-elements`][32]                       | `error`  |                                                                   |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][33] | `error`  | `{"tr":["none","presentation"],"canvas":["img"]}`                 |
| [`jsx-a11y/no-noninteractive-element-interactions`][34]        | `error`  | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][35] | `error`  | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-tabindex`][36]                    | `error`  | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`   |
| [`jsx-a11y/no-redundant-roles`][37]                            | `error`  |                                                                   |
| [`jsx-a11y/no-static-element-interactions`][38]                | `error`  | [see Config][config]                                              |
| [`jsx-a11y/role-has-required-aria-props`][39]                  | `error`  |                                                                   |
| [`jsx-a11y/role-supports-aria-props`][40]                      | `error`  |                                                                   |
| [`jsx-a11y/scope`][41]                                         | `error`  |                                                                   |
| [`jsx-a11y/tabindex-no-positive`][42]                          | `error`  |                                                                   |
| [`no-async-promise-executor`][43]                              | `error`  |                                                                   |
| [`no-case-declarations`][44]                                   | `error`  |                                                                   |
| [`no-class-assign`][45]                                        | `error`  |                                                                   |
| [`no-compare-neg-zero`][46]                                    | `error`  |                                                                   |
| [`no-cond-assign`][47]                                         | `error`  | `"except-parens"`                                                 |
| [`no-const-assign`][48]                                        | `error`  |                                                                   |
| [`no-constant-binary-expression`][49]                          | `error`  |                                                                   |
| [`no-constant-condition`][50]                                  | `error`  | `{"checkLoops":"allExceptWhileTrue"}`                             |
| [`no-control-regex`][51]                                       | `error`  |                                                                   |
| [`no-debugger`][52]                                            | `error`  |                                                                   |
| [`no-delete-var`][53]                                          | `error`  |                                                                   |
| [`no-dupe-args`][54]                                           | `error`  |                                                                   |
| [`no-dupe-class-members`][55]                                  | `error`  |                                                                   |
| [`no-dupe-else-if`][56]                                        | `error`  |                                                                   |
| [`no-dupe-keys`][57]                                           | `error`  |                                                                   |
| [`no-duplicate-case`][58]                                      | `error`  |                                                                   |
| [`no-empty`][59]                                               | `error`  | `{"allowEmptyCatch":false}`                                       |
| [`no-empty-character-class`][60]                               | `error`  |                                                                   |
| [`no-empty-pattern`][61]                                       | `error`  | `{"allowObjectPatternsAsParameters":false}`                       |
| [`no-empty-static-block`][62]                                  | `error`  |                                                                   |
| [`no-ex-assign`][63]                                           | `error`  |                                                                   |
| [`no-extra-boolean-cast`][64]                                  | `error`  | `{}`                                                              |
| [`no-fallthrough`][65]                                         | `error`  | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}` |
| [`no-func-assign`][66]                                         | `error`  |                                                                   |
| [`no-global-assign`][67]                                       | `error`  | `{"exceptions":[]}`                                               |
| [`no-import-assign`][68]                                       | `error`  |                                                                   |
| [`no-invalid-regexp`][69]                                      | `error`  | `{}`                                                              |
| [`no-irregular-whitespace`][70]                                | `error`  | [see Config][config]                                              |
| [`no-loss-of-precision`][71]                                   | `error`  |                                                                   |
| [`no-misleading-character-class`][72]                          | `error`  | `{"allowEscape":false}`                                           |
| [`no-new`][73]                                                 | `warn`   |                                                                   |
| [`no-new-native-nonconstructor`][74]                           | `error`  |                                                                   |
| [`no-nonoctal-decimal-escape`][75]                             | `error`  |                                                                   |
| [`no-obj-calls`][76]                                           | `error`  |                                                                   |
| [`no-octal`][77]                                               | `error`  |                                                                   |
| [`no-param-reassign`][78]                                      | `error`  | `{"props":false}`                                                 |
| [`no-prototype-builtins`][79]                                  | `error`  |                                                                   |
| [`no-redeclare`][80]                                           | `error`  | `{"builtinGlobals":true}`                                         |
| [`no-regex-spaces`][81]                                        | `error`  |                                                                   |
| [`no-restricted-syntax`][82]                                   | `error`  | [see Config][config]                                              |
| [`no-self-assign`][83]                                         | `error`  | `{"props":true}`                                                  |
| [`no-setter-return`][84]                                       | `error`  |                                                                   |
| [`no-shadow-restricted-names`][85]                             | `error`  | `{"reportGlobalThis":false}`                                      |
| [`no-sparse-arrays`][86]                                       | `error`  |                                                                   |
| [`no-this-before-super`][87]                                   | `error`  |                                                                   |
| [`no-undef`][88]                                               | `error`  | `{"typeof":false}`                                                |
| [`no-unreachable`][89]                                         | `error`  |                                                                   |
| [`no-unsafe-finally`][90]                                      | `error`  |                                                                   |
| [`no-unsafe-negation`][91]                                     | `error`  | `{"enforceForOrderingRelations":false}`                           |
| [`no-unsafe-optional-chaining`][92]                            | `error`  | `{"disallowArithmeticOperators":false}`                           |
| [`no-unused-labels`][93]                                       | `error`  |                                                                   |
| [`no-unused-private-class-members`][94]                        | `error`  |                                                                   |
| [`no-unused-vars`][95]                                         | `error`  |                                                                   |
| [`no-useless-backreference`][96]                               | `error`  |                                                                   |
| [`no-useless-catch`][97]                                       | `error`  |                                                                   |
| [`no-useless-escape`][98]                                      | `error`  | `{"allowRegexCharacters":[]}`                                     |
| [`no-with`][99]                                                | `error`  |                                                                   |
| [`object-shorthand`][100]                                      | `error`  | `"methods"`                                                       |
| [`react-hooks/component-hook-factories`][101]                  | `error`  |                                                                   |
| [`react-hooks/config`][102]                                    | `error`  |                                                                   |
| [`react-hooks/error-boundaries`][103]                          | `error`  |                                                                   |
| [`react-hooks/exhaustive-deps`][104]                           | `warn`   |                                                                   |
| [`react-hooks/gating`][105]                                    | `error`  |                                                                   |
| [`react-hooks/globals`][106]                                   | `error`  |                                                                   |
| [`react-hooks/immutability`][107]                              | `error`  |                                                                   |
| [`react-hooks/incompatible-library`][108]                      | `warn`   |                                                                   |
| [`react-hooks/preserve-manual-memoization`][109]               | `error`  |                                                                   |
| [`react-hooks/purity`][110]                                    | `error`  |                                                                   |
| [`react-hooks/refs`][111]                                      | `error`  |                                                                   |
| [`react-hooks/rules-of-hooks`][112]                            | `error`  |                                                                   |
| [`react-hooks/set-state-in-effect`][113]                       | `error`  |                                                                   |
| [`react-hooks/set-state-in-render`][114]                       | `error`  |                                                                   |
| [`react-hooks/static-components`][115]                         | `error`  |                                                                   |
| [`react-hooks/unsupported-syntax`][116]                        | `warn`   |                                                                   |
| [`react-hooks/use-memo`][117]                                  | `error`  |                                                                   |
| [`react/display-name`][118]                                    | `error`  |                                                                   |
| [`react/jsx-key`][119]                                         | `error`  |                                                                   |
| [`react/jsx-no-comment-textnodes`][120]                        | `error`  |                                                                   |
| [`react/jsx-no-duplicate-props`][121]                          | `error`  |                                                                   |
| [`react/jsx-no-target-blank`][122]                             | `error`  |                                                                   |
| [`react/jsx-no-undef`][123]                                    | `error`  |                                                                   |
| [`react/jsx-uses-react`][124]                                  | `error`  |                                                                   |
| [`react/jsx-uses-vars`][125]                                   | `error`  |                                                                   |
| [`react/no-children-prop`][126]                                | `error`  |                                                                   |
| [`react/no-danger-with-children`][127]                         | `error`  |                                                                   |
| [`react/no-deprecated`][128]                                   | `error`  |                                                                   |
| [`react/no-direct-mutation-state`][129]                        | `error`  |                                                                   |
| [`react/no-find-dom-node`][130]                                | `error`  |                                                                   |
| [`react/no-is-mounted`][131]                                   | `error`  |                                                                   |
| [`react/no-render-return-value`][132]                          | `error`  |                                                                   |
| [`react/no-string-refs`][133]                                  | `error`  |                                                                   |
| [`react/no-unescaped-entities`][134]                           | `error`  |                                                                   |
| [`react/no-unknown-property`][135]                             | `error`  |                                                                   |
| [`react/react-in-jsx-scope`][136]                              | `error`  |                                                                   |
| [`react/require-render-return`][137]                           | `error`  |                                                                   |
| [`require-yield`][138]                                         | `error`  |                                                                   |
| [`use-isnan`][139]                                             | `error`  | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`         |
| [`valid-typeof`][140]                                          | `error`  | `{"requireStringLiterals":false}`                                 |

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
[0]: https://eslint.org/docs/latest/rules/constructor-super
[1]: https://eslint.org/docs/latest/rules/for-direction
[2]: https://eslint.org/docs/latest/rules/getter-return
[3]: https://eslint.org/docs/latest/rules/id-length
[4]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
[5]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
[6]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
[7]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
[8]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
[9]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
[10]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
[11]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
[12]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[13]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[14]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[15]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[16]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[17]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[18]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[19]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[20]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[21]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[22]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[23]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[24]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[25]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[26]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[27]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[28]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[29]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[30]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[31]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[32]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[33]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[34]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[35]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[36]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[37]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[38]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[39]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[40]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[41]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[42]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[43]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[44]: https://eslint.org/docs/latest/rules/no-case-declarations
[45]: https://eslint.org/docs/latest/rules/no-class-assign
[46]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[47]: https://eslint.org/docs/latest/rules/no-cond-assign
[48]: https://eslint.org/docs/latest/rules/no-const-assign
[49]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[50]: https://eslint.org/docs/latest/rules/no-constant-condition
[51]: https://eslint.org/docs/latest/rules/no-control-regex
[52]: https://eslint.org/docs/latest/rules/no-debugger
[53]: https://eslint.org/docs/latest/rules/no-delete-var
[54]: https://eslint.org/docs/latest/rules/no-dupe-args
[55]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[56]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[57]: https://eslint.org/docs/latest/rules/no-dupe-keys
[58]: https://eslint.org/docs/latest/rules/no-duplicate-case
[59]: https://eslint.org/docs/latest/rules/no-empty
[60]: https://eslint.org/docs/latest/rules/no-empty-character-class
[61]: https://eslint.org/docs/latest/rules/no-empty-pattern
[62]: https://eslint.org/docs/latest/rules/no-empty-static-block
[63]: https://eslint.org/docs/latest/rules/no-ex-assign
[64]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[65]: https://eslint.org/docs/latest/rules/no-fallthrough
[66]: https://eslint.org/docs/latest/rules/no-func-assign
[67]: https://eslint.org/docs/latest/rules/no-global-assign
[68]: https://eslint.org/docs/latest/rules/no-import-assign
[69]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[70]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[71]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[72]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[73]: https://eslint.org/docs/latest/rules/no-new
[74]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[75]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[76]: https://eslint.org/docs/latest/rules/no-obj-calls
[77]: https://eslint.org/docs/latest/rules/no-octal
[78]: https://eslint.org/docs/latest/rules/no-param-reassign
[79]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[80]: https://eslint.org/docs/latest/rules/no-redeclare
[81]: https://eslint.org/docs/latest/rules/no-regex-spaces
[82]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[83]: https://eslint.org/docs/latest/rules/no-self-assign
[84]: https://eslint.org/docs/latest/rules/no-setter-return
[85]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[86]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[87]: https://eslint.org/docs/latest/rules/no-this-before-super
[88]: https://eslint.org/docs/latest/rules/no-undef
[89]: https://eslint.org/docs/latest/rules/no-unreachable
[90]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[91]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[92]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[93]: https://eslint.org/docs/latest/rules/no-unused-labels
[94]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[95]: https://eslint.org/docs/latest/rules/no-unused-vars
[96]: https://eslint.org/docs/latest/rules/no-useless-backreference
[97]: https://eslint.org/docs/latest/rules/no-useless-catch
[98]: https://eslint.org/docs/latest/rules/no-useless-escape
[99]: https://eslint.org/docs/latest/rules/no-with
[100]: https://eslint.org/docs/latest/rules/object-shorthand
[101]: https://legacy.reactjs.org/docs/hooks-rules.html
[102]: https://legacy.reactjs.org/docs/hooks-rules.html
[103]: https://legacy.reactjs.org/docs/hooks-rules.html
[104]: https://legacy.reactjs.org/docs/hooks-rules.html
[105]: https://legacy.reactjs.org/docs/hooks-rules.html
[106]: https://legacy.reactjs.org/docs/hooks-rules.html
[107]: https://legacy.reactjs.org/docs/hooks-rules.html
[108]: https://legacy.reactjs.org/docs/hooks-rules.html
[109]: https://legacy.reactjs.org/docs/hooks-rules.html
[110]: https://legacy.reactjs.org/docs/hooks-rules.html
[111]: https://legacy.reactjs.org/docs/hooks-rules.html
[112]: https://legacy.reactjs.org/docs/hooks-rules.html
[113]: https://legacy.reactjs.org/docs/hooks-rules.html
[114]: https://legacy.reactjs.org/docs/hooks-rules.html
[115]: https://legacy.reactjs.org/docs/hooks-rules.html
[116]: https://legacy.reactjs.org/docs/hooks-rules.html
[117]: https://legacy.reactjs.org/docs/hooks-rules.html
[118]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[119]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[120]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[121]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[122]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[123]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[124]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[125]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[126]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[127]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[128]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[129]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[130]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[131]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[132]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[133]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[134]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[135]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[136]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[137]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[138]: https://eslint.org/docs/latest/rules/require-yield
[139]: https://eslint.org/docs/latest/rules/use-isnan
[140]: https://eslint.org/docs/latest/rules/valid-typeof
