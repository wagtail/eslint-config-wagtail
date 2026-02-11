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

| Rule                                                               | Severity | Config                                                                    |
| ------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------- |
| [`@typescript-eslint/adjacent-overload-signatures`][0]             | `error`  |                                                                           |
| [`@typescript-eslint/array-type`][1]                               | `error`  |                                                                           |
| [`@typescript-eslint/ban-ts-comment`][2]                           | `error`  | `{"minimumDescriptionLength":10}`                                         |
| [`@typescript-eslint/ban-tslint-comment`][3]                       | `error`  |                                                                           |
| [`@typescript-eslint/class-literal-property-style`][4]             | `error`  |                                                                           |
| [`@typescript-eslint/consistent-generic-constructors`][5]          | `error`  |                                                                           |
| [`@typescript-eslint/consistent-indexed-object-style`][6]          | `error`  |                                                                           |
| [`@typescript-eslint/consistent-type-assertions`][7]               | `error`  |                                                                           |
| [`@typescript-eslint/consistent-type-definitions`][8]              | `error`  |                                                                           |
| [`@typescript-eslint/no-array-constructor`][9]                     | `error`  |                                                                           |
| [`@typescript-eslint/no-confusing-non-null-assertion`][10]         | `error`  |                                                                           |
| [`@typescript-eslint/no-duplicate-enum-values`][11]                | `error`  |                                                                           |
| [`@typescript-eslint/no-dynamic-delete`][12]                       | `error`  |                                                                           |
| [`@typescript-eslint/no-empty-function`][13]                       | `error`  | `{"allow":["arrowFunctions","functions","methods"]}`                      |
| [`@typescript-eslint/no-empty-object-type`][14]                    | `error`  |                                                                           |
| [`@typescript-eslint/no-explicit-any`][15]                         | `error`  |                                                                           |
| [`@typescript-eslint/no-extra-non-null-assertion`][16]             | `error`  |                                                                           |
| [`@typescript-eslint/no-extraneous-class`][17]                     | `error`  |                                                                           |
| [`@typescript-eslint/no-inferrable-types`][18]                     | `error`  |                                                                           |
| [`@typescript-eslint/no-invalid-void-type`][19]                    | `error`  |                                                                           |
| [`@typescript-eslint/no-misused-new`][20]                          | `error`  |                                                                           |
| [`@typescript-eslint/no-namespace`][21]                            | `error`  |                                                                           |
| [`@typescript-eslint/no-non-null-asserted-nullish-coalescing`][22] | `error`  |                                                                           |
| [`@typescript-eslint/no-non-null-asserted-optional-chain`][23]     | `error`  |                                                                           |
| [`@typescript-eslint/no-non-null-assertion`][24]                   | `error`  |                                                                           |
| [`@typescript-eslint/no-require-imports`][25]                      | `error`  |                                                                           |
| [`@typescript-eslint/no-shadow`][26]                               | `error`  |                                                                           |
| [`@typescript-eslint/no-this-alias`][27]                           | `error`  |                                                                           |
| [`@typescript-eslint/no-unnecessary-type-constraint`][28]          | `error`  |                                                                           |
| [`@typescript-eslint/no-unsafe-declaration-merging`][29]           | `error`  |                                                                           |
| [`@typescript-eslint/no-unsafe-function-type`][30]                 | `error`  |                                                                           |
| [`@typescript-eslint/no-unused-expressions`][31]                   | `error`  | [see Config][config]                                                      |
| [`@typescript-eslint/no-unused-vars`][32]                          | `error`  | [see Config][config]                                                      |
| [`@typescript-eslint/no-use-before-define`][33]                    | `error`  |                                                                           |
| [`@typescript-eslint/no-useless-constructor`][34]                  | `error`  |                                                                           |
| [`@typescript-eslint/no-wrapper-object-types`][35]                 | `error`  |                                                                           |
| [`@typescript-eslint/prefer-as-const`][36]                         | `error`  |                                                                           |
| [`@typescript-eslint/prefer-for-of`][37]                           | `error`  |                                                                           |
| [`@typescript-eslint/prefer-function-type`][38]                    | `error`  |                                                                           |
| [`@typescript-eslint/prefer-literal-enum-member`][39]              | `error`  |                                                                           |
| [`@typescript-eslint/prefer-namespace-keyword`][40]                | `error`  |                                                                           |
| [`@typescript-eslint/triple-slash-reference`][41]                  | `error`  |                                                                           |
| [`@typescript-eslint/unified-signatures`][42]                      | `error`  |                                                                           |
| [`array-callback-return`][43]                                      | `error`  | `{"allowImplicit":true,"checkForEach":false,"allowVoid":false}`           |
| [`arrow-body-style`][44]                                           | `error`  | `"as-needed"`                                                             |
| [`block-scoped-var`][45]                                           | `error`  |                                                                           |
| [`camelcase`][46]                                                  | `error`  | [see Config][config]                                                      |
| [`consistent-return`][47]                                          | `error`  | `{"treatUndefinedAsUnspecified":false}`                                   |
| [`constructor-super`][48]                                          | `error`  |                                                                           |
| [`default-case`][49]                                               | `error`  | `{"commentPattern":"^no default$"}`                                       |
| [`default-case-last`][50]                                          | `error`  |                                                                           |
| [`default-param-last`][51]                                         | `error`  |                                                                           |
| [`dot-notation`][52]                                               | `error`  | `{"allowKeywords":true,"allowPattern":""}`                                |
| [`eqeqeq`][53]                                                     | `error`  | `"always", {"null":"ignore"}`                                             |
| [`for-direction`][54]                                              | `error`  |                                                                           |
| [`func-names`][55]                                                 | `warn`   | `"always", {}`                                                            |
| [`getter-return`][56]                                              | `error`  | `{"allowImplicit":false}`                                                 |
| [`grouped-accessor-pairs`][57]                                     | `error`  | `"anyOrder", {"enforceForTSTypes":false}`                                 |
| [`guard-for-in`][58]                                               | `error`  |                                                                           |
| [`id-length`][59]                                                  | `warn`   | [see Config][config]                                                      |
| [`import-x/default`][60]                                           | `error`  |                                                                           |
| [`import-x/export`][61]                                            | `error`  |                                                                           |
| [`import-x/first`][62]                                             | `error`  |                                                                           |
| [`import-x/namespace`][63]                                         | `error`  |                                                                           |
| [`import-x/newline-after-import`][64]                              | `error`  |                                                                           |
| [`import-x/no-absolute-path`][65]                                  | `error`  |                                                                           |
| [`import-x/no-amd`][66]                                            | `error`  |                                                                           |
| [`import-x/no-cycle`][67]                                          | `error`  |                                                                           |
| [`import-x/no-duplicates`][68]                                     | `error`  |                                                                           |
| [`import-x/no-dynamic-require`][69]                                | `error`  |                                                                           |
| [`import-x/no-extraneous-dependencies`][70]                        | `error`  | [see Config][config]                                                      |
| [`import-x/no-import-module-exports`][71]                          | `error`  | `{"exceptions":[]}`                                                       |
| [`import-x/no-mutable-exports`][72]                                | `error`  |                                                                           |
| [`import-x/no-named-as-default`][73]                               | `error`  |                                                                           |
| [`import-x/no-named-default`][74]                                  | `error`  |                                                                           |
| [`import-x/no-relative-packages`][75]                              | `error`  |                                                                           |
| [`import-x/no-self-import`][76]                                    | `error`  |                                                                           |
| [`import-x/no-unresolved`][77]                                     | `error`  | `{"commonjs":true,"caseSensitive":true}`                                  |
| [`import-x/no-useless-path-segments`][78]                          | `error`  | `{"commonjs":true}`                                                       |
| [`import-x/no-webpack-loader-syntax`][79]                          | `error`  |                                                                           |
| [`import-x/order`][80]                                             | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/alt-text`][81]                                          | `error`  |                                                                           |
| [`jsx-a11y/anchor-has-content`][82]                                | `error`  |                                                                           |
| [`jsx-a11y/anchor-is-valid`][83]                                   | `error`  |                                                                           |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][84]                | `error`  |                                                                           |
| [`jsx-a11y/aria-props`][85]                                        | `error`  |                                                                           |
| [`jsx-a11y/aria-proptypes`][86]                                    | `error`  |                                                                           |
| [`jsx-a11y/aria-role`][87]                                         | `error`  |                                                                           |
| [`jsx-a11y/aria-unsupported-elements`][88]                         | `error`  |                                                                           |
| [`jsx-a11y/autocomplete-valid`][89]                                | `error`  |                                                                           |
| [`jsx-a11y/click-events-have-key-events`][90]                      | `error`  |                                                                           |
| [`jsx-a11y/control-has-associated-label`][91]                      | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/heading-has-content`][92]                               | `error`  |                                                                           |
| [`jsx-a11y/html-has-lang`][93]                                     | `error`  |                                                                           |
| [`jsx-a11y/iframe-has-title`][94]                                  | `error`  |                                                                           |
| [`jsx-a11y/img-redundant-alt`][95]                                 | `error`  |                                                                           |
| [`jsx-a11y/interactive-supports-focus`][96]                        | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/label-has-associated-control`][97]                      | `error`  | `{"assert":"both","depth":25}`                                            |
| [`jsx-a11y/lang`][98]                                              | `error`  |                                                                           |
| [`jsx-a11y/media-has-caption`][99]                                 | `error`  |                                                                           |
| [`jsx-a11y/mouse-events-have-key-events`][100]                     | `error`  |                                                                           |
| [`jsx-a11y/no-access-key`][101]                                    | `error`  |                                                                           |
| [`jsx-a11y/no-autofocus`][102]                                     | `error`  |                                                                           |
| [`jsx-a11y/no-distracting-elements`][103]                          | `error`  |                                                                           |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][104]    | `error`  | `{"tr":["none","presentation"],"canvas":["img"]}`                         |
| [`jsx-a11y/no-noninteractive-element-interactions`][105]           | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][106]    | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-tabindex`][107]                       | `error`  | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`           |
| [`jsx-a11y/no-redundant-roles`][108]                               | `error`  |                                                                           |
| [`jsx-a11y/no-static-element-interactions`][109]                   | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/role-has-required-aria-props`][110]                     | `error`  |                                                                           |
| [`jsx-a11y/role-supports-aria-props`][111]                         | `error`  |                                                                           |
| [`jsx-a11y/scope`][112]                                            | `error`  |                                                                           |
| [`jsx-a11y/tabindex-no-positive`][113]                             | `error`  |                                                                           |
| [`lines-between-class-members`][114]                               | `error`  | `"always", {"exceptAfterSingleLine":false}`                               |
| [`new-cap`][115]                                                   | `error`  | [see Config][config]                                                      |
| [`no-alert`][116]                                                  | `warn`   |                                                                           |
| [`no-async-promise-executor`][117]                                 | `error`  |                                                                           |
| [`no-await-in-loop`][118]                                          | `error`  |                                                                           |
| [`no-bitwise`][119]                                                | `error`  | `{"allow":[],"int32Hint":false}`                                          |
| [`no-caller`][120]                                                 | `error`  |                                                                           |
| [`no-case-declarations`][121]                                      | `error`  |                                                                           |
| [`no-class-assign`][122]                                           | `error`  |                                                                           |
| [`no-compare-neg-zero`][123]                                       | `error`  |                                                                           |
| [`no-cond-assign`][124]                                            | `error`  | `"always"`                                                                |
| [`no-console`][125]                                                | `warn`   | `{}`                                                                      |
| [`no-const-assign`][126]                                           | `error`  |                                                                           |
| [`no-constant-binary-expression`][127]                             | `error`  |                                                                           |
| [`no-constant-condition`][128]                                     | `error`  | `{"checkLoops":"allExceptWhileTrue"}`                                     |
| [`no-constructor-return`][129]                                     | `error`  |                                                                           |
| [`no-continue`][130]                                               | `error`  |                                                                           |
| [`no-control-regex`][131]                                          | `error`  |                                                                           |
| [`no-debugger`][132]                                               | `error`  |                                                                           |
| [`no-delete-var`][133]                                             | `error`  |                                                                           |
| [`no-dupe-args`][134]                                              | `error`  |                                                                           |
| [`no-dupe-class-members`][135]                                     | `error`  |                                                                           |
| [`no-dupe-else-if`][136]                                           | `error`  |                                                                           |
| [`no-dupe-keys`][137]                                              | `error`  |                                                                           |
| [`no-duplicate-case`][138]                                         | `error`  |                                                                           |
| [`no-else-return`][139]                                            | `error`  | `{"allowElseIf":false}`                                                   |
| [`no-empty`][140]                                                  | `error`  | `{"allowEmptyCatch":false}`                                               |
| [`no-empty-character-class`][141]                                  | `error`  |                                                                           |
| [`no-empty-pattern`][142]                                          | `error`  | `{"allowObjectPatternsAsParameters":false}`                               |
| [`no-empty-static-block`][143]                                     | `error`  |                                                                           |
| [`no-eval`][144]                                                   | `error`  | `{"allowIndirect":false}`                                                 |
| [`no-ex-assign`][145]                                              | `error`  |                                                                           |
| [`no-extend-native`][146]                                          | `error`  | `{"exceptions":[]}`                                                       |
| [`no-extra-bind`][147]                                             | `error`  |                                                                           |
| [`no-extra-boolean-cast`][148]                                     | `error`  | `{}`                                                                      |
| [`no-extra-label`][149]                                            | `error`  |                                                                           |
| [`no-fallthrough`][150]                                            | `error`  | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}`         |
| [`no-func-assign`][151]                                            | `error`  |                                                                           |
| [`no-global-assign`][152]                                          | `error`  | `{"exceptions":[]}`                                                       |
| [`no-implied-eval`][153]                                           | `error`  |                                                                           |
| [`no-import-assign`][154]                                          | `error`  |                                                                           |
| [`no-inner-declarations`][155]                                     | `error`  | `"functions", {"blockScopedFunctions":"allow"}`                           |
| [`no-invalid-regexp`][156]                                         | `error`  | `{}`                                                                      |
| [`no-irregular-whitespace`][157]                                   | `error`  | [see Config][config]                                                      |
| [`no-iterator`][158]                                               | `error`  |                                                                           |
| [`no-label-var`][159]                                              | `error`  |                                                                           |
| [`no-labels`][160]                                                 | `error`  | `{"allowLoop":false,"allowSwitch":false}`                                 |
| [`no-lone-blocks`][161]                                            | `error`  |                                                                           |
| [`no-lonely-if`][162]                                              | `error`  |                                                                           |
| [`no-loop-func`][163]                                              | `error`  |                                                                           |
| [`no-loss-of-precision`][164]                                      | `error`  |                                                                           |
| [`no-misleading-character-class`][165]                             | `error`  | `{"allowEscape":false}`                                                   |
| [`no-multi-assign`][166]                                           | `error`  | `{"ignoreNonDeclaration":false}`                                          |
| [`no-multi-str`][167]                                              | `error`  |                                                                           |
| [`no-nested-ternary`][168]                                         | `error`  |                                                                           |
| [`no-new`][169]                                                    | `warn`   |                                                                           |
| [`no-new-func`][170]                                               | `error`  |                                                                           |
| [`no-new-native-nonconstructor`][171]                              | `error`  |                                                                           |
| [`no-new-wrappers`][172]                                           | `error`  |                                                                           |
| [`no-nonoctal-decimal-escape`][173]                                | `error`  |                                                                           |
| [`no-obj-calls`][174]                                              | `error`  |                                                                           |
| [`no-object-constructor`][175]                                     | `error`  |                                                                           |
| [`no-octal`][176]                                                  | `error`  |                                                                           |
| [`no-octal-escape`][177]                                           | `error`  |                                                                           |
| [`no-param-reassign`][178]                                         | `error`  |                                                                           |
| [`no-plusplus`][179]                                               | `error`  | `{"allowForLoopAfterthoughts":false}`                                     |
| [`no-promise-executor-return`][180]                                | `error`  | `{"allowVoid":false}`                                                     |
| [`no-proto`][181]                                                  | `error`  |                                                                           |
| [`no-prototype-builtins`][182]                                     | `error`  |                                                                           |
| [`no-redeclare`][183]                                              | `error`  | `{"builtinGlobals":true}`                                                 |
| [`no-regex-spaces`][184]                                           | `error`  |                                                                           |
| [`no-restricted-exports`][185]                                     | `error`  | `{"restrictedNamedExports":["default","then"]}`                           |
| [`no-restricted-globals`][186]                                     | `error`  | [see Config][config]                                                      |
| [`no-restricted-properties`][187]                                  | `error`  | [see Config][config]                                                      |
| [`no-restricted-syntax`][188]                                      | `error`  | [see Config][config]                                                      |
| [`no-return-assign`][189]                                          | `error`  | `"always"`                                                                |
| [`no-script-url`][190]                                             | `error`  |                                                                           |
| [`no-self-assign`][191]                                            | `error`  | `{"props":true}`                                                          |
| [`no-self-compare`][192]                                           | `error`  |                                                                           |
| [`no-sequences`][193]                                              | `error`  | `{"allowInParentheses":true}`                                             |
| [`no-setter-return`][194]                                          | `error`  |                                                                           |
| [`no-shadow-restricted-names`][195]                                | `error`  | `{"reportGlobalThis":false}`                                              |
| [`no-sparse-arrays`][196]                                          | `error`  |                                                                           |
| [`no-template-curly-in-string`][197]                               | `error`  |                                                                           |
| [`no-this-before-super`][198]                                      | `error`  |                                                                           |
| [`no-undef`][199]                                                  | `error`  | `{"typeof":false}`                                                        |
| [`no-undef-init`][200]                                             | `error`  |                                                                           |
| [`no-underscore-dangle`][201]                                      | `error`  | [see Config][config]                                                      |
| [`no-unneeded-ternary`][202]                                       | `error`  | `{"defaultAssignment":false}`                                             |
| [`no-unreachable`][203]                                            | `error`  |                                                                           |
| [`no-unreachable-loop`][204]                                       | `error`  | `{"ignore":[]}`                                                           |
| [`no-unsafe-finally`][205]                                         | `error`  |                                                                           |
| [`no-unsafe-negation`][206]                                        | `error`  | `{"enforceForOrderingRelations":false}`                                   |
| [`no-unsafe-optional-chaining`][207]                               | `error`  | `{"disallowArithmeticOperators":true}`                                    |
| [`no-unused-labels`][208]                                          | `error`  |                                                                           |
| [`no-unused-private-class-members`][209]                           | `error`  |                                                                           |
| [`no-useless-backreference`][210]                                  | `error`  |                                                                           |
| [`no-useless-catch`][211]                                          | `error`  |                                                                           |
| [`no-useless-computed-key`][212]                                   | `error`  | `{"enforceForClassMembers":true}`                                         |
| [`no-useless-concat`][213]                                         | `error`  |                                                                           |
| [`no-useless-escape`][214]                                         | `error`  | `{"allowRegexCharacters":[]}`                                             |
| [`no-useless-rename`][215]                                         | `error`  | `{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}` |
| [`no-useless-return`][216]                                         | `error`  |                                                                           |
| [`no-void`][217]                                                   | `error`  | `{"allowAsStatement":false}`                                              |
| [`no-with`][218]                                                   | `error`  |                                                                           |
| [`object-shorthand`][219]                                          | `error`  | `"methods"`                                                               |
| [`one-var`][220]                                                   | `error`  | `"never"`                                                                 |
| [`operator-assignment`][221]                                       | `error`  | `"always"`                                                                |
| [`prefer-arrow-callback`][222]                                     | `error`  | `{"allowNamedFunctions":false,"allowUnboundThis":true}`                   |
| [`prefer-const`][223]                                              | `error`  | `{"destructuring":"any","ignoreReadBeforeAssign":true}`                   |
| [`prefer-exponentiation-operator`][224]                            | `error`  |                                                                           |
| [`prefer-numeric-literals`][225]                                   | `error`  |                                                                           |
| [`prefer-object-spread`][226]                                      | `error`  |                                                                           |
| [`prefer-promise-reject-errors`][227]                              | `error`  | `{"allowEmptyReject":true}`                                               |
| [`prefer-regex-literals`][228]                                     | `error`  | `{"disallowRedundantWrapping":true}`                                      |
| [`prefer-rest-params`][229]                                        | `error`  |                                                                           |
| [`prefer-spread`][230]                                             | `error`  |                                                                           |
| [`radix`][231]                                                     | `error`  | `"always"`                                                                |
| [`react-hooks/component-hook-factories`][232]                      | `error`  |                                                                           |
| [`react-hooks/config`][233]                                        | `error`  |                                                                           |
| [`react-hooks/error-boundaries`][234]                              | `error`  |                                                                           |
| [`react-hooks/exhaustive-deps`][235]                               | `error`  |                                                                           |
| [`react-hooks/gating`][236]                                        | `error`  |                                                                           |
| [`react-hooks/globals`][237]                                       | `error`  |                                                                           |
| [`react-hooks/immutability`][238]                                  | `error`  |                                                                           |
| [`react-hooks/incompatible-library`][239]                          | `warn`   |                                                                           |
| [`react-hooks/preserve-manual-memoization`][240]                   | `error`  |                                                                           |
| [`react-hooks/purity`][241]                                        | `error`  |                                                                           |
| [`react-hooks/refs`][242]                                          | `error`  |                                                                           |
| [`react-hooks/rules-of-hooks`][243]                                | `error`  |                                                                           |
| [`react-hooks/set-state-in-effect`][244]                           | `error`  |                                                                           |
| [`react-hooks/set-state-in-render`][245]                           | `error`  |                                                                           |
| [`react-hooks/static-components`][246]                             | `error`  |                                                                           |
| [`react-hooks/unsupported-syntax`][247]                            | `warn`   |                                                                           |
| [`react-hooks/use-memo`][248]                                      | `error`  |                                                                           |
| [`react/button-has-type`][249]                                     | `error`  | `{"reset":false,"button":true,"submit":true}`                             |
| [`react/default-props-match-prop-types`][250]                      | `error`  | `{"allowRequiredDefaults":false}`                                         |
| [`react/destructuring-assignment`][251]                            | `error`  |                                                                           |
| [`react/display-name`][252]                                        | `error`  |                                                                           |
| [`react/forbid-foreign-prop-types`][253]                           | `warn`   | `{"allowInPropTypes":true}`                                               |
| [`react/forbid-prop-types`][254]                                   | `error`  | `{"checkContextTypes":true,"checkChildContextTypes":true}`                |
| [`react/function-component-definition`][255]                       | `error`  | [see Config][config]                                                      |
| [`react/hook-use-state`][256]                                      | `error`  |                                                                           |
| [`react/jsx-curly-brace-presence`][257]                            | `error`  | `{"props":"never","children":"never"}`                                    |
| [`react/jsx-filename-extension`][258]                              | `error`  |                                                                           |
| [`react/jsx-fragments`][259]                                       | `error`  |                                                                           |
| [`react/jsx-key`][260]                                             | `error`  |                                                                           |
| [`react/jsx-no-comment-textnodes`][261]                            | `error`  |                                                                           |
| [`react/jsx-no-constructed-context-values`][262]                   | `error`  |                                                                           |
| [`react/jsx-no-duplicate-props`][263]                              | `error`  | `{"ignoreCase":true}`                                                     |
| [`react/jsx-no-script-url`][264]                                   | `error`  |                                                                           |
| [`react/jsx-no-target-blank`][265]                                 | `error`  |                                                                           |
| [`react/jsx-no-undef`][266]                                        | `error`  |                                                                           |
| [`react/jsx-no-useless-fragment`][267]                             | `error`  |                                                                           |
| [`react/jsx-pascal-case`][268]                                     | `error`  | `{"allowAllCaps":true}`                                                   |
| [`react/jsx-props-no-spreading`][269]                              | `error`  | `{"explicitSpread":"ignore"}`                                             |
| [`react/jsx-uses-react`][270]                                      | `error`  |                                                                           |
| [`react/jsx-uses-vars`][271]                                       | `error`  |                                                                           |
| [`react/no-access-state-in-setstate`][272]                         | `error`  |                                                                           |
| [`react/no-array-index-key`][273]                                  | `error`  |                                                                           |
| [`react/no-arrow-function-lifecycle`][274]                         | `error`  |                                                                           |
| [`react/no-children-prop`][275]                                    | `error`  |                                                                           |
| [`react/no-danger`][276]                                           | `warn`   |                                                                           |
| [`react/no-danger-with-children`][277]                             | `error`  |                                                                           |
| [`react/no-deprecated`][278]                                       | `error`  |                                                                           |
| [`react/no-did-update-set-state`][279]                             | `error`  |                                                                           |
| [`react/no-direct-mutation-state`][280]                            | `error`  |                                                                           |
| [`react/no-find-dom-node`][281]                                    | `error`  |                                                                           |
| [`react/no-invalid-html-attribute`][282]                           | `error`  |                                                                           |
| [`react/no-is-mounted`][283]                                       | `error`  |                                                                           |
| [`react/no-namespace`][284]                                        | `error`  |                                                                           |
| [`react/no-redundant-should-component-update`][285]                | `error`  |                                                                           |
| [`react/no-render-return-value`][286]                              | `error`  |                                                                           |
| [`react/no-string-refs`][287]                                      | `error`  |                                                                           |
| [`react/no-this-in-sfc`][288]                                      | `error`  |                                                                           |
| [`react/no-typos`][289]                                            | `error`  |                                                                           |
| [`react/no-unescaped-entities`][290]                               | `error`  |                                                                           |
| [`react/no-unknown-property`][291]                                 | `error`  |                                                                           |
| [`react/no-unstable-nested-components`][292]                       | `error`  |                                                                           |
| [`react/no-unused-class-component-methods`][293]                   | `error`  |                                                                           |
| [`react/no-unused-prop-types`][294]                                | `error`  |                                                                           |
| [`react/no-unused-state`][295]                                     | `error`  |                                                                           |
| [`react/no-will-update-set-state`][296]                            | `error`  |                                                                           |
| [`react/prefer-exact-props`][297]                                  | `error`  |                                                                           |
| [`react/prefer-stateless-function`][298]                           | `error`  | `{"ignorePureComponents":true}`                                           |
| [`react/react-in-jsx-scope`][299]                                  | `error`  |                                                                           |
| [`react/require-default-props`][300]                               | `error`  | `{"forbidDefaultForRequired":true}`                                       |
| [`react/require-render-return`][301]                               | `error`  |                                                                           |
| [`react/self-closing-comp`][302]                                   | `error`  |                                                                           |
| [`react/state-in-constructor`][303]                                | `error`  |                                                                           |
| [`react/static-property-placement`][304]                           | `error`  | `"property assignment"`                                                   |
| [`react/style-prop-object`][305]                                   | `error`  |                                                                           |
| [`react/void-dom-elements-no-children`][306]                       | `error`  |                                                                           |
| [`require-yield`][307]                                             | `error`  |                                                                           |
| [`spaced-comment`][308]                                            | `error`  | [see Config][config]                                                      |
| [`strict`][309]                                                    | `error`  | `"never"`                                                                 |
| [`symbol-description`][310]                                        | `error`  |                                                                           |
| [`unicode-bom`][311]                                               | `error`  | `"never"`                                                                 |
| [`use-isnan`][312]                                                 | `error`  | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`                 |
| [`valid-typeof`][313]                                              | `error`  | `{"requireStringLiterals":true}`                                          |
| [`vars-on-top`][314]                                               | `error`  |                                                                           |
| [`yoda`][315]                                                      | `error`  | `"never", {"exceptRange":false,"onlyEquality":false}`                     |

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
[26]: https://typescript-eslint.io/rules/no-shadow/
[27]: https://typescript-eslint.io/rules/no-this-alias/
[28]: https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
[29]: https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
[30]: https://typescript-eslint.io/rules/no-unsafe-function-type/
[31]: https://typescript-eslint.io/rules/no-unused-expressions/
[32]: https://typescript-eslint.io/rules/no-unused-vars/
[33]: https://typescript-eslint.io/rules/no-use-before-define/
[34]: https://typescript-eslint.io/rules/no-useless-constructor/
[35]: https://typescript-eslint.io/rules/no-wrapper-object-types/
[36]: https://typescript-eslint.io/rules/prefer-as-const/
[37]: https://typescript-eslint.io/rules/prefer-for-of/
[38]: https://typescript-eslint.io/rules/prefer-function-type/
[39]: https://typescript-eslint.io/rules/prefer-literal-enum-member/
[40]: https://typescript-eslint.io/rules/prefer-namespace-keyword/
[41]: https://typescript-eslint.io/rules/triple-slash-reference/
[42]: https://typescript-eslint.io/rules/unified-signatures/
[43]: https://eslint.org/docs/latest/rules/array-callback-return
[44]: https://eslint.org/docs/latest/rules/arrow-body-style
[45]: https://eslint.org/docs/latest/rules/block-scoped-var
[46]: https://eslint.org/docs/latest/rules/camelcase
[47]: https://eslint.org/docs/latest/rules/consistent-return
[48]: https://eslint.org/docs/latest/rules/constructor-super
[49]: https://eslint.org/docs/latest/rules/default-case
[50]: https://eslint.org/docs/latest/rules/default-case-last
[51]: https://eslint.org/docs/latest/rules/default-param-last
[52]: https://eslint.org/docs/latest/rules/dot-notation
[53]: https://eslint.org/docs/latest/rules/eqeqeq
[54]: https://eslint.org/docs/latest/rules/for-direction
[55]: https://eslint.org/docs/latest/rules/func-names
[56]: https://eslint.org/docs/latest/rules/getter-return
[57]: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
[58]: https://eslint.org/docs/latest/rules/guard-for-in
[59]: https://eslint.org/docs/latest/rules/id-length
[60]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
[61]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
[62]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
[63]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
[64]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
[65]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
[66]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
[67]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
[68]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
[69]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
[70]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
[71]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
[72]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
[73]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
[74]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
[75]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
[76]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
[77]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
[78]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
[79]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
[80]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
[81]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[82]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[83]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[84]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[85]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[86]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[87]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[88]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[89]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[90]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[91]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
[92]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[93]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[94]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[95]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[96]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[97]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[98]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
[99]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[100]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[101]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[102]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[103]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[104]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[105]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[106]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[107]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[108]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[109]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[110]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[111]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[112]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[113]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[114]: https://eslint.org/docs/latest/rules/lines-between-class-members
[115]: https://eslint.org/docs/latest/rules/new-cap
[116]: https://eslint.org/docs/latest/rules/no-alert
[117]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[118]: https://eslint.org/docs/latest/rules/no-await-in-loop
[119]: https://eslint.org/docs/latest/rules/no-bitwise
[120]: https://eslint.org/docs/latest/rules/no-caller
[121]: https://eslint.org/docs/latest/rules/no-case-declarations
[122]: https://eslint.org/docs/latest/rules/no-class-assign
[123]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[124]: https://eslint.org/docs/latest/rules/no-cond-assign
[125]: https://eslint.org/docs/latest/rules/no-console
[126]: https://eslint.org/docs/latest/rules/no-const-assign
[127]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[128]: https://eslint.org/docs/latest/rules/no-constant-condition
[129]: https://eslint.org/docs/latest/rules/no-constructor-return
[130]: https://eslint.org/docs/latest/rules/no-continue
[131]: https://eslint.org/docs/latest/rules/no-control-regex
[132]: https://eslint.org/docs/latest/rules/no-debugger
[133]: https://eslint.org/docs/latest/rules/no-delete-var
[134]: https://eslint.org/docs/latest/rules/no-dupe-args
[135]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[136]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[137]: https://eslint.org/docs/latest/rules/no-dupe-keys
[138]: https://eslint.org/docs/latest/rules/no-duplicate-case
[139]: https://eslint.org/docs/latest/rules/no-else-return
[140]: https://eslint.org/docs/latest/rules/no-empty
[141]: https://eslint.org/docs/latest/rules/no-empty-character-class
[142]: https://eslint.org/docs/latest/rules/no-empty-pattern
[143]: https://eslint.org/docs/latest/rules/no-empty-static-block
[144]: https://eslint.org/docs/latest/rules/no-eval
[145]: https://eslint.org/docs/latest/rules/no-ex-assign
[146]: https://eslint.org/docs/latest/rules/no-extend-native
[147]: https://eslint.org/docs/latest/rules/no-extra-bind
[148]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[149]: https://eslint.org/docs/latest/rules/no-extra-label
[150]: https://eslint.org/docs/latest/rules/no-fallthrough
[151]: https://eslint.org/docs/latest/rules/no-func-assign
[152]: https://eslint.org/docs/latest/rules/no-global-assign
[153]: https://eslint.org/docs/latest/rules/no-implied-eval
[154]: https://eslint.org/docs/latest/rules/no-import-assign
[155]: https://eslint.org/docs/latest/rules/no-inner-declarations
[156]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[157]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[158]: https://eslint.org/docs/latest/rules/no-iterator
[159]: https://eslint.org/docs/latest/rules/no-label-var
[160]: https://eslint.org/docs/latest/rules/no-labels
[161]: https://eslint.org/docs/latest/rules/no-lone-blocks
[162]: https://eslint.org/docs/latest/rules/no-lonely-if
[163]: https://eslint.org/docs/latest/rules/no-loop-func
[164]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[165]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[166]: https://eslint.org/docs/latest/rules/no-multi-assign
[167]: https://eslint.org/docs/latest/rules/no-multi-str
[168]: https://eslint.org/docs/latest/rules/no-nested-ternary
[169]: https://eslint.org/docs/latest/rules/no-new
[170]: https://eslint.org/docs/latest/rules/no-new-func
[171]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[172]: https://eslint.org/docs/latest/rules/no-new-wrappers
[173]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[174]: https://eslint.org/docs/latest/rules/no-obj-calls
[175]: https://eslint.org/docs/latest/rules/no-object-constructor
[176]: https://eslint.org/docs/latest/rules/no-octal
[177]: https://eslint.org/docs/latest/rules/no-octal-escape
[178]: https://eslint.org/docs/latest/rules/no-param-reassign
[179]: https://eslint.org/docs/latest/rules/no-plusplus
[180]: https://eslint.org/docs/latest/rules/no-promise-executor-return
[181]: https://eslint.org/docs/latest/rules/no-proto
[182]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[183]: https://eslint.org/docs/latest/rules/no-redeclare
[184]: https://eslint.org/docs/latest/rules/no-regex-spaces
[185]: https://eslint.org/docs/latest/rules/no-restricted-exports
[186]: https://eslint.org/docs/latest/rules/no-restricted-globals
[187]: https://eslint.org/docs/latest/rules/no-restricted-properties
[188]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[189]: https://eslint.org/docs/latest/rules/no-return-assign
[190]: https://eslint.org/docs/latest/rules/no-script-url
[191]: https://eslint.org/docs/latest/rules/no-self-assign
[192]: https://eslint.org/docs/latest/rules/no-self-compare
[193]: https://eslint.org/docs/latest/rules/no-sequences
[194]: https://eslint.org/docs/latest/rules/no-setter-return
[195]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[196]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[197]: https://eslint.org/docs/latest/rules/no-template-curly-in-string
[198]: https://eslint.org/docs/latest/rules/no-this-before-super
[199]: https://eslint.org/docs/latest/rules/no-undef
[200]: https://eslint.org/docs/latest/rules/no-undef-init
[201]: https://eslint.org/docs/latest/rules/no-underscore-dangle
[202]: https://eslint.org/docs/latest/rules/no-unneeded-ternary
[203]: https://eslint.org/docs/latest/rules/no-unreachable
[204]: https://eslint.org/docs/latest/rules/no-unreachable-loop
[205]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[206]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[207]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[208]: https://eslint.org/docs/latest/rules/no-unused-labels
[209]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[210]: https://eslint.org/docs/latest/rules/no-useless-backreference
[211]: https://eslint.org/docs/latest/rules/no-useless-catch
[212]: https://eslint.org/docs/latest/rules/no-useless-computed-key
[213]: https://eslint.org/docs/latest/rules/no-useless-concat
[214]: https://eslint.org/docs/latest/rules/no-useless-escape
[215]: https://eslint.org/docs/latest/rules/no-useless-rename
[216]: https://eslint.org/docs/latest/rules/no-useless-return
[217]: https://eslint.org/docs/latest/rules/no-void
[218]: https://eslint.org/docs/latest/rules/no-with
[219]: https://eslint.org/docs/latest/rules/object-shorthand
[220]: https://eslint.org/docs/latest/rules/one-var
[221]: https://eslint.org/docs/latest/rules/operator-assignment
[222]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[223]: https://eslint.org/docs/latest/rules/prefer-const
[224]: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
[225]: https://eslint.org/docs/latest/rules/prefer-numeric-literals
[226]: https://eslint.org/docs/latest/rules/prefer-object-spread
[227]: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
[228]: https://eslint.org/docs/latest/rules/prefer-regex-literals
[229]: https://eslint.org/docs/latest/rules/prefer-rest-params
[230]: https://eslint.org/docs/latest/rules/prefer-spread
[231]: https://eslint.org/docs/latest/rules/radix
[232]: https://react.dev/reference/eslint-plugin-react-hooks/lints/component-hook-factories
[233]: https://react.dev/reference/eslint-plugin-react-hooks/lints/config
[234]: https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
[235]: https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
[236]: https://react.dev/reference/eslint-plugin-react-hooks/lints/gating
[237]: https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
[238]: https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
[239]: https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
[240]: https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
[241]: https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
[242]: https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
[243]: https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks
[244]: https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
[245]: https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
[246]: https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
[247]: https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
[248]: https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
[249]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
[250]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
[251]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
[252]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[253]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
[254]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
[255]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
[256]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
[257]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[258]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
[259]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
[260]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[261]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[262]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
[263]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[264]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
[265]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[266]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[267]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
[268]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[269]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
[270]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[271]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[272]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
[273]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
[274]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
[275]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[276]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
[277]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[278]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[279]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
[280]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[281]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[282]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
[283]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[284]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
[285]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
[286]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[287]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[288]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
[289]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
[290]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[291]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[292]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
[293]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
[294]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
[295]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
[296]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
[297]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
[298]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
[299]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[300]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
[301]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[302]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
[303]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
[304]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
[305]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
[306]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
[307]: https://eslint.org/docs/latest/rules/require-yield
[308]: https://eslint.org/docs/latest/rules/spaced-comment
[309]: https://eslint.org/docs/latest/rules/strict
[310]: https://eslint.org/docs/latest/rules/symbol-description
[311]: https://eslint.org/docs/latest/rules/unicode-bom
[312]: https://eslint.org/docs/latest/rules/use-isnan
[313]: https://eslint.org/docs/latest/rules/valid-typeof
[314]: https://eslint.org/docs/latest/rules/vars-on-top
[315]: https://eslint.org/docs/latest/rules/yoda
