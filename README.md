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
| [`@typescript-eslint/array-type`][1]                               | `error`  | `{"default":"array-simple"}`                                              |
| [`@typescript-eslint/ban-ts-comment`][2]                           | `error`  | `{"minimumDescriptionLength":10}`                                         |
| [`@typescript-eslint/ban-tslint-comment`][3]                       | `error`  |                                                                           |
| [`@typescript-eslint/class-literal-property-style`][4]             | `error`  |                                                                           |
| [`@typescript-eslint/consistent-generic-constructors`][5]          | `error`  |                                                                           |
| [`@typescript-eslint/consistent-type-assertions`][6]               | `error`  |                                                                           |
| [`@typescript-eslint/consistent-type-definitions`][7]              | `error`  |                                                                           |
| [`@typescript-eslint/no-array-constructor`][8]                     | `error`  |                                                                           |
| [`@typescript-eslint/no-confusing-non-null-assertion`][9]          | `error`  |                                                                           |
| [`@typescript-eslint/no-duplicate-enum-values`][10]                | `error`  |                                                                           |
| [`@typescript-eslint/no-dynamic-delete`][11]                       | `error`  |                                                                           |
| [`@typescript-eslint/no-empty-function`][12]                       | `error`  | `{"allow":["arrowFunctions","functions","methods"]}`                      |
| [`@typescript-eslint/no-empty-object-type`][13]                    | `error`  |                                                                           |
| [`@typescript-eslint/no-explicit-any`][14]                         | `error`  |                                                                           |
| [`@typescript-eslint/no-extra-non-null-assertion`][15]             | `error`  |                                                                           |
| [`@typescript-eslint/no-extraneous-class`][16]                     | `error`  | `{"allowConstructorOnly":true}`                                           |
| [`@typescript-eslint/no-inferrable-types`][17]                     | `error`  |                                                                           |
| [`@typescript-eslint/no-invalid-void-type`][18]                    | `error`  |                                                                           |
| [`@typescript-eslint/no-misused-new`][19]                          | `error`  |                                                                           |
| [`@typescript-eslint/no-namespace`][20]                            | `error`  |                                                                           |
| [`@typescript-eslint/no-non-null-asserted-nullish-coalescing`][21] | `error`  |                                                                           |
| [`@typescript-eslint/no-non-null-asserted-optional-chain`][22]     | `error`  |                                                                           |
| [`@typescript-eslint/no-require-imports`][23]                      | `error`  |                                                                           |
| [`@typescript-eslint/no-shadow`][24]                               | `error`  |                                                                           |
| [`@typescript-eslint/no-this-alias`][25]                           | `error`  |                                                                           |
| [`@typescript-eslint/no-unnecessary-type-constraint`][26]          | `error`  |                                                                           |
| [`@typescript-eslint/no-unsafe-declaration-merging`][27]           | `error`  |                                                                           |
| [`@typescript-eslint/no-unsafe-function-type`][28]                 | `error`  |                                                                           |
| [`@typescript-eslint/no-unused-expressions`][29]                   | `error`  | [see Config][config]                                                      |
| [`@typescript-eslint/no-unused-vars`][30]                          | `error`  | [see Config][config]                                                      |
| [`@typescript-eslint/no-use-before-define`][31]                    | `error`  |                                                                           |
| [`@typescript-eslint/no-useless-constructor`][32]                  | `error`  |                                                                           |
| [`@typescript-eslint/no-wrapper-object-types`][33]                 | `error`  |                                                                           |
| [`@typescript-eslint/prefer-as-const`][34]                         | `error`  |                                                                           |
| [`@typescript-eslint/prefer-for-of`][35]                           | `error`  |                                                                           |
| [`@typescript-eslint/prefer-function-type`][36]                    | `error`  |                                                                           |
| [`@typescript-eslint/prefer-literal-enum-member`][37]              | `error`  |                                                                           |
| [`@typescript-eslint/prefer-namespace-keyword`][38]                | `error`  |                                                                           |
| [`@typescript-eslint/triple-slash-reference`][39]                  | `error`  |                                                                           |
| [`@typescript-eslint/unified-signatures`][40]                      | `error`  |                                                                           |
| [`array-callback-return`][41]                                      | `error`  | `{"allowImplicit":true,"checkForEach":false,"allowVoid":false}`           |
| [`arrow-body-style`][42]                                           | `error`  | `"as-needed"`                                                             |
| [`block-scoped-var`][43]                                           | `error`  |                                                                           |
| [`camelcase`][44]                                                  | `error`  | [see Config][config]                                                      |
| [`consistent-return`][45]                                          | `error`  | `{"treatUndefinedAsUnspecified":false}`                                   |
| [`constructor-super`][46]                                          | `error`  |                                                                           |
| [`default-case`][47]                                               | `error`  | `{"commentPattern":"^no default$"}`                                       |
| [`default-case-last`][48]                                          | `error`  |                                                                           |
| [`default-param-last`][49]                                         | `error`  |                                                                           |
| [`dot-notation`][50]                                               | `error`  | `{"allowKeywords":true,"allowPattern":""}`                                |
| [`eqeqeq`][51]                                                     | `error`  | `"always", {"null":"ignore"}`                                             |
| [`for-direction`][52]                                              | `error`  |                                                                           |
| [`func-names`][53]                                                 | `warn`   | `"always", {}`                                                            |
| [`getter-return`][54]                                              | `error`  | `{"allowImplicit":false}`                                                 |
| [`grouped-accessor-pairs`][55]                                     | `error`  | `"anyOrder", {"enforceForTSTypes":false}`                                 |
| [`guard-for-in`][56]                                               | `error`  |                                                                           |
| [`id-length`][57]                                                  | `warn`   | [see Config][config]                                                      |
| [`import-x/default`][58]                                           | `error`  |                                                                           |
| [`import-x/export`][59]                                            | `error`  |                                                                           |
| [`import-x/first`][60]                                             | `error`  |                                                                           |
| [`import-x/namespace`][61]                                         | `error`  |                                                                           |
| [`import-x/newline-after-import`][62]                              | `error`  |                                                                           |
| [`import-x/no-absolute-path`][63]                                  | `error`  |                                                                           |
| [`import-x/no-amd`][64]                                            | `error`  |                                                                           |
| [`import-x/no-cycle`][65]                                          | `error`  |                                                                           |
| [`import-x/no-duplicates`][66]                                     | `error`  |                                                                           |
| [`import-x/no-dynamic-require`][67]                                | `error`  |                                                                           |
| [`import-x/no-extraneous-dependencies`][68]                        | `error`  | [see Config][config]                                                      |
| [`import-x/no-import-module-exports`][69]                          | `error`  | `{"exceptions":[]}`                                                       |
| [`import-x/no-mutable-exports`][70]                                | `error`  |                                                                           |
| [`import-x/no-named-as-default`][71]                               | `error`  |                                                                           |
| [`import-x/no-named-default`][72]                                  | `error`  |                                                                           |
| [`import-x/no-relative-packages`][73]                              | `error`  |                                                                           |
| [`import-x/no-self-import`][74]                                    | `error`  |                                                                           |
| [`import-x/no-unresolved`][75]                                     | `error`  | `{"commonjs":true,"caseSensitive":true}`                                  |
| [`import-x/no-useless-path-segments`][76]                          | `error`  | `{"commonjs":true}`                                                       |
| [`import-x/no-webpack-loader-syntax`][77]                          | `error`  |                                                                           |
| [`import-x/order`][78]                                             | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/alt-text`][79]                                          | `error`  |                                                                           |
| [`jsx-a11y/anchor-has-content`][80]                                | `error`  |                                                                           |
| [`jsx-a11y/anchor-is-valid`][81]                                   | `error`  |                                                                           |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][82]                | `error`  |                                                                           |
| [`jsx-a11y/aria-props`][83]                                        | `error`  |                                                                           |
| [`jsx-a11y/aria-proptypes`][84]                                    | `error`  |                                                                           |
| [`jsx-a11y/aria-role`][85]                                         | `error`  |                                                                           |
| [`jsx-a11y/aria-unsupported-elements`][86]                         | `error`  |                                                                           |
| [`jsx-a11y/autocomplete-valid`][87]                                | `error`  |                                                                           |
| [`jsx-a11y/click-events-have-key-events`][88]                      | `error`  |                                                                           |
| [`jsx-a11y/control-has-associated-label`][89]                      | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/heading-has-content`][90]                               | `error`  |                                                                           |
| [`jsx-a11y/html-has-lang`][91]                                     | `error`  |                                                                           |
| [`jsx-a11y/iframe-has-title`][92]                                  | `error`  |                                                                           |
| [`jsx-a11y/img-redundant-alt`][93]                                 | `error`  |                                                                           |
| [`jsx-a11y/interactive-supports-focus`][94]                        | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/label-has-associated-control`][95]                      | `error`  | `{"assert":"both","depth":25}`                                            |
| [`jsx-a11y/lang`][96]                                              | `error`  |                                                                           |
| [`jsx-a11y/media-has-caption`][97]                                 | `error`  |                                                                           |
| [`jsx-a11y/mouse-events-have-key-events`][98]                      | `error`  |                                                                           |
| [`jsx-a11y/no-access-key`][99]                                     | `error`  |                                                                           |
| [`jsx-a11y/no-autofocus`][100]                                     | `error`  |                                                                           |
| [`jsx-a11y/no-distracting-elements`][101]                          | `error`  |                                                                           |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][102]    | `error`  | `{"tr":["none","presentation"],"canvas":["img"]}`                         |
| [`jsx-a11y/no-noninteractive-element-interactions`][103]           | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][104]    | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-tabindex`][105]                       | `error`  | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`           |
| [`jsx-a11y/no-redundant-roles`][106]                               | `error`  |                                                                           |
| [`jsx-a11y/no-static-element-interactions`][107]                   | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/role-has-required-aria-props`][108]                     | `error`  |                                                                           |
| [`jsx-a11y/role-supports-aria-props`][109]                         | `error`  |                                                                           |
| [`jsx-a11y/scope`][110]                                            | `error`  |                                                                           |
| [`jsx-a11y/tabindex-no-positive`][111]                             | `error`  |                                                                           |
| [`lines-between-class-members`][112]                               | `error`  | `"always", {"exceptAfterSingleLine":true}`                                |
| [`new-cap`][113]                                                   | `error`  | [see Config][config]                                                      |
| [`no-alert`][114]                                                  | `warn`   |                                                                           |
| [`no-async-promise-executor`][115]                                 | `error`  |                                                                           |
| [`no-await-in-loop`][116]                                          | `error`  |                                                                           |
| [`no-bitwise`][117]                                                | `error`  | `{"allow":[],"int32Hint":false}`                                          |
| [`no-caller`][118]                                                 | `error`  |                                                                           |
| [`no-case-declarations`][119]                                      | `error`  |                                                                           |
| [`no-class-assign`][120]                                           | `error`  |                                                                           |
| [`no-compare-neg-zero`][121]                                       | `error`  |                                                                           |
| [`no-cond-assign`][122]                                            | `error`  | `"always"`                                                                |
| [`no-console`][123]                                                | `warn`   | `{}`                                                                      |
| [`no-const-assign`][124]                                           | `error`  |                                                                           |
| [`no-constant-binary-expression`][125]                             | `error`  |                                                                           |
| [`no-constant-condition`][126]                                     | `error`  | `{"checkLoops":"allExceptWhileTrue"}`                                     |
| [`no-constructor-return`][127]                                     | `error`  |                                                                           |
| [`no-continue`][128]                                               | `error`  |                                                                           |
| [`no-control-regex`][129]                                          | `error`  |                                                                           |
| [`no-debugger`][130]                                               | `error`  |                                                                           |
| [`no-delete-var`][131]                                             | `error`  |                                                                           |
| [`no-dupe-args`][132]                                              | `error`  |                                                                           |
| [`no-dupe-class-members`][133]                                     | `error`  |                                                                           |
| [`no-dupe-else-if`][134]                                           | `error`  |                                                                           |
| [`no-dupe-keys`][135]                                              | `error`  |                                                                           |
| [`no-duplicate-case`][136]                                         | `error`  |                                                                           |
| [`no-else-return`][137]                                            | `error`  | `{"allowElseIf":false}`                                                   |
| [`no-empty`][138]                                                  | `error`  | `{"allowEmptyCatch":false}`                                               |
| [`no-empty-character-class`][139]                                  | `error`  |                                                                           |
| [`no-empty-pattern`][140]                                          | `error`  | `{"allowObjectPatternsAsParameters":false}`                               |
| [`no-empty-static-block`][141]                                     | `error`  |                                                                           |
| [`no-eval`][142]                                                   | `error`  | `{"allowIndirect":false}`                                                 |
| [`no-ex-assign`][143]                                              | `error`  |                                                                           |
| [`no-extend-native`][144]                                          | `error`  | `{"exceptions":[]}`                                                       |
| [`no-extra-bind`][145]                                             | `error`  |                                                                           |
| [`no-extra-boolean-cast`][146]                                     | `error`  | `{}`                                                                      |
| [`no-extra-label`][147]                                            | `error`  |                                                                           |
| [`no-fallthrough`][148]                                            | `error`  | `{"allowEmptyCase":false,"reportUnusedFallthroughComment":false}`         |
| [`no-func-assign`][149]                                            | `error`  |                                                                           |
| [`no-global-assign`][150]                                          | `error`  | `{"exceptions":[]}`                                                       |
| [`no-implied-eval`][151]                                           | `error`  |                                                                           |
| [`no-import-assign`][152]                                          | `error`  |                                                                           |
| [`no-inner-declarations`][153]                                     | `error`  | `"functions", {"blockScopedFunctions":"allow"}`                           |
| [`no-invalid-regexp`][154]                                         | `error`  | `{}`                                                                      |
| [`no-irregular-whitespace`][155]                                   | `error`  | [see Config][config]                                                      |
| [`no-iterator`][156]                                               | `error`  |                                                                           |
| [`no-label-var`][157]                                              | `error`  |                                                                           |
| [`no-labels`][158]                                                 | `error`  | `{"allowLoop":false,"allowSwitch":false}`                                 |
| [`no-lone-blocks`][159]                                            | `error`  |                                                                           |
| [`no-lonely-if`][160]                                              | `error`  |                                                                           |
| [`no-loop-func`][161]                                              | `error`  |                                                                           |
| [`no-loss-of-precision`][162]                                      | `error`  |                                                                           |
| [`no-misleading-character-class`][163]                             | `error`  | `{"allowEscape":false}`                                                   |
| [`no-multi-assign`][164]                                           | `error`  | `{"ignoreNonDeclaration":false}`                                          |
| [`no-multi-str`][165]                                              | `error`  |                                                                           |
| [`no-nested-ternary`][166]                                         | `error`  |                                                                           |
| [`no-new`][167]                                                    | `warn`   |                                                                           |
| [`no-new-func`][168]                                               | `error`  |                                                                           |
| [`no-new-native-nonconstructor`][169]                              | `error`  |                                                                           |
| [`no-new-wrappers`][170]                                           | `error`  |                                                                           |
| [`no-nonoctal-decimal-escape`][171]                                | `error`  |                                                                           |
| [`no-obj-calls`][172]                                              | `error`  |                                                                           |
| [`no-object-constructor`][173]                                     | `error`  |                                                                           |
| [`no-octal`][174]                                                  | `error`  |                                                                           |
| [`no-octal-escape`][175]                                           | `error`  |                                                                           |
| [`no-param-reassign`][176]                                         | `error`  |                                                                           |
| [`no-plusplus`][177]                                               | `error`  | `{"allowForLoopAfterthoughts":false}`                                     |
| [`no-promise-executor-return`][178]                                | `error`  | `{"allowVoid":false}`                                                     |
| [`no-proto`][179]                                                  | `error`  |                                                                           |
| [`no-prototype-builtins`][180]                                     | `error`  |                                                                           |
| [`no-redeclare`][181]                                              | `error`  | `{"builtinGlobals":true}`                                                 |
| [`no-regex-spaces`][182]                                           | `error`  |                                                                           |
| [`no-restricted-exports`][183]                                     | `error`  | `{"restrictedNamedExports":["default","then"]}`                           |
| [`no-restricted-globals`][184]                                     | `error`  | [see Config][config]                                                      |
| [`no-restricted-properties`][185]                                  | `error`  | [see Config][config]                                                      |
| [`no-restricted-syntax`][186]                                      | `error`  | [see Config][config]                                                      |
| [`no-return-assign`][187]                                          | `error`  | `"always"`                                                                |
| [`no-script-url`][188]                                             | `error`  |                                                                           |
| [`no-self-assign`][189]                                            | `error`  | `{"props":true}`                                                          |
| [`no-self-compare`][190]                                           | `error`  |                                                                           |
| [`no-sequences`][191]                                              | `error`  | `{"allowInParentheses":true}`                                             |
| [`no-setter-return`][192]                                          | `error`  |                                                                           |
| [`no-shadow-restricted-names`][193]                                | `error`  | `{"reportGlobalThis":false}`                                              |
| [`no-sparse-arrays`][194]                                          | `error`  |                                                                           |
| [`no-template-curly-in-string`][195]                               | `error`  |                                                                           |
| [`no-this-before-super`][196]                                      | `error`  |                                                                           |
| [`no-undef`][197]                                                  | `error`  | `{"typeof":false}`                                                        |
| [`no-undef-init`][198]                                             | `error`  |                                                                           |
| [`no-underscore-dangle`][199]                                      | `error`  | [see Config][config]                                                      |
| [`no-unneeded-ternary`][200]                                       | `error`  | `{"defaultAssignment":false}`                                             |
| [`no-unreachable`][201]                                            | `error`  |                                                                           |
| [`no-unreachable-loop`][202]                                       | `error`  | `{"ignore":[]}`                                                           |
| [`no-unsafe-finally`][203]                                         | `error`  |                                                                           |
| [`no-unsafe-negation`][204]                                        | `error`  | `{"enforceForOrderingRelations":false}`                                   |
| [`no-unsafe-optional-chaining`][205]                               | `error`  | `{"disallowArithmeticOperators":true}`                                    |
| [`no-unused-labels`][206]                                          | `error`  |                                                                           |
| [`no-unused-private-class-members`][207]                           | `error`  |                                                                           |
| [`no-useless-backreference`][208]                                  | `error`  |                                                                           |
| [`no-useless-catch`][209]                                          | `error`  |                                                                           |
| [`no-useless-computed-key`][210]                                   | `error`  | `{"enforceForClassMembers":true}`                                         |
| [`no-useless-concat`][211]                                         | `error`  |                                                                           |
| [`no-useless-escape`][212]                                         | `error`  | `{"allowRegexCharacters":[]}`                                             |
| [`no-useless-rename`][213]                                         | `error`  | `{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}` |
| [`no-useless-return`][214]                                         | `error`  |                                                                           |
| [`no-void`][215]                                                   | `error`  | `{"allowAsStatement":false}`                                              |
| [`no-with`][216]                                                   | `error`  |                                                                           |
| [`object-shorthand`][217]                                          | `error`  | `"methods"`                                                               |
| [`one-var`][218]                                                   | `error`  | `"never"`                                                                 |
| [`operator-assignment`][219]                                       | `error`  | `"always"`                                                                |
| [`prefer-arrow-callback`][220]                                     | `error`  | `{"allowNamedFunctions":false,"allowUnboundThis":true}`                   |
| [`prefer-const`][221]                                              | `error`  | `{"destructuring":"any","ignoreReadBeforeAssign":true}`                   |
| [`prefer-exponentiation-operator`][222]                            | `error`  |                                                                           |
| [`prefer-numeric-literals`][223]                                   | `error`  |                                                                           |
| [`prefer-object-spread`][224]                                      | `error`  |                                                                           |
| [`prefer-promise-reject-errors`][225]                              | `error`  | `{"allowEmptyReject":true}`                                               |
| [`prefer-regex-literals`][226]                                     | `error`  | `{"disallowRedundantWrapping":true}`                                      |
| [`prefer-rest-params`][227]                                        | `error`  |                                                                           |
| [`prefer-spread`][228]                                             | `error`  |                                                                           |
| [`radix`][229]                                                     | `error`  | `"always"`                                                                |
| [`react-hooks/component-hook-factories`][230]                      | `error`  |                                                                           |
| [`react-hooks/config`][231]                                        | `error`  |                                                                           |
| [`react-hooks/error-boundaries`][232]                              | `error`  |                                                                           |
| [`react-hooks/exhaustive-deps`][233]                               | `error`  |                                                                           |
| [`react-hooks/gating`][234]                                        | `error`  |                                                                           |
| [`react-hooks/globals`][235]                                       | `error`  |                                                                           |
| [`react-hooks/immutability`][236]                                  | `error`  |                                                                           |
| [`react-hooks/incompatible-library`][237]                          | `warn`   |                                                                           |
| [`react-hooks/preserve-manual-memoization`][238]                   | `error`  |                                                                           |
| [`react-hooks/purity`][239]                                        | `error`  |                                                                           |
| [`react-hooks/refs`][240]                                          | `error`  |                                                                           |
| [`react-hooks/rules-of-hooks`][241]                                | `error`  |                                                                           |
| [`react-hooks/set-state-in-effect`][242]                           | `error`  |                                                                           |
| [`react-hooks/set-state-in-render`][243]                           | `error`  |                                                                           |
| [`react-hooks/static-components`][244]                             | `error`  |                                                                           |
| [`react-hooks/unsupported-syntax`][245]                            | `warn`   |                                                                           |
| [`react-hooks/use-memo`][246]                                      | `error`  |                                                                           |
| [`react/button-has-type`][247]                                     | `error`  | `{"reset":false,"button":true,"submit":true}`                             |
| [`react/default-props-match-prop-types`][248]                      | `error`  | `{"allowRequiredDefaults":false}`                                         |
| [`react/destructuring-assignment`][249]                            | `error`  |                                                                           |
| [`react/display-name`][250]                                        | `error`  |                                                                           |
| [`react/forbid-foreign-prop-types`][251]                           | `warn`   | `{"allowInPropTypes":true}`                                               |
| [`react/forbid-prop-types`][252]                                   | `error`  | `{"checkContextTypes":true,"checkChildContextTypes":true}`                |
| [`react/function-component-definition`][253]                       | `error`  | [see Config][config]                                                      |
| [`react/hook-use-state`][254]                                      | `error`  |                                                                           |
| [`react/jsx-curly-brace-presence`][255]                            | `error`  | `{"props":"never","children":"never"}`                                    |
| [`react/jsx-filename-extension`][256]                              | `error`  |                                                                           |
| [`react/jsx-fragments`][257]                                       | `error`  |                                                                           |
| [`react/jsx-key`][258]                                             | `error`  |                                                                           |
| [`react/jsx-no-comment-textnodes`][259]                            | `error`  |                                                                           |
| [`react/jsx-no-constructed-context-values`][260]                   | `error`  |                                                                           |
| [`react/jsx-no-duplicate-props`][261]                              | `error`  | `{"ignoreCase":true}`                                                     |
| [`react/jsx-no-script-url`][262]                                   | `error`  |                                                                           |
| [`react/jsx-no-target-blank`][263]                                 | `error`  |                                                                           |
| [`react/jsx-no-undef`][264]                                        | `error`  |                                                                           |
| [`react/jsx-no-useless-fragment`][265]                             | `error`  |                                                                           |
| [`react/jsx-pascal-case`][266]                                     | `error`  | `{"allowAllCaps":true}`                                                   |
| [`react/jsx-props-no-spreading`][267]                              | `error`  | `{"explicitSpread":"ignore"}`                                             |
| [`react/jsx-uses-react`][268]                                      | `error`  |                                                                           |
| [`react/jsx-uses-vars`][269]                                       | `error`  |                                                                           |
| [`react/no-access-state-in-setstate`][270]                         | `error`  |                                                                           |
| [`react/no-array-index-key`][271]                                  | `error`  |                                                                           |
| [`react/no-arrow-function-lifecycle`][272]                         | `error`  |                                                                           |
| [`react/no-children-prop`][273]                                    | `error`  |                                                                           |
| [`react/no-danger`][274]                                           | `warn`   |                                                                           |
| [`react/no-danger-with-children`][275]                             | `error`  |                                                                           |
| [`react/no-deprecated`][276]                                       | `error`  |                                                                           |
| [`react/no-did-update-set-state`][277]                             | `error`  |                                                                           |
| [`react/no-direct-mutation-state`][278]                            | `error`  |                                                                           |
| [`react/no-find-dom-node`][279]                                    | `error`  |                                                                           |
| [`react/no-invalid-html-attribute`][280]                           | `error`  |                                                                           |
| [`react/no-is-mounted`][281]                                       | `error`  |                                                                           |
| [`react/no-namespace`][282]                                        | `error`  |                                                                           |
| [`react/no-redundant-should-component-update`][283]                | `error`  |                                                                           |
| [`react/no-render-return-value`][284]                              | `error`  |                                                                           |
| [`react/no-string-refs`][285]                                      | `error`  |                                                                           |
| [`react/no-this-in-sfc`][286]                                      | `error`  |                                                                           |
| [`react/no-typos`][287]                                            | `error`  |                                                                           |
| [`react/no-unescaped-entities`][288]                               | `error`  |                                                                           |
| [`react/no-unknown-property`][289]                                 | `error`  |                                                                           |
| [`react/no-unstable-nested-components`][290]                       | `error`  |                                                                           |
| [`react/no-unused-class-component-methods`][291]                   | `error`  |                                                                           |
| [`react/no-unused-prop-types`][292]                                | `error`  |                                                                           |
| [`react/no-unused-state`][293]                                     | `error`  |                                                                           |
| [`react/no-will-update-set-state`][294]                            | `error`  |                                                                           |
| [`react/prefer-exact-props`][295]                                  | `error`  |                                                                           |
| [`react/prefer-stateless-function`][296]                           | `error`  | `{"ignorePureComponents":true}`                                           |
| [`react/react-in-jsx-scope`][297]                                  | `error`  |                                                                           |
| [`react/require-default-props`][298]                               | `error`  | `{"forbidDefaultForRequired":true}`                                       |
| [`react/require-render-return`][299]                               | `error`  |                                                                           |
| [`react/self-closing-comp`][300]                                   | `error`  |                                                                           |
| [`react/state-in-constructor`][301]                                | `error`  |                                                                           |
| [`react/static-property-placement`][302]                           | `error`  | `"property assignment"`                                                   |
| [`react/style-prop-object`][303]                                   | `error`  |                                                                           |
| [`react/void-dom-elements-no-children`][304]                       | `error`  |                                                                           |
| [`require-yield`][305]                                             | `error`  |                                                                           |
| [`spaced-comment`][306]                                            | `error`  | [see Config][config]                                                      |
| [`strict`][307]                                                    | `error`  | `"never"`                                                                 |
| [`symbol-description`][308]                                        | `error`  |                                                                           |
| [`unicode-bom`][309]                                               | `error`  | `"never"`                                                                 |
| [`use-isnan`][310]                                                 | `error`  | `{"enforceForIndexOf":false,"enforceForSwitchCase":true}`                 |
| [`valid-typeof`][311]                                              | `error`  | `{"requireStringLiterals":true}`                                          |
| [`vars-on-top`][312]                                               | `error`  |                                                                           |
| [`yoda`][313]                                                      | `error`  | `"never", {"exceptRange":false,"onlyEquality":false}`                     |

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
[0]: https://typescript-eslint.io/rules/adjacent-overload-signatures/
[1]: https://typescript-eslint.io/rules/array-type/
[2]: https://typescript-eslint.io/rules/ban-ts-comment/
[3]: https://typescript-eslint.io/rules/ban-tslint-comment/
[4]: https://typescript-eslint.io/rules/class-literal-property-style/
[5]: https://typescript-eslint.io/rules/consistent-generic-constructors/
[6]: https://typescript-eslint.io/rules/consistent-type-assertions/
[7]: https://typescript-eslint.io/rules/consistent-type-definitions/
[8]: https://typescript-eslint.io/rules/no-array-constructor/
[9]: https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
[10]: https://typescript-eslint.io/rules/no-duplicate-enum-values/
[11]: https://typescript-eslint.io/rules/no-dynamic-delete/
[12]: https://typescript-eslint.io/rules/no-empty-function/
[13]: https://typescript-eslint.io/rules/no-empty-object-type/
[14]: https://typescript-eslint.io/rules/no-explicit-any/
[15]: https://typescript-eslint.io/rules/no-extra-non-null-assertion/
[16]: https://typescript-eslint.io/rules/no-extraneous-class/
[17]: https://typescript-eslint.io/rules/no-inferrable-types/
[18]: https://typescript-eslint.io/rules/no-invalid-void-type/
[19]: https://typescript-eslint.io/rules/no-misused-new/
[20]: https://typescript-eslint.io/rules/no-namespace/
[21]: https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
[22]: https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
[23]: https://typescript-eslint.io/rules/no-require-imports/
[24]: https://typescript-eslint.io/rules/no-shadow/
[25]: https://typescript-eslint.io/rules/no-this-alias/
[26]: https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
[27]: https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
[28]: https://typescript-eslint.io/rules/no-unsafe-function-type/
[29]: https://typescript-eslint.io/rules/no-unused-expressions/
[30]: https://typescript-eslint.io/rules/no-unused-vars/
[31]: https://typescript-eslint.io/rules/no-use-before-define/
[32]: https://typescript-eslint.io/rules/no-useless-constructor/
[33]: https://typescript-eslint.io/rules/no-wrapper-object-types/
[34]: https://typescript-eslint.io/rules/prefer-as-const/
[35]: https://typescript-eslint.io/rules/prefer-for-of/
[36]: https://typescript-eslint.io/rules/prefer-function-type/
[37]: https://typescript-eslint.io/rules/prefer-literal-enum-member/
[38]: https://typescript-eslint.io/rules/prefer-namespace-keyword/
[39]: https://typescript-eslint.io/rules/triple-slash-reference/
[40]: https://typescript-eslint.io/rules/unified-signatures/
[41]: https://eslint.org/docs/latest/rules/array-callback-return
[42]: https://eslint.org/docs/latest/rules/arrow-body-style
[43]: https://eslint.org/docs/latest/rules/block-scoped-var
[44]: https://eslint.org/docs/latest/rules/camelcase
[45]: https://eslint.org/docs/latest/rules/consistent-return
[46]: https://eslint.org/docs/latest/rules/constructor-super
[47]: https://eslint.org/docs/latest/rules/default-case
[48]: https://eslint.org/docs/latest/rules/default-case-last
[49]: https://eslint.org/docs/latest/rules/default-param-last
[50]: https://eslint.org/docs/latest/rules/dot-notation
[51]: https://eslint.org/docs/latest/rules/eqeqeq
[52]: https://eslint.org/docs/latest/rules/for-direction
[53]: https://eslint.org/docs/latest/rules/func-names
[54]: https://eslint.org/docs/latest/rules/getter-return
[55]: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
[56]: https://eslint.org/docs/latest/rules/guard-for-in
[57]: https://eslint.org/docs/latest/rules/id-length
[58]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
[59]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
[60]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
[61]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
[62]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
[63]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
[64]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
[65]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
[66]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
[67]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
[68]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
[69]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
[70]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
[71]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
[72]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
[73]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
[74]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
[75]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
[76]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
[77]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
[78]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
[79]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[80]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[81]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[82]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[83]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[84]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[85]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[86]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[87]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
[88]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[89]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
[90]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[91]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[92]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[93]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[94]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[95]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[96]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
[97]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[98]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[99]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[100]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[101]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[102]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[103]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[104]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[105]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[106]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[107]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[108]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[109]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[110]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[111]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[112]: https://eslint.org/docs/latest/rules/lines-between-class-members
[113]: https://eslint.org/docs/latest/rules/new-cap
[114]: https://eslint.org/docs/latest/rules/no-alert
[115]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[116]: https://eslint.org/docs/latest/rules/no-await-in-loop
[117]: https://eslint.org/docs/latest/rules/no-bitwise
[118]: https://eslint.org/docs/latest/rules/no-caller
[119]: https://eslint.org/docs/latest/rules/no-case-declarations
[120]: https://eslint.org/docs/latest/rules/no-class-assign
[121]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[122]: https://eslint.org/docs/latest/rules/no-cond-assign
[123]: https://eslint.org/docs/latest/rules/no-console
[124]: https://eslint.org/docs/latest/rules/no-const-assign
[125]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[126]: https://eslint.org/docs/latest/rules/no-constant-condition
[127]: https://eslint.org/docs/latest/rules/no-constructor-return
[128]: https://eslint.org/docs/latest/rules/no-continue
[129]: https://eslint.org/docs/latest/rules/no-control-regex
[130]: https://eslint.org/docs/latest/rules/no-debugger
[131]: https://eslint.org/docs/latest/rules/no-delete-var
[132]: https://eslint.org/docs/latest/rules/no-dupe-args
[133]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[134]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[135]: https://eslint.org/docs/latest/rules/no-dupe-keys
[136]: https://eslint.org/docs/latest/rules/no-duplicate-case
[137]: https://eslint.org/docs/latest/rules/no-else-return
[138]: https://eslint.org/docs/latest/rules/no-empty
[139]: https://eslint.org/docs/latest/rules/no-empty-character-class
[140]: https://eslint.org/docs/latest/rules/no-empty-pattern
[141]: https://eslint.org/docs/latest/rules/no-empty-static-block
[142]: https://eslint.org/docs/latest/rules/no-eval
[143]: https://eslint.org/docs/latest/rules/no-ex-assign
[144]: https://eslint.org/docs/latest/rules/no-extend-native
[145]: https://eslint.org/docs/latest/rules/no-extra-bind
[146]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[147]: https://eslint.org/docs/latest/rules/no-extra-label
[148]: https://eslint.org/docs/latest/rules/no-fallthrough
[149]: https://eslint.org/docs/latest/rules/no-func-assign
[150]: https://eslint.org/docs/latest/rules/no-global-assign
[151]: https://eslint.org/docs/latest/rules/no-implied-eval
[152]: https://eslint.org/docs/latest/rules/no-import-assign
[153]: https://eslint.org/docs/latest/rules/no-inner-declarations
[154]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[155]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[156]: https://eslint.org/docs/latest/rules/no-iterator
[157]: https://eslint.org/docs/latest/rules/no-label-var
[158]: https://eslint.org/docs/latest/rules/no-labels
[159]: https://eslint.org/docs/latest/rules/no-lone-blocks
[160]: https://eslint.org/docs/latest/rules/no-lonely-if
[161]: https://eslint.org/docs/latest/rules/no-loop-func
[162]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[163]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[164]: https://eslint.org/docs/latest/rules/no-multi-assign
[165]: https://eslint.org/docs/latest/rules/no-multi-str
[166]: https://eslint.org/docs/latest/rules/no-nested-ternary
[167]: https://eslint.org/docs/latest/rules/no-new
[168]: https://eslint.org/docs/latest/rules/no-new-func
[169]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[170]: https://eslint.org/docs/latest/rules/no-new-wrappers
[171]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[172]: https://eslint.org/docs/latest/rules/no-obj-calls
[173]: https://eslint.org/docs/latest/rules/no-object-constructor
[174]: https://eslint.org/docs/latest/rules/no-octal
[175]: https://eslint.org/docs/latest/rules/no-octal-escape
[176]: https://eslint.org/docs/latest/rules/no-param-reassign
[177]: https://eslint.org/docs/latest/rules/no-plusplus
[178]: https://eslint.org/docs/latest/rules/no-promise-executor-return
[179]: https://eslint.org/docs/latest/rules/no-proto
[180]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[181]: https://eslint.org/docs/latest/rules/no-redeclare
[182]: https://eslint.org/docs/latest/rules/no-regex-spaces
[183]: https://eslint.org/docs/latest/rules/no-restricted-exports
[184]: https://eslint.org/docs/latest/rules/no-restricted-globals
[185]: https://eslint.org/docs/latest/rules/no-restricted-properties
[186]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[187]: https://eslint.org/docs/latest/rules/no-return-assign
[188]: https://eslint.org/docs/latest/rules/no-script-url
[189]: https://eslint.org/docs/latest/rules/no-self-assign
[190]: https://eslint.org/docs/latest/rules/no-self-compare
[191]: https://eslint.org/docs/latest/rules/no-sequences
[192]: https://eslint.org/docs/latest/rules/no-setter-return
[193]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[194]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[195]: https://eslint.org/docs/latest/rules/no-template-curly-in-string
[196]: https://eslint.org/docs/latest/rules/no-this-before-super
[197]: https://eslint.org/docs/latest/rules/no-undef
[198]: https://eslint.org/docs/latest/rules/no-undef-init
[199]: https://eslint.org/docs/latest/rules/no-underscore-dangle
[200]: https://eslint.org/docs/latest/rules/no-unneeded-ternary
[201]: https://eslint.org/docs/latest/rules/no-unreachable
[202]: https://eslint.org/docs/latest/rules/no-unreachable-loop
[203]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[204]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[205]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[206]: https://eslint.org/docs/latest/rules/no-unused-labels
[207]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[208]: https://eslint.org/docs/latest/rules/no-useless-backreference
[209]: https://eslint.org/docs/latest/rules/no-useless-catch
[210]: https://eslint.org/docs/latest/rules/no-useless-computed-key
[211]: https://eslint.org/docs/latest/rules/no-useless-concat
[212]: https://eslint.org/docs/latest/rules/no-useless-escape
[213]: https://eslint.org/docs/latest/rules/no-useless-rename
[214]: https://eslint.org/docs/latest/rules/no-useless-return
[215]: https://eslint.org/docs/latest/rules/no-void
[216]: https://eslint.org/docs/latest/rules/no-with
[217]: https://eslint.org/docs/latest/rules/object-shorthand
[218]: https://eslint.org/docs/latest/rules/one-var
[219]: https://eslint.org/docs/latest/rules/operator-assignment
[220]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[221]: https://eslint.org/docs/latest/rules/prefer-const
[222]: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
[223]: https://eslint.org/docs/latest/rules/prefer-numeric-literals
[224]: https://eslint.org/docs/latest/rules/prefer-object-spread
[225]: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
[226]: https://eslint.org/docs/latest/rules/prefer-regex-literals
[227]: https://eslint.org/docs/latest/rules/prefer-rest-params
[228]: https://eslint.org/docs/latest/rules/prefer-spread
[229]: https://eslint.org/docs/latest/rules/radix
[230]: https://react.dev/reference/eslint-plugin-react-hooks/lints/component-hook-factories
[231]: https://react.dev/reference/eslint-plugin-react-hooks/lints/config
[232]: https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
[233]: https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
[234]: https://react.dev/reference/eslint-plugin-react-hooks/lints/gating
[235]: https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
[236]: https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
[237]: https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
[238]: https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
[239]: https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
[240]: https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
[241]: https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks
[242]: https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
[243]: https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
[244]: https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
[245]: https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
[246]: https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
[247]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
[248]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
[249]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
[250]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
[251]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
[252]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
[253]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
[254]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
[255]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[256]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
[257]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
[258]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
[259]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[260]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
[261]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[262]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
[263]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[264]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[265]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
[266]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[267]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
[268]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[269]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[270]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
[271]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
[272]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
[273]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[274]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
[275]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[276]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[277]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
[278]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
[279]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[280]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
[281]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[282]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
[283]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
[284]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[285]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[286]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
[287]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
[288]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[289]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[290]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
[291]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
[292]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
[293]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
[294]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
[295]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
[296]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
[297]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[298]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
[299]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[300]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
[301]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
[302]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
[303]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
[304]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
[305]: https://eslint.org/docs/latest/rules/require-yield
[306]: https://eslint.org/docs/latest/rules/spaced-comment
[307]: https://eslint.org/docs/latest/rules/strict
[308]: https://eslint.org/docs/latest/rules/symbol-description
[309]: https://eslint.org/docs/latest/rules/unicode-bom
[310]: https://eslint.org/docs/latest/rules/use-isnan
[311]: https://eslint.org/docs/latest/rules/valid-typeof
[312]: https://eslint.org/docs/latest/rules/vars-on-top
[313]: https://eslint.org/docs/latest/rules/yoda
