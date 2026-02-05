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

| Rule                                                           | Severity | Config                                                                    |
| -------------------------------------------------------------- | -------- | ------------------------------------------------------------------------- |
| [`@typescript-eslint/adjacent-overload-signatures`][0]         | `2`      |                                                                           |
| [`@typescript-eslint/array-type`][1]                           | `2`      |                                                                           |
| [`@typescript-eslint/ban-ts-comment`][2]                       | `2`      |                                                                           |
| [`@typescript-eslint/ban-tslint-comment`][3]                   | `2`      |                                                                           |
| [`@typescript-eslint/class-literal-property-style`][4]         | `2`      |                                                                           |
| [`@typescript-eslint/consistent-generic-constructors`][5]      | `2`      |                                                                           |
| [`@typescript-eslint/consistent-indexed-object-style`][6]      | `2`      |                                                                           |
| [`@typescript-eslint/consistent-type-assertions`][7]           | `2`      |                                                                           |
| [`@typescript-eslint/consistent-type-definitions`][8]          | `2`      |                                                                           |
| [`@typescript-eslint/no-array-constructor`][9]                 | `2`      |                                                                           |
| [`@typescript-eslint/no-confusing-non-null-assertion`][10]     | `2`      |                                                                           |
| [`@typescript-eslint/no-duplicate-enum-values`][11]            | `2`      |                                                                           |
| [`@typescript-eslint/no-empty-function`][12]                   | `2`      | `{"allow":[]}`                                                            |
| [`@typescript-eslint/no-empty-object-type`][13]                | `2`      |                                                                           |
| [`@typescript-eslint/no-explicit-any`][14]                     | `2`      |                                                                           |
| [`@typescript-eslint/no-extra-non-null-assertion`][15]         | `2`      |                                                                           |
| [`@typescript-eslint/no-inferrable-types`][16]                 | `2`      |                                                                           |
| [`@typescript-eslint/no-misused-new`][17]                      | `2`      |                                                                           |
| [`@typescript-eslint/no-namespace`][18]                        | `2`      |                                                                           |
| [`@typescript-eslint/no-non-null-asserted-optional-chain`][19] | `2`      |                                                                           |
| [`@typescript-eslint/no-require-imports`][20]                  | `2`      |                                                                           |
| [`@typescript-eslint/no-this-alias`][21]                       | `2`      |                                                                           |
| [`@typescript-eslint/no-unnecessary-type-constraint`][22]      | `2`      |                                                                           |
| [`@typescript-eslint/no-unsafe-declaration-merging`][23]       | `2`      |                                                                           |
| [`@typescript-eslint/no-unsafe-function-type`][24]             | `2`      |                                                                           |
| [`@typescript-eslint/no-unused-expressions`][25]               | `2`      | [see Config][config]                                                      |
| [`@typescript-eslint/no-unused-vars`][26]                      | `2`      |                                                                           |
| [`@typescript-eslint/no-wrapper-object-types`][27]             | `2`      |                                                                           |
| [`@typescript-eslint/prefer-as-const`][28]                     | `2`      |                                                                           |
| [`@typescript-eslint/prefer-for-of`][29]                       | `2`      |                                                                           |
| [`@typescript-eslint/prefer-function-type`][30]                | `2`      |                                                                           |
| [`@typescript-eslint/prefer-namespace-keyword`][31]            | `2`      |                                                                           |
| [`@typescript-eslint/triple-slash-reference`][32]              | `2`      |                                                                           |
| [`array-callback-return`][33]                                  | `2`      | `{"allowImplicit":true,"checkForEach":false,"allowVoid":false}`           |
| [`arrow-body-style`][34]                                       | `2`      | `"as-needed"`                                                             |
| [`block-scoped-var`][35]                                       | `2`      |                                                                           |
| [`camelcase`][36]                                              | `2`      | [see Config][config]                                                      |
| [`consistent-return`][37]                                      | `2`      | `{"treatUndefinedAsUnspecified":false}`                                   |
| [`constructor-super`][38]                                      | `2`      |                                                                           |
| [`default-case`][39]                                           | `2`      | `{"commentPattern":"^no default$"}`                                       |
| [`default-case-last`][40]                                      | `2`      |                                                                           |
| [`default-param-last`][41]                                     | `2`      |                                                                           |
| [`dot-notation`][42]                                           | `2`      | `{"allowKeywords":true,"allowPattern":""}`                                |
| [`eqeqeq`][43]                                                 | `2`      | `"always", {"null":"ignore"}`                                             |
| [`for-direction`][44]                                          | `2`      |                                                                           |
| [`func-names`][45]                                             | `1`      | `"always", {}`                                                            |
| [`getter-return`][46]                                          | `2`      | `{"allowImplicit":true}`                                                  |
| [`guard-for-in`][47]                                           | `2`      |                                                                           |
| [`id-length`][48]                                              | `1`      | [see Config][config]                                                      |
| [`import-x/default`][49]                                       | `2`      |                                                                           |
| [`import-x/export`][50]                                        | `2`      |                                                                           |
| [`import-x/first`][51]                                         | `2`      |                                                                           |
| [`import-x/namespace`][52]                                     | `2`      |                                                                           |
| [`import-x/newline-after-import`][53]                          | `2`      |                                                                           |
| [`import-x/no-absolute-path`][54]                              | `2`      |                                                                           |
| [`import-x/no-amd`][55]                                        | `2`      |                                                                           |
| [`import-x/no-duplicates`][56]                                 | `1`      |                                                                           |
| [`import-x/no-extraneous-dependencies`][57]                    | `2`      |                                                                           |
| [`import-x/no-mutable-exports`][58]                            | `2`      |                                                                           |
| [`import-x/no-named-as-default`][59]                           | `1`      |                                                                           |
| [`import-x/no-named-as-default-member`][60]                    | `1`      |                                                                           |
| [`import-x/no-named-default`][61]                              | `2`      |                                                                           |
| [`import-x/no-unresolved`][62]                                 | `2`      |                                                                           |
| [`import-x/no-useless-path-segments`][63]                      | `2`      |                                                                           |
| [`import-x/no-webpack-loader-syntax`][64]                      | `2`      |                                                                           |
| [`import-x/order`][65]                                         | `2`      |                                                                           |
| [`jsx-a11y/alt-text`][66]                                      | `2`      |                                                                           |
| [`jsx-a11y/anchor-has-content`][67]                            | `2`      |                                                                           |
| [`jsx-a11y/anchor-is-valid`][68]                               | `2`      |                                                                           |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][69]            | `2`      |                                                                           |
| [`jsx-a11y/aria-props`][70]                                    | `2`      |                                                                           |
| [`jsx-a11y/aria-proptypes`][71]                                | `2`      |                                                                           |
| [`jsx-a11y/aria-role`][72]                                     | `2`      |                                                                           |
| [`jsx-a11y/aria-unsupported-elements`][73]                     | `2`      |                                                                           |
| [`jsx-a11y/autocomplete-valid`][74]                            | `2`      |                                                                           |
| [`jsx-a11y/click-events-have-key-events`][75]                  | `2`      |                                                                           |
| [`jsx-a11y/control-has-associated-label`][76]                  | `2`      | [see Config][config]                                                      |
| [`jsx-a11y/heading-has-content`][77]                           | `2`      |                                                                           |
| [`jsx-a11y/html-has-lang`][78]                                 | `2`      |                                                                           |
| [`jsx-a11y/iframe-has-title`][79]                              | `2`      |                                                                           |
| [`jsx-a11y/img-redundant-alt`][80]                             | `2`      |                                                                           |
| [`jsx-a11y/interactive-supports-focus`][81]                    | `2`      | [see Config][config]                                                      |
| [`jsx-a11y/label-has-associated-control`][82]                  | `2`      |                                                                           |
| [`jsx-a11y/lang`][83]                                          | `2`      |                                                                           |
| [`jsx-a11y/media-has-caption`][84]                             | `2`      |                                                                           |
| [`jsx-a11y/mouse-events-have-key-events`][85]                  | `2`      |                                                                           |
| [`jsx-a11y/no-access-key`][86]                                 | `2`      |                                                                           |
| [`jsx-a11y/no-autofocus`][87]                                  | `2`      |                                                                           |
| [`jsx-a11y/no-distracting-elements`][88]                       | `2`      |                                                                           |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][89] | `2`      | `{"tr":["none","presentation"],"canvas":["img"]}`                         |
| [`jsx-a11y/no-noninteractive-element-interactions`][90]        | `2`      | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][91] | `2`      | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-tabindex`][92]                    | `2`      | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`           |
| [`jsx-a11y/no-redundant-roles`][93]                            | `2`      |                                                                           |
| [`jsx-a11y/no-static-element-interactions`][94]                | `2`      | [see Config][config]                                                      |
| [`jsx-a11y/role-has-required-aria-props`][95]                  | `2`      |                                                                           |
| [`jsx-a11y/role-supports-aria-props`][96]                      | `2`      |                                                                           |
| [`jsx-a11y/scope`][97]                                         | `2`      |                                                                           |
| [`jsx-a11y/tabindex-no-positive`][98]                          | `2`      |                                                                           |
| [`lines-between-class-members`][99]                            | `2`      | `"always", {"exceptAfterSingleLine":false}`                               |
| [`new-cap`][100]                                               | `2`      | [see Config][config]                                                      |
| [`no-alert`][101]                                              | `1`      |                                                                           |
| [`no-async-promise-executor`][102]                             | `2`      |                                                                           |
| [`no-await-in-loop`][103]                                      | `2`      |                                                                           |
| [`no-bitwise`][104]                                            | `2`      | `{"allow":[],"int32Hint":false}`                                          |
| [`no-caller`][105]                                             | `2`      |                                                                           |
| [`no-case-declarations`][106]                                  | `2`      |                                                                           |
| [`no-class-assign`][107]                                       | `2`      |                                                                           |
| [`no-compare-neg-zero`][108]                                   | `2`      |                                                                           |
| [`no-cond-assign`][109]                                        | `2`      | `"always"`                                                                |
| [`no-console`][110]                                            | `1`      | `{}`                                                                      |
| [`no-const-assign`][111]                                       | `2`      |                                                                           |
| [`no-constant-binary-expression`][112]                         | `2`      |                                                                           |
| [`no-constant-condition`][113]                                 | `2`      | `{"checkLoops":"allExceptWhileTrue"}`                                     |
| [`no-constructor-return`][114]                                 | `2`      |                                                                           |
| [`no-control-regex`][115]                                      | `2`      |                                                                           |
| [`no-debugger`][116]                                           | `2`      |                                                                           |
| [`no-delete-var`][117]                                         | `2`      |                                                                           |
| [`no-dupe-args`][118]                                          | `2`      |                                                                           |
| [`no-dupe-class-members`][119]                                 | `2`      |                                                                           |
| [`no-dupe-else-if`][120]                                       | `2`      |                                                                           |
| [`no-dupe-keys`][121]                                          | `2`      |                                                                           |
| [`no-duplicate-case`][122]                                     | `2`      |                                                                           |
| [`no-else-return`][123]                                        | `2`      | `{"allowElseIf":false}`                                                   |
| [`no-empty`][124]                                              | `2`      | `{"allowEmptyCatch":false}`                                               |
| [`no-empty-character-class`][125]                              | `2`      |                                                                           |
| [`no-empty-pattern`][126]                                      | `2`      | `{"allowObjectPatternsAsParameters":false}`                               |
| [`no-empty-static-block`][127]                                 | `2`      |                                                                           |
| [`no-eval`][128]                                               | `2`      | `{"allowIndirect":false}`                                                 |
| [`no-ex-assign`][129]                                          | `2`      |                                                                           |
| [`no-extend-native`][130]                                      | `2`      | `{"exceptions":[]}`                                                       |
| [`no-extra-bind`][131]                                         | `2`      |                                                                           |
| [`no-extra-boolean-cast`][132]                                 | `2`      | `{}`                                                                      |
| [`no-extra-label`][133]                                        | `2`      |                                                                           |
| [`no-fallthrough`][134]                                        | `2`      | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}`         |
| [`no-func-assign`][135]                                        | `2`      |                                                                           |
| [`no-global-assign`][136]                                      | `2`      | `{"exceptions":[]}`                                                       |
| [`no-implied-eval`][137]                                       | `2`      |                                                                           |
| [`no-import-assign`][138]                                      | `2`      |                                                                           |
| [`no-invalid-regexp`][139]                                     | `2`      | `{}`                                                                      |
| [`no-irregular-whitespace`][140]                               | `2`      | [see Config][config]                                                      |
| [`no-iterator`][141]                                           | `2`      |                                                                           |
| [`no-label-var`][142]                                          | `2`      |                                                                           |
| [`no-labels`][143]                                             | `2`      | `{"allowLoop":false,"allowSwitch":false}`                                 |
| [`no-lone-blocks`][144]                                        | `2`      |                                                                           |
| [`no-lonely-if`][145]                                          | `2`      |                                                                           |
| [`no-loop-func`][146]                                          | `2`      |                                                                           |
| [`no-loss-of-precision`][147]                                  | `2`      |                                                                           |
| [`no-misleading-character-class`][148]                         | `2`      | `{"allowEscape":false}`                                                   |
| [`no-multi-assign`][149]                                       | `2`      | `{"ignoreNonDeclaration":false}`                                          |
| [`no-multi-str`][150]                                          | `2`      |                                                                           |
| [`no-nested-ternary`][151]                                     | `2`      |                                                                           |
| [`no-new`][152]                                                | `1`      |                                                                           |
| [`no-new-func`][153]                                           | `2`      |                                                                           |
| [`no-new-native-nonconstructor`][154]                          | `2`      |                                                                           |
| [`no-new-object`][155]                                         | `2`      |                                                                           |
| [`no-new-wrappers`][156]                                       | `2`      |                                                                           |
| [`no-nonoctal-decimal-escape`][157]                            | `2`      |                                                                           |
| [`no-obj-calls`][158]                                          | `2`      |                                                                           |
| [`no-octal`][159]                                              | `2`      |                                                                           |
| [`no-octal-escape`][160]                                       | `2`      |                                                                           |
| [`no-param-reassign`][161]                                     | `2`      | `{"props":false}`                                                         |
| [`no-path-concat`][162]                                        | `2`      |                                                                           |
| [`no-promise-executor-return`][163]                            | `2`      | `{"allowVoid":false}`                                                     |
| [`no-proto`][164]                                              | `2`      |                                                                           |
| [`no-prototype-builtins`][165]                                 | `2`      |                                                                           |
| [`no-redeclare`][166]                                          | `2`      | `{"builtinGlobals":true}`                                                 |
| [`no-regex-spaces`][167]                                       | `2`      |                                                                           |
| [`no-restricted-exports`][168]                                 | `2`      | `{"restrictedNamedExports":["default","then"]}`                           |
| [`no-restricted-globals`][169]                                 | `2`      | `"isFinite", "isNaN"`                                                     |
| [`no-restricted-syntax`][170]                                  | `2`      | [see Config][config]                                                      |
| [`no-return-assign`][171]                                      | `2`      | `"always"`                                                                |
| [`no-script-url`][172]                                         | `2`      |                                                                           |
| [`no-self-assign`][173]                                        | `2`      | `{"props":true}`                                                          |
| [`no-self-compare`][174]                                       | `2`      |                                                                           |
| [`no-sequences`][175]                                          | `2`      | `{"allowInParentheses":true}`                                             |
| [`no-setter-return`][176]                                      | `2`      |                                                                           |
| [`no-shadow-restricted-names`][177]                            | `2`      | `{"reportGlobalThis":false}`                                              |
| [`no-sparse-arrays`][178]                                      | `2`      |                                                                           |
| [`no-template-curly-in-string`][179]                           | `2`      |                                                                           |
| [`no-this-before-super`][180]                                  | `2`      |                                                                           |
| [`no-undef`][181]                                              | `2`      | `{"typeof":false}`                                                        |
| [`no-undef-init`][182]                                         | `2`      |                                                                           |
| [`no-unneeded-ternary`][183]                                   | `2`      | `{"defaultAssignment":false}`                                             |
| [`no-unreachable`][184]                                        | `2`      |                                                                           |
| [`no-unreachable-loop`][185]                                   | `2`      | `{"ignore":[]}`                                                           |
| [`no-unsafe-finally`][186]                                     | `2`      |                                                                           |
| [`no-unsafe-negation`][187]                                    | `2`      | `{"enforceForOrderingRelations":false}`                                   |
| [`no-unsafe-optional-chaining`][188]                           | `2`      | `{"disallowArithmeticOperators":false}`                                   |
| [`no-unused-labels`][189]                                      | `2`      |                                                                           |
| [`no-unused-private-class-members`][190]                       | `2`      |                                                                           |
| [`no-useless-backreference`][191]                              | `2`      |                                                                           |
| [`no-useless-catch`][192]                                      | `2`      |                                                                           |
| [`no-useless-computed-key`][193]                               | `2`      | `{"enforceForClassMembers":true}`                                         |
| [`no-useless-concat`][194]                                     | `2`      |                                                                           |
| [`no-useless-escape`][195]                                     | `2`      | `{"allowRegexCharacters":[]}`                                             |
| [`no-useless-rename`][196]                                     | `2`      | `{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}` |
| [`no-useless-return`][197]                                     | `2`      |                                                                           |
| [`no-with`][198]                                               | `2`      |                                                                           |
| [`object-shorthand`][199]                                      | `2`      | `"methods"`                                                               |
| [`one-var`][200]                                               | `2`      | `"never"`                                                                 |
| [`operator-assignment`][201]                                   | `2`      | `"always"`                                                                |
| [`prefer-arrow-callback`][202]                                 | `2`      | `{"allowNamedFunctions":false,"allowUnboundThis":true}`                   |
| [`prefer-const`][203]                                          | `2`      | `{"destructuring":"any","ignoreReadBeforeAssign":false}`                  |
| [`prefer-destructuring`][204]                                  | `2`      | [see Config][config]                                                      |
| [`prefer-exponentiation-operator`][205]                        | `2`      |                                                                           |
| [`prefer-numeric-literals`][206]                               | `2`      |                                                                           |
| [`prefer-object-spread`][207]                                  | `2`      |                                                                           |
| [`prefer-promise-reject-errors`][208]                          | `2`      | `{"allowEmptyReject":true}`                                               |
| [`prefer-regex-literals`][209]                                 | `2`      | `{"disallowRedundantWrapping":false}`                                     |
| [`prefer-rest-params`][210]                                    | `2`      |                                                                           |
| [`prefer-spread`][211]                                         | `2`      |                                                                           |
| [`radix`][212]                                                 | `2`      | `"always"`                                                                |
| [`react-hooks/component-hook-factories`][213]                  | `2`      |                                                                           |
| [`react-hooks/config`][214]                                    | `2`      |                                                                           |
| [`react-hooks/error-boundaries`][215]                          | `2`      |                                                                           |
| [`react-hooks/exhaustive-deps`][216]                           | `1`      |                                                                           |
| [`react-hooks/gating`][217]                                    | `2`      |                                                                           |
| [`react-hooks/globals`][218]                                   | `2`      |                                                                           |
| [`react-hooks/immutability`][219]                              | `2`      |                                                                           |
| [`react-hooks/incompatible-library`][220]                      | `1`      |                                                                           |
| [`react-hooks/preserve-manual-memoization`][221]               | `2`      |                                                                           |
| [`react-hooks/purity`][222]                                    | `2`      |                                                                           |
| [`react-hooks/refs`][223]                                      | `2`      |                                                                           |
| [`react-hooks/rules-of-hooks`][224]                            | `2`      |                                                                           |
| [`react-hooks/set-state-in-effect`][225]                       | `2`      |                                                                           |
| [`react-hooks/set-state-in-render`][226]                       | `2`      |                                                                           |
| [`react-hooks/static-components`][227]                         | `2`      |                                                                           |
| [`react-hooks/unsupported-syntax`][228]                        | `1`      |                                                                           |
| [`react-hooks/use-memo`][229]                                  | `2`      |                                                                           |
| [`react/button-has-type`][230]                                 | `2`      |                                                                           |
| [`react/display-name`][231]                                    | `2`      |                                                                           |
| [`react/jsx-curly-brace-presence`][232]                        | `2`      | `{"props":"never","children":"never"}`                                    |
| [`react/jsx-fragments`][233]                                   | `2`      |                                                                           |
| [`react/jsx-key`][234]                                         | `2`      |                                                                           |
| [`react/jsx-no-comment-textnodes`][235]                        | `2`      |                                                                           |
| [`react/jsx-no-constructed-context-values`][236]               | `2`      |                                                                           |
| [`react/jsx-no-duplicate-props`][237]                          | `2`      |                                                                           |
| [`react/jsx-no-script-url`][238]                               | `2`      |                                                                           |
| [`react/jsx-no-target-blank`][239]                             | `2`      |                                                                           |
| [`react/jsx-no-undef`][240]                                    | `2`      |                                                                           |
| [`react/jsx-no-useless-fragment`][241]                         | `2`      |                                                                           |
| [`react/jsx-pascal-case`][242]                                 | `2`      |                                                                           |
| [`react/jsx-uses-react`][243]                                  | `2`      |                                                                           |
| [`react/jsx-uses-vars`][244]                                   | `2`      |                                                                           |
| [`react/no-access-state-in-setstate`][245]                     | `2`      |                                                                           |
| [`react/no-array-index-key`][246]                              | `2`      |                                                                           |
| [`react/no-children-prop`][247]                                | `2`      |                                                                           |
| [`react/no-danger`][248]                                       | `1`      |                                                                           |
| [`react/no-danger-with-children`][249]                         | `2`      |                                                                           |
| [`react/no-deprecated`][250]                                   | `2`      |                                                                           |
| [`react/no-direct-mutation-state`][251]                        | `2`      |                                                                           |
| [`react/no-find-dom-node`][252]                                | `2`      |                                                                           |
| [`react/no-is-mounted`][253]                                   | `2`      |                                                                           |
| [`react/no-redundant-should-component-update`][254]            | `2`      |                                                                           |
| [`react/no-render-return-value`][255]                          | `2`      |                                                                           |
| [`react/no-string-refs`][256]                                  | `2`      |                                                                           |
| [`react/no-this-in-sfc`][257]                                  | `2`      |                                                                           |
| [`react/no-typos`][258]                                        | `2`      |                                                                           |
| [`react/no-unescaped-entities`][259]                           | `2`      |                                                                           |
| [`react/no-unknown-property`][260]                             | `2`      |                                                                           |
| [`react/react-in-jsx-scope`][261]                              | `2`      |                                                                           |
| [`react/require-render-return`][262]                           | `2`      |                                                                           |
| [`react/self-closing-comp`][263]                               | `2`      |                                                                           |
| [`react/style-prop-object`][264]                               | `2`      |                                                                           |
| [`react/void-dom-elements-no-children`][265]                   | `2`      |                                                                           |
| [`require-yield`][266]                                         | `2`      |                                                                           |
| [`spaced-comment`][267]                                        | `2`      | `"always"`                                                                |
| [`strict`][268]                                                | `2`      | `"never"`                                                                 |
| [`symbol-description`][269]                                    | `2`      |                                                                           |
| [`unicode-bom`][270]                                           | `2`      | `"never"`                                                                 |
| [`use-isnan`][271]                                             | `2`      | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`                 |
| [`valid-typeof`][272]                                          | `2`      | `{"requireStringLiterals":false}`                                         |
| [`vars-on-top`][273]                                           | `2`      |                                                                           |
| [`yoda`][274]                                                  | `2`      | `"never", {"exceptRange":false,"onlyEquality":false}`                     |

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
[33]: https://eslint.org/docs/latest/rules/array-callback-return
[34]: https://eslint.org/docs/latest/rules/arrow-body-style
[35]: https://eslint.org/docs/latest/rules/block-scoped-var
[36]: https://eslint.org/docs/latest/rules/camelcase
[37]: https://eslint.org/docs/latest/rules/consistent-return
[38]: https://eslint.org/docs/latest/rules/constructor-super
[39]: https://eslint.org/docs/latest/rules/default-case
[40]: https://eslint.org/docs/latest/rules/default-case-last
[41]: https://eslint.org/docs/latest/rules/default-param-last
[42]: https://eslint.org/docs/latest/rules/dot-notation
[43]: https://eslint.org/docs/latest/rules/eqeqeq
[44]: https://eslint.org/docs/latest/rules/for-direction
[45]: https://eslint.org/docs/latest/rules/func-names
[46]: https://eslint.org/docs/latest/rules/getter-return
[47]: https://eslint.org/docs/latest/rules/guard-for-in
[48]: https://eslint.org/docs/latest/rules/id-length
[49]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
[50]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
[51]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
[52]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
[53]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
[54]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
[55]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
[56]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
[57]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
[58]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
[59]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
[60]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
[61]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
[62]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
[63]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
[64]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
[65]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
[66]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[67]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[68]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[69]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[70]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[71]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[72]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[73]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[74]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[75]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[76]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
[77]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[78]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[79]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[80]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[81]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[82]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[83]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
[84]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[85]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[86]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[87]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[88]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[89]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[90]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[91]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[92]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[93]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[94]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[95]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[96]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[97]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[98]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[99]: https://eslint.org/docs/latest/rules/lines-between-class-members
[100]: https://eslint.org/docs/latest/rules/new-cap
[101]: https://eslint.org/docs/latest/rules/no-alert
[102]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[103]: https://eslint.org/docs/latest/rules/no-await-in-loop
[104]: https://eslint.org/docs/latest/rules/no-bitwise
[105]: https://eslint.org/docs/latest/rules/no-caller
[106]: https://eslint.org/docs/latest/rules/no-case-declarations
[107]: https://eslint.org/docs/latest/rules/no-class-assign
[108]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[109]: https://eslint.org/docs/latest/rules/no-cond-assign
[110]: https://eslint.org/docs/latest/rules/no-console
[111]: https://eslint.org/docs/latest/rules/no-const-assign
[112]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[113]: https://eslint.org/docs/latest/rules/no-constant-condition
[114]: https://eslint.org/docs/latest/rules/no-constructor-return
[115]: https://eslint.org/docs/latest/rules/no-control-regex
[116]: https://eslint.org/docs/latest/rules/no-debugger
[117]: https://eslint.org/docs/latest/rules/no-delete-var
[118]: https://eslint.org/docs/latest/rules/no-dupe-args
[119]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[120]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[121]: https://eslint.org/docs/latest/rules/no-dupe-keys
[122]: https://eslint.org/docs/latest/rules/no-duplicate-case
[123]: https://eslint.org/docs/latest/rules/no-else-return
[124]: https://eslint.org/docs/latest/rules/no-empty
[125]: https://eslint.org/docs/latest/rules/no-empty-character-class
[126]: https://eslint.org/docs/latest/rules/no-empty-pattern
[127]: https://eslint.org/docs/latest/rules/no-empty-static-block
[128]: https://eslint.org/docs/latest/rules/no-eval
[129]: https://eslint.org/docs/latest/rules/no-ex-assign
[130]: https://eslint.org/docs/latest/rules/no-extend-native
[131]: https://eslint.org/docs/latest/rules/no-extra-bind
[132]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[133]: https://eslint.org/docs/latest/rules/no-extra-label
[134]: https://eslint.org/docs/latest/rules/no-fallthrough
[135]: https://eslint.org/docs/latest/rules/no-func-assign
[136]: https://eslint.org/docs/latest/rules/no-global-assign
[137]: https://eslint.org/docs/latest/rules/no-implied-eval
[138]: https://eslint.org/docs/latest/rules/no-import-assign
[139]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[140]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[141]: https://eslint.org/docs/latest/rules/no-iterator
[142]: https://eslint.org/docs/latest/rules/no-label-var
[143]: https://eslint.org/docs/latest/rules/no-labels
[144]: https://eslint.org/docs/latest/rules/no-lone-blocks
[145]: https://eslint.org/docs/latest/rules/no-lonely-if
[146]: https://eslint.org/docs/latest/rules/no-loop-func
[147]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[148]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[149]: https://eslint.org/docs/latest/rules/no-multi-assign
[150]: https://eslint.org/docs/latest/rules/no-multi-str
[151]: https://eslint.org/docs/latest/rules/no-nested-ternary
[152]: https://eslint.org/docs/latest/rules/no-new
[153]: https://eslint.org/docs/latest/rules/no-new-func
[154]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[155]: https://eslint.org/docs/latest/rules/no-new-object
[156]: https://eslint.org/docs/latest/rules/no-new-wrappers
[157]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[158]: https://eslint.org/docs/latest/rules/no-obj-calls
[159]: https://eslint.org/docs/latest/rules/no-octal
[160]: https://eslint.org/docs/latest/rules/no-octal-escape
[161]: https://eslint.org/docs/latest/rules/no-param-reassign
[162]: https://eslint.org/docs/latest/rules/no-path-concat
[163]: https://eslint.org/docs/latest/rules/no-promise-executor-return
[164]: https://eslint.org/docs/latest/rules/no-proto
[165]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[166]: https://eslint.org/docs/latest/rules/no-redeclare
[167]: https://eslint.org/docs/latest/rules/no-regex-spaces
[168]: https://eslint.org/docs/latest/rules/no-restricted-exports
[169]: https://eslint.org/docs/latest/rules/no-restricted-globals
[170]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[171]: https://eslint.org/docs/latest/rules/no-return-assign
[172]: https://eslint.org/docs/latest/rules/no-script-url
[173]: https://eslint.org/docs/latest/rules/no-self-assign
[174]: https://eslint.org/docs/latest/rules/no-self-compare
[175]: https://eslint.org/docs/latest/rules/no-sequences
[176]: https://eslint.org/docs/latest/rules/no-setter-return
[177]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[178]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[179]: https://eslint.org/docs/latest/rules/no-template-curly-in-string
[180]: https://eslint.org/docs/latest/rules/no-this-before-super
[181]: https://eslint.org/docs/latest/rules/no-undef
[182]: https://eslint.org/docs/latest/rules/no-undef-init
[183]: https://eslint.org/docs/latest/rules/no-unneeded-ternary
[184]: https://eslint.org/docs/latest/rules/no-unreachable
[185]: https://eslint.org/docs/latest/rules/no-unreachable-loop
[186]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[187]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[188]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[189]: https://eslint.org/docs/latest/rules/no-unused-labels
[190]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[191]: https://eslint.org/docs/latest/rules/no-useless-backreference
[192]: https://eslint.org/docs/latest/rules/no-useless-catch
[193]: https://eslint.org/docs/latest/rules/no-useless-computed-key
[194]: https://eslint.org/docs/latest/rules/no-useless-concat
[195]: https://eslint.org/docs/latest/rules/no-useless-escape
[196]: https://eslint.org/docs/latest/rules/no-useless-rename
[197]: https://eslint.org/docs/latest/rules/no-useless-return
[198]: https://eslint.org/docs/latest/rules/no-with
[199]: https://eslint.org/docs/latest/rules/object-shorthand
[200]: https://eslint.org/docs/latest/rules/one-var
[201]: https://eslint.org/docs/latest/rules/operator-assignment
[202]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[203]: https://eslint.org/docs/latest/rules/prefer-const
[204]: https://eslint.org/docs/latest/rules/prefer-destructuring
[205]: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
[206]: https://eslint.org/docs/latest/rules/prefer-numeric-literals
[207]: https://eslint.org/docs/latest/rules/prefer-object-spread
[208]: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
[209]: https://eslint.org/docs/latest/rules/prefer-regex-literals
[210]: https://eslint.org/docs/latest/rules/prefer-rest-params
[211]: https://eslint.org/docs/latest/rules/prefer-spread
[212]: https://eslint.org/docs/latest/rules/radix
[213]: https://legacy.reactjs.org/docs/hooks-rules.html
[214]: https://legacy.reactjs.org/docs/hooks-rules.html
[215]: https://legacy.reactjs.org/docs/hooks-rules.html
[216]: https://legacy.reactjs.org/docs/hooks-rules.html
[217]: https://legacy.reactjs.org/docs/hooks-rules.html
[218]: https://legacy.reactjs.org/docs/hooks-rules.html
[219]: https://legacy.reactjs.org/docs/hooks-rules.html
[220]: https://legacy.reactjs.org/docs/hooks-rules.html
[221]: https://legacy.reactjs.org/docs/hooks-rules.html
[222]: https://legacy.reactjs.org/docs/hooks-rules.html
[223]: https://legacy.reactjs.org/docs/hooks-rules.html
[224]: https://legacy.reactjs.org/docs/hooks-rules.html
[225]: https://legacy.reactjs.org/docs/hooks-rules.html
[226]: https://legacy.reactjs.org/docs/hooks-rules.html
[227]: https://legacy.reactjs.org/docs/hooks-rules.html
[228]: https://legacy.reactjs.org/docs/hooks-rules.html
[229]: https://legacy.reactjs.org/docs/hooks-rules.html
[230]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
[231]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[232]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[233]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
[234]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[235]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[236]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
[237]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[238]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
[239]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[240]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[241]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
[242]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[243]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[244]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[245]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
[246]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
[247]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[248]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
[249]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[250]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[251]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[252]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[253]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[254]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
[255]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[256]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[257]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
[258]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
[259]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[260]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[261]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[262]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[263]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
[264]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
[265]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
[266]: https://eslint.org/docs/latest/rules/require-yield
[267]: https://eslint.org/docs/latest/rules/spaced-comment
[268]: https://eslint.org/docs/latest/rules/strict
[269]: https://eslint.org/docs/latest/rules/symbol-description
[270]: https://eslint.org/docs/latest/rules/unicode-bom
[271]: https://eslint.org/docs/latest/rules/use-isnan
[272]: https://eslint.org/docs/latest/rules/valid-typeof
[273]: https://eslint.org/docs/latest/rules/vars-on-top
[274]: https://eslint.org/docs/latest/rules/yoda
