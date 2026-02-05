# [@wagtail/eslint-config-wagtail](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [<img src="https://raw.githubusercontent.com/wagtail/eslint-config-wagtail/main/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![npm](https://img.shields.io/npm/v/@wagtail/eslint-config-wagtail.svg)](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [![Build status](https://github.com/wagtail/eslint-config-wagtail/workflows/CI/badge.svg)](https://github.com/wagtail/eslint-config-wagtail/actions)

> Shareable ESLint config for Wagtail.

The package provides Wagtail's ESLint configuration as an extensible shared config using the new ESLint flat config format.

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
npm install --save-dev @wagtail/eslint-config-wagtail@latest eslint@latest eslint-config-prettier@latest eslint-import-resolver-typescript@latest eslint-plugin-import@latest eslint-plugin-jsx-a11y@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest typescript-eslint@latest
```

Then, import and use the config in your `eslint.config.js` file:

```js
import wagtailConfig from '@wagtail/eslint-config-wagtail';

export default [
  ...wagtailConfig,
  // Your custom config here
];
```

## Links

- [ESLint](https://eslint.org/)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [typescript-eslint](https://typescript-eslint.io/)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

## Code style

This ESLint config includes rules from:

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Import plugin recommended rules
- JSX A11y plugin recommended rules
- React plugin recommended rules
- React Hooks plugin recommended rules
- Prettier config (to disable conflicting rules)

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
- Note: When working with the rule set, only modify the `index.js` file, not the `.eslintrc` file as it is for local linting only

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                           | Severity | Config                                                            |
| -------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `@typescript-eslint/ban-ts-comment`                            | `2`      |                                                                   |
| `@typescript-eslint/no-array-constructor`                      | `2`      |                                                                   |
| `@typescript-eslint/no-duplicate-enum-values`                  | `2`      |                                                                   |
| `@typescript-eslint/no-empty-object-type`                      | `2`      |                                                                   |
| `@typescript-eslint/no-explicit-any`                           | `2`      |                                                                   |
| `@typescript-eslint/no-extra-non-null-assertion`               | `2`      |                                                                   |
| `@typescript-eslint/no-misused-new`                            | `2`      |                                                                   |
| `@typescript-eslint/no-namespace`                              | `2`      |                                                                   |
| `@typescript-eslint/no-non-null-asserted-optional-chain`       | `2`      |                                                                   |
| `@typescript-eslint/no-require-imports`                        | `2`      |                                                                   |
| `@typescript-eslint/no-this-alias`                             | `2`      |                                                                   |
| `@typescript-eslint/no-unnecessary-type-constraint`            | `2`      |                                                                   |
| `@typescript-eslint/no-unsafe-declaration-merging`             | `2`      |                                                                   |
| `@typescript-eslint/no-unsafe-function-type`                   | `2`      |                                                                   |
| `@typescript-eslint/no-unused-expressions`                     | `2`      | [see Config][config]                                              |
| `@typescript-eslint/no-unused-vars`                            | `2`      |                                                                   |
| `@typescript-eslint/no-wrapper-object-types`                   | `2`      |                                                                   |
| `@typescript-eslint/prefer-as-const`                           | `2`      |                                                                   |
| `@typescript-eslint/prefer-namespace-keyword`                  | `2`      |                                                                   |
| `@typescript-eslint/triple-slash-reference`                    | `2`      |                                                                   |
| [`constructor-super`][20]                                      | `2`      |                                                                   |
| [`for-direction`][21]                                          | `2`      |                                                                   |
| [`getter-return`][22]                                          | `2`      | `{"allowImplicit":false}`                                         |
| [`id-length`][23]                                              | `1`      | [see Config][config]                                              |
| [`import/default`][24]                                         | `2`      |                                                                   |
| [`import/export`][25]                                          | `2`      |                                                                   |
| [`import/named`][26]                                           | `2`      |                                                                   |
| [`import/namespace`][27]                                       | `2`      |                                                                   |
| [`import/no-duplicates`][28]                                   | `1`      |                                                                   |
| [`import/no-named-as-default`][29]                             | `1`      |                                                                   |
| [`import/no-named-as-default-member`][30]                      | `1`      |                                                                   |
| [`import/no-unresolved`][31]                                   | `2`      |                                                                   |
| [`jsx-a11y/alt-text`][32]                                      | `2`      |                                                                   |
| [`jsx-a11y/anchor-has-content`][33]                            | `2`      |                                                                   |
| [`jsx-a11y/anchor-is-valid`][34]                               | `2`      |                                                                   |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][35]            | `2`      |                                                                   |
| [`jsx-a11y/aria-props`][36]                                    | `2`      |                                                                   |
| [`jsx-a11y/aria-proptypes`][37]                                | `2`      |                                                                   |
| [`jsx-a11y/aria-role`][38]                                     | `2`      |                                                                   |
| [`jsx-a11y/aria-unsupported-elements`][39]                     | `2`      |                                                                   |
| [`jsx-a11y/autocomplete-valid`][40]                            | `2`      |                                                                   |
| [`jsx-a11y/click-events-have-key-events`][41]                  | `2`      |                                                                   |
| [`jsx-a11y/heading-has-content`][42]                           | `2`      |                                                                   |
| [`jsx-a11y/html-has-lang`][43]                                 | `2`      |                                                                   |
| [`jsx-a11y/iframe-has-title`][44]                              | `2`      |                                                                   |
| [`jsx-a11y/img-redundant-alt`][45]                             | `2`      |                                                                   |
| [`jsx-a11y/interactive-supports-focus`][46]                    | `2`      | [see Config][config]                                              |
| [`jsx-a11y/label-has-associated-control`][47]                  | `2`      |                                                                   |
| [`jsx-a11y/media-has-caption`][48]                             | `2`      |                                                                   |
| [`jsx-a11y/mouse-events-have-key-events`][49]                  | `2`      |                                                                   |
| [`jsx-a11y/no-access-key`][50]                                 | `2`      |                                                                   |
| [`jsx-a11y/no-autofocus`][51]                                  | `2`      |                                                                   |
| [`jsx-a11y/no-distracting-elements`][52]                       | `2`      |                                                                   |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][53] | `2`      | `{"tr":["none","presentation"],"canvas":["img"]}`                 |
| [`jsx-a11y/no-noninteractive-element-interactions`][54]        | `2`      | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][55] | `2`      | [see Config][config]                                              |
| [`jsx-a11y/no-noninteractive-tabindex`][56]                    | `2`      | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`   |
| [`jsx-a11y/no-redundant-roles`][57]                            | `2`      |                                                                   |
| [`jsx-a11y/no-static-element-interactions`][58]                | `2`      | [see Config][config]                                              |
| [`jsx-a11y/role-has-required-aria-props`][59]                  | `2`      |                                                                   |
| [`jsx-a11y/role-supports-aria-props`][60]                      | `2`      |                                                                   |
| [`jsx-a11y/scope`][61]                                         | `2`      |                                                                   |
| [`jsx-a11y/tabindex-no-positive`][62]                          | `2`      |                                                                   |
| [`no-async-promise-executor`][63]                              | `2`      |                                                                   |
| [`no-case-declarations`][64]                                   | `2`      |                                                                   |
| [`no-class-assign`][65]                                        | `2`      |                                                                   |
| [`no-compare-neg-zero`][66]                                    | `2`      |                                                                   |
| [`no-cond-assign`][67]                                         | `2`      | `"except-parens"`                                                 |
| [`no-const-assign`][68]                                        | `2`      |                                                                   |
| [`no-constant-binary-expression`][69]                          | `2`      |                                                                   |
| [`no-constant-condition`][70]                                  | `2`      | `{"checkLoops":"allExceptWhileTrue"}`                             |
| [`no-control-regex`][71]                                       | `2`      |                                                                   |
| [`no-debugger`][72]                                            | `2`      |                                                                   |
| [`no-delete-var`][73]                                          | `2`      |                                                                   |
| [`no-dupe-args`][74]                                           | `2`      |                                                                   |
| [`no-dupe-class-members`][75]                                  | `2`      |                                                                   |
| [`no-dupe-else-if`][76]                                        | `2`      |                                                                   |
| [`no-dupe-keys`][77]                                           | `2`      |                                                                   |
| [`no-duplicate-case`][78]                                      | `2`      |                                                                   |
| [`no-empty`][79]                                               | `2`      | `{"allowEmptyCatch":false}`                                       |
| [`no-empty-character-class`][80]                               | `2`      |                                                                   |
| [`no-empty-pattern`][81]                                       | `2`      | `{"allowObjectPatternsAsParameters":false}`                       |
| [`no-empty-static-block`][82]                                  | `2`      |                                                                   |
| [`no-ex-assign`][83]                                           | `2`      |                                                                   |
| [`no-extra-boolean-cast`][84]                                  | `2`      | `{}`                                                              |
| [`no-fallthrough`][85]                                         | `2`      | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}` |
| [`no-func-assign`][86]                                         | `2`      |                                                                   |
| [`no-global-assign`][87]                                       | `2`      | `{"exceptions":[]}`                                               |
| [`no-import-assign`][88]                                       | `2`      |                                                                   |
| [`no-invalid-regexp`][89]                                      | `2`      | `{}`                                                              |
| [`no-irregular-whitespace`][90]                                | `2`      | [see Config][config]                                              |
| [`no-loss-of-precision`][91]                                   | `2`      |                                                                   |
| [`no-misleading-character-class`][92]                          | `2`      | `{"allowEscape":false}`                                           |
| [`no-new`][93]                                                 | `1`      |                                                                   |
| [`no-new-native-nonconstructor`][94]                           | `2`      |                                                                   |
| [`no-nonoctal-decimal-escape`][95]                             | `2`      |                                                                   |
| [`no-obj-calls`][96]                                           | `2`      |                                                                   |
| [`no-octal`][97]                                               | `2`      |                                                                   |
| [`no-param-reassign`][98]                                      | `2`      | `{"props":false}`                                                 |
| [`no-prototype-builtins`][99]                                  | `2`      |                                                                   |
| [`no-redeclare`][100]                                          | `2`      | `{"builtinGlobals":true}`                                         |
| [`no-regex-spaces`][101]                                       | `2`      |                                                                   |
| [`no-restricted-syntax`][102]                                  | `2`      | [see Config][config]                                              |
| [`no-self-assign`][103]                                        | `2`      | `{"props":true}`                                                  |
| [`no-setter-return`][104]                                      | `2`      |                                                                   |
| [`no-shadow-restricted-names`][105]                            | `2`      | `{"reportGlobalThis":false}`                                      |
| [`no-sparse-arrays`][106]                                      | `2`      |                                                                   |
| [`no-this-before-super`][107]                                  | `2`      |                                                                   |
| [`no-undef`][108]                                              | `2`      | `{"typeof":false}`                                                |
| [`no-unreachable`][109]                                        | `2`      |                                                                   |
| [`no-unsafe-finally`][110]                                     | `2`      |                                                                   |
| [`no-unsafe-negation`][111]                                    | `2`      | `{"enforceForOrderingRelations":false}`                           |
| [`no-unsafe-optional-chaining`][112]                           | `2`      | `{"disallowArithmeticOperators":false}`                           |
| [`no-unused-labels`][113]                                      | `2`      |                                                                   |
| [`no-unused-private-class-members`][114]                       | `2`      |                                                                   |
| [`no-useless-backreference`][115]                              | `2`      |                                                                   |
| [`no-useless-catch`][116]                                      | `2`      |                                                                   |
| [`no-useless-escape`][117]                                     | `2`      | `{"allowRegexCharacters":[]}`                                     |
| [`no-with`][118]                                               | `2`      |                                                                   |
| [`object-shorthand`][119]                                      | `2`      | `"methods"`                                                       |
| [`react-hooks/exhaustive-deps`][120]                           | `1`      |                                                                   |
| [`react-hooks/rules-of-hooks`][121]                            | `2`      |                                                                   |
| [`react/display-name`][122]                                    | `2`      |                                                                   |
| [`react/jsx-key`][123]                                         | `2`      |                                                                   |
| [`react/jsx-no-comment-textnodes`][124]                        | `2`      |                                                                   |
| [`react/jsx-no-duplicate-props`][125]                          | `2`      |                                                                   |
| [`react/jsx-no-target-blank`][126]                             | `2`      |                                                                   |
| [`react/jsx-no-undef`][127]                                    | `2`      |                                                                   |
| [`react/jsx-uses-react`][128]                                  | `2`      |                                                                   |
| [`react/jsx-uses-vars`][129]                                   | `2`      |                                                                   |
| [`react/no-children-prop`][130]                                | `2`      |                                                                   |
| [`react/no-danger-with-children`][131]                         | `2`      |                                                                   |
| [`react/no-deprecated`][132]                                   | `2`      |                                                                   |
| [`react/no-direct-mutation-state`][133]                        | `2`      |                                                                   |
| [`react/no-find-dom-node`][134]                                | `2`      |                                                                   |
| [`react/no-is-mounted`][135]                                   | `2`      |                                                                   |
| [`react/no-render-return-value`][136]                          | `2`      |                                                                   |
| [`react/no-string-refs`][137]                                  | `2`      |                                                                   |
| [`react/no-unescaped-entities`][138]                           | `2`      |                                                                   |
| [`react/no-unknown-property`][139]                             | `2`      |                                                                   |
| [`react/react-in-jsx-scope`][140]                              | `2`      |                                                                   |
| [`react/require-render-return`][141]                           | `2`      |                                                                   |
| [`require-yield`][142]                                         | `2`      |                                                                   |
| [`use-isnan`][143]                                             | `2`      | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`         |
| [`valid-typeof`][144]                                          | `2`      | `{"requireStringLiterals":false}`                                 |

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
[20]: https://eslint.org/docs/latest/rules/constructor-super
[21]: https://eslint.org/docs/latest/rules/for-direction
[22]: https://eslint.org/docs/latest/rules/getter-return
[23]: https://eslint.org/docs/latest/rules/id-length
[24]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
[25]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
[26]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
[27]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
[28]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
[29]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
[30]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
[31]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
[32]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[33]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[34]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[35]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[36]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[37]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[38]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[39]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[40]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[41]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[42]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[43]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[44]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[45]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[46]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[47]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[48]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[49]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[50]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[51]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[52]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[53]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[54]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[55]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[56]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[57]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[58]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[59]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[60]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[61]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[62]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[63]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[64]: https://eslint.org/docs/latest/rules/no-case-declarations
[65]: https://eslint.org/docs/latest/rules/no-class-assign
[66]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[67]: https://eslint.org/docs/latest/rules/no-cond-assign
[68]: https://eslint.org/docs/latest/rules/no-const-assign
[69]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[70]: https://eslint.org/docs/latest/rules/no-constant-condition
[71]: https://eslint.org/docs/latest/rules/no-control-regex
[72]: https://eslint.org/docs/latest/rules/no-debugger
[73]: https://eslint.org/docs/latest/rules/no-delete-var
[74]: https://eslint.org/docs/latest/rules/no-dupe-args
[75]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[76]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[77]: https://eslint.org/docs/latest/rules/no-dupe-keys
[78]: https://eslint.org/docs/latest/rules/no-duplicate-case
[79]: https://eslint.org/docs/latest/rules/no-empty
[80]: https://eslint.org/docs/latest/rules/no-empty-character-class
[81]: https://eslint.org/docs/latest/rules/no-empty-pattern
[82]: https://eslint.org/docs/latest/rules/no-empty-static-block
[83]: https://eslint.org/docs/latest/rules/no-ex-assign
[84]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[85]: https://eslint.org/docs/latest/rules/no-fallthrough
[86]: https://eslint.org/docs/latest/rules/no-func-assign
[87]: https://eslint.org/docs/latest/rules/no-global-assign
[88]: https://eslint.org/docs/latest/rules/no-import-assign
[89]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[90]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[91]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[92]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[93]: https://eslint.org/docs/latest/rules/no-new
[94]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[95]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[96]: https://eslint.org/docs/latest/rules/no-obj-calls
[97]: https://eslint.org/docs/latest/rules/no-octal
[98]: https://eslint.org/docs/latest/rules/no-param-reassign
[99]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[100]: https://eslint.org/docs/latest/rules/no-redeclare
[101]: https://eslint.org/docs/latest/rules/no-regex-spaces
[102]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[103]: https://eslint.org/docs/latest/rules/no-self-assign
[104]: https://eslint.org/docs/latest/rules/no-setter-return
[105]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[106]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[107]: https://eslint.org/docs/latest/rules/no-this-before-super
[108]: https://eslint.org/docs/latest/rules/no-undef
[109]: https://eslint.org/docs/latest/rules/no-unreachable
[110]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[111]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[112]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[113]: https://eslint.org/docs/latest/rules/no-unused-labels
[114]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[115]: https://eslint.org/docs/latest/rules/no-useless-backreference
[116]: https://eslint.org/docs/latest/rules/no-useless-catch
[117]: https://eslint.org/docs/latest/rules/no-useless-escape
[118]: https://eslint.org/docs/latest/rules/no-with
[119]: https://eslint.org/docs/latest/rules/object-shorthand
[120]: https://legacy.reactjs.org/docs/hooks-rules.html
[121]: https://legacy.reactjs.org/docs/hooks-rules.html
[122]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[123]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[124]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[125]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[126]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[127]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[128]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[129]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[130]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[131]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[132]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[133]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[134]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[135]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[136]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[137]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[138]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[139]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[140]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[141]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[142]: https://eslint.org/docs/latest/rules/require-yield
[143]: https://eslint.org/docs/latest/rules/use-isnan
[144]: https://eslint.org/docs/latest/rules/valid-typeof
