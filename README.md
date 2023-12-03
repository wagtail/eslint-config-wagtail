# [@wagtail/eslint-config-wagtail](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [<img src="https://raw.githubusercontent.com/wagtail/eslint-config-wagtail/main/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![npm](https://img.shields.io/npm/v/@wagtail/eslint-config-wagtail.svg)](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail) [![Build status](https://github.com/wagtail/eslint-config-wagtail/workflows/CI/badge.svg)](https://github.com/wagtail/eslint-config-wagtail/actions)

> Shareable ESLint config for Wagtail, based on airbnb/javascript.

The package provides Wagtail's `.eslintrc` as an extensible shared config.

- [Usage](#usage)
- [Links](#links)
- [Code style](#code-style)
- [Contribution Guidelines](#contribution-guidelines)
  - [Install](#install)
  - [Development](#development)
- [Rules](#rules)

## Usage

Our default export contains all of our ESLint rules, including Airbnb's config
(which has ECMAScript 6 and React). It requires `eslint`, as well as the configuration’s peer dependencies.

```sh
# npm v7 and up:
npm install --save-dev @wagtail/eslint-config-wagtail@latest
# npm v6 and below:
npx install-peerdeps --dev @wagtail/eslint-config-wagtail@latest
```

## Links

- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)

## Code style

Write JavaScript according to the [Airbnb Styleguide](https://github.com/airbnb/javascript), with some exceptions:

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
- Note: When working with the rule set, only modify the `index.js` file, not the `.eslintrc` file as it is for local linting only

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                           | Severity | Config                                                                    |
| -------------------------------------------------------------- | -------- | ------------------------------------------------------------------------- |
| [`array-callback-return`][0]                                   | `error`  | `{"allowImplicit":true,"checkForEach":false,"allowVoid":false}`           |
| [`arrow-body-style`][1]                                        | `error`  | `"as-needed", {"requireReturnForObjectLiteral":false}`                    |
| [`block-scoped-var`][2]                                        | `error`  |                                                                           |
| [`camelcase`][3]                                               | `error`  | [see Config][config]                                                      |
| [`consistent-return`][4]                                       | `error`  |                                                                           |
| [`constructor-super`][5]                                       | `error`  |                                                                           |
| [`default-case`][6]                                            | `error`  | `{"commentPattern":"^no default$"}`                                       |
| [`default-case-last`][7]                                       | `error`  |                                                                           |
| [`default-param-last`][8]                                      | `error`  |                                                                           |
| [`dot-notation`][9]                                            | `error`  | `{"allowKeywords":true,"allowPattern":""}`                                |
| [`eqeqeq`][10]                                                 | `error`  | `"always", {"null":"ignore"}`                                             |
| [`for-direction`][11]                                          | `error`  |                                                                           |
| [`func-names`][12]                                             | `warn`   |                                                                           |
| [`getter-return`][13]                                          | `error`  | `{"allowImplicit":true}`                                                  |
| [`global-require`][14]                                         | `error`  |                                                                           |
| [`grouped-accessor-pairs`][15]                                 | `error`  |                                                                           |
| [`guard-for-in`][16]                                           | `error`  |                                                                           |
| [`id-length`][17]                                              | `warn`   | `{"min":2,"exceptions":["x","y","e","i","j","k","d","n","_","$"]}`        |
| [`import/export`][18]                                          | `error`  |                                                                           |
| [`import/extensions`][19]                                      | `error`  | `"ignorePackages", {"js":"never","mjs":"never","jsx":"never"}`            |
| [`import/first`][20]                                           | `error`  |                                                                           |
| [`import/named`][21]                                           | `error`  |                                                                           |
| [`import/newline-after-import`][22]                            | `error`  |                                                                           |
| [`import/no-absolute-path`][23]                                | `error`  |                                                                           |
| [`import/no-amd`][24]                                          | `error`  |                                                                           |
| [`import/no-cycle`][25]                                        | `error`  | [see Config][config]                                                      |
| [`import/no-duplicates`][26]                                   | `error`  |                                                                           |
| [`import/no-dynamic-require`][27]                              | `error`  |                                                                           |
| [`import/no-extraneous-dependencies`][28]                      | `error`  | [see Config][config]                                                      |
| [`import/no-import-module-exports`][29]                        | `error`  | `{"exceptions":[]}`                                                       |
| [`import/no-mutable-exports`][30]                              | `error`  |                                                                           |
| [`import/no-named-as-default`][31]                             | `error`  |                                                                           |
| [`import/no-named-as-default-member`][32]                      | `error`  |                                                                           |
| [`import/no-named-default`][33]                                | `error`  |                                                                           |
| [`import/no-relative-packages`][34]                            | `error`  |                                                                           |
| [`import/no-self-import`][35]                                  | `error`  |                                                                           |
| [`import/no-unresolved`][36]                                   | `error`  | `{"commonjs":true,"caseSensitive":true,"caseSensitiveStrict":false}`      |
| [`import/no-useless-path-segments`][37]                        | `error`  | `{"commonjs":true}`                                                       |
| [`import/no-webpack-loader-syntax`][38]                        | `error`  |                                                                           |
| [`import/order`][39]                                           | `error`  | [see Config][config]                                                      |
| [`import/prefer-default-export`][40]                           | `error`  |                                                                           |
| [`jsx-a11y/alt-text`][41]                                      | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/anchor-has-content`][42]                            | `error`  | `{"components":[]}`                                                       |
| [`jsx-a11y/anchor-is-valid`][43]                               | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][44]            | `error`  |                                                                           |
| [`jsx-a11y/aria-props`][45]                                    | `error`  |                                                                           |
| [`jsx-a11y/aria-proptypes`][46]                                | `error`  |                                                                           |
| [`jsx-a11y/aria-role`][47]                                     | `error`  | `{"ignoreNonDOM":false}`                                                  |
| [`jsx-a11y/aria-unsupported-elements`][48]                     | `error`  |                                                                           |
| [`jsx-a11y/click-events-have-key-events`][49]                  | `error`  |                                                                           |
| [`jsx-a11y/control-has-associated-label`][50]                  | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/heading-has-content`][51]                           | `error`  | `{"components":[""]}`                                                     |
| [`jsx-a11y/html-has-lang`][52]                                 | `error`  |                                                                           |
| [`jsx-a11y/iframe-has-title`][53]                              | `error`  |                                                                           |
| [`jsx-a11y/img-redundant-alt`][54]                             | `error`  |                                                                           |
| [`jsx-a11y/interactive-supports-focus`][55]                    | `error`  |                                                                           |
| [`jsx-a11y/label-has-associated-control`][56]                  | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/lang`][57]                                          | `error`  |                                                                           |
| [`jsx-a11y/media-has-caption`][58]                             | `error`  | `{"audio":[],"video":[],"track":[]}`                                      |
| [`jsx-a11y/mouse-events-have-key-events`][59]                  | `error`  |                                                                           |
| [`jsx-a11y/no-access-key`][60]                                 | `error`  |                                                                           |
| [`jsx-a11y/no-autofocus`][61]                                  | `error`  | `{"ignoreNonDOM":true}`                                                   |
| [`jsx-a11y/no-distracting-elements`][62]                       | `error`  | `{"elements":["marquee","blink"]}`                                        |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][63] | `error`  | `{"tr":["none","presentation"]}`                                          |
| [`jsx-a11y/no-noninteractive-element-interactions`][64]        | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][65] | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/no-noninteractive-tabindex`][66]                    | `error`  | `{"tags":[],"roles":["tabpanel"]}`                                        |
| [`jsx-a11y/no-redundant-roles`][67]                            | `error`  |                                                                           |
| [`jsx-a11y/no-static-element-interactions`][68]                | `error`  | [see Config][config]                                                      |
| [`jsx-a11y/role-has-required-aria-props`][69]                  | `error`  |                                                                           |
| [`jsx-a11y/role-supports-aria-props`][70]                      | `error`  |                                                                           |
| [`jsx-a11y/scope`][71]                                         | `error`  |                                                                           |
| [`jsx-a11y/tabindex-no-positive`][72]                          | `error`  |                                                                           |
| [`lines-around-directive`][73]                                 | `error`  | `{"before":"always","after":"always"}`                                    |
| [`lines-between-class-members`][74]                            | `error`  | `"always", {"exceptAfterSingleLine":false}`                               |
| [`new-cap`][75]                                                | `error`  | [see Config][config]                                                      |
| [`no-alert`][76]                                               | `warn`   |                                                                           |
| [`no-array-constructor`][77]                                   | `error`  |                                                                           |
| [`no-async-promise-executor`][78]                              | `error`  |                                                                           |
| [`no-await-in-loop`][79]                                       | `error`  |                                                                           |
| [`no-bitwise`][80]                                             | `error`  |                                                                           |
| [`no-buffer-constructor`][81]                                  | `error`  |                                                                           |
| [`no-caller`][82]                                              | `error`  |                                                                           |
| [`no-case-declarations`][83]                                   | `error`  |                                                                           |
| [`no-class-assign`][84]                                        | `error`  |                                                                           |
| [`no-compare-neg-zero`][85]                                    | `error`  |                                                                           |
| [`no-cond-assign`][86]                                         | `error`  | `"always"`                                                                |
| [`no-console`][87]                                             | `warn`   |                                                                           |
| [`no-const-assign`][88]                                        | `error`  |                                                                           |
| [`no-constant-binary-expression`][89]                          | `error`  |                                                                           |
| [`no-constant-condition`][90]                                  | `warn`   |                                                                           |
| [`no-constructor-return`][91]                                  | `error`  |                                                                           |
| [`no-continue`][92]                                            | `error`  |                                                                           |
| [`no-control-regex`][93]                                       | `error`  |                                                                           |
| [`no-debugger`][94]                                            | `error`  |                                                                           |
| [`no-delete-var`][95]                                          | `error`  |                                                                           |
| [`no-dupe-args`][96]                                           | `error`  |                                                                           |
| [`no-dupe-class-members`][97]                                  | `error`  |                                                                           |
| [`no-dupe-else-if`][98]                                        | `error`  |                                                                           |
| [`no-dupe-keys`][99]                                           | `error`  |                                                                           |
| [`no-duplicate-case`][100]                                     | `error`  |                                                                           |
| [`no-else-return`][101]                                        | `error`  | `{"allowElseIf":false}`                                                   |
| [`no-empty`][102]                                              | `error`  |                                                                           |
| [`no-empty-character-class`][103]                              | `error`  |                                                                           |
| [`no-empty-function`][104]                                     | `error`  | `{"allow":["arrowFunctions","functions","methods"]}`                      |
| [`no-empty-pattern`][105]                                      | `error`  |                                                                           |
| [`no-eval`][106]                                               | `error`  |                                                                           |
| [`no-ex-assign`][107]                                          | `error`  |                                                                           |
| [`no-extend-native`][108]                                      | `error`  |                                                                           |
| [`no-extra-bind`][109]                                         | `error`  |                                                                           |
| [`no-extra-boolean-cast`][110]                                 | `error`  |                                                                           |
| [`no-extra-label`][111]                                        | `error`  |                                                                           |
| [`no-fallthrough`][112]                                        | `error`  |                                                                           |
| [`no-func-assign`][113]                                        | `error`  |                                                                           |
| [`no-global-assign`][114]                                      | `error`  | `{"exceptions":[]}`                                                       |
| [`no-implied-eval`][115]                                       | `error`  |                                                                           |
| [`no-import-assign`][116]                                      | `error`  |                                                                           |
| [`no-inner-declarations`][117]                                 | `error`  |                                                                           |
| [`no-invalid-regexp`][118]                                     | `error`  |                                                                           |
| [`no-irregular-whitespace`][119]                               | `error`  |                                                                           |
| [`no-iterator`][120]                                           | `error`  |                                                                           |
| [`no-label-var`][121]                                          | `error`  |                                                                           |
| [`no-labels`][122]                                             | `error`  | `{"allowLoop":false,"allowSwitch":false}`                                 |
| [`no-lone-blocks`][123]                                        | `error`  |                                                                           |
| [`no-lonely-if`][124]                                          | `error`  |                                                                           |
| [`no-loop-func`][125]                                          | `error`  |                                                                           |
| [`no-loss-of-precision`][126]                                  | `error`  |                                                                           |
| [`no-misleading-character-class`][127]                         | `error`  |                                                                           |
| [`no-multi-assign`][128]                                       | `error`  |                                                                           |
| [`no-multi-str`][129]                                          | `error`  |                                                                           |
| [`no-nested-ternary`][130]                                     | `error`  |                                                                           |
| [`no-new`][131]                                                | `warn`   |                                                                           |
| [`no-new-func`][132]                                           | `error`  |                                                                           |
| [`no-new-object`][133]                                         | `error`  |                                                                           |
| [`no-new-require`][134]                                        | `error`  |                                                                           |
| [`no-new-symbol`][135]                                         | `error`  |                                                                           |
| [`no-new-wrappers`][136]                                       | `error`  |                                                                           |
| [`no-nonoctal-decimal-escape`][137]                            | `error`  |                                                                           |
| [`no-obj-calls`][138]                                          | `error`  |                                                                           |
| [`no-octal`][139]                                              | `error`  |                                                                           |
| [`no-octal-escape`][140]                                       | `error`  |                                                                           |
| [`no-param-reassign`][141]                                     | `error`  | [see Config][config]                                                      |
| [`no-path-concat`][142]                                        | `error`  |                                                                           |
| [`no-plusplus`][143]                                           | `error`  |                                                                           |
| [`no-promise-executor-return`][144]                            | `error`  |                                                                           |
| [`no-proto`][145]                                              | `error`  |                                                                           |
| [`no-prototype-builtins`][146]                                 | `error`  |                                                                           |
| [`no-redeclare`][147]                                          | `error`  |                                                                           |
| [`no-regex-spaces`][148]                                       | `error`  |                                                                           |
| [`no-restricted-exports`][149]                                 | `error`  | `{"restrictedNamedExports":["default","then"]}`                           |
| [`no-restricted-globals`][150]                                 | `error`  | [see Config][config]                                                      |
| [`no-restricted-properties`][151]                              | `error`  | [see Config][config]                                                      |
| [`no-restricted-syntax`][152]                                  | `error`  | [see Config][config]                                                      |
| [`no-return-assign`][153]                                      | `error`  | `"always"`                                                                |
| [`no-return-await`][154]                                       | `error`  |                                                                           |
| [`no-script-url`][155]                                         | `error`  |                                                                           |
| [`no-self-assign`][156]                                        | `error`  | `{"props":true}`                                                          |
| [`no-self-compare`][157]                                       | `error`  |                                                                           |
| [`no-sequences`][158]                                          | `error`  |                                                                           |
| [`no-setter-return`][159]                                      | `error`  |                                                                           |
| [`no-shadow`][160]                                             | `error`  |                                                                           |
| [`no-shadow-restricted-names`][161]                            | `error`  |                                                                           |
| [`no-sparse-arrays`][162]                                      | `error`  |                                                                           |
| [`no-template-curly-in-string`][163]                           | `error`  |                                                                           |
| [`no-this-before-super`][164]                                  | `error`  |                                                                           |
| [`no-throw-literal`][165]                                      | `error`  |                                                                           |
| [`no-undef`][166]                                              | `error`  |                                                                           |
| [`no-undef-init`][167]                                         | `error`  |                                                                           |
| [`no-underscore-dangle`][168]                                  | `error`  | [see Config][config]                                                      |
| [`no-unneeded-ternary`][169]                                   | `error`  | `{"defaultAssignment":false}`                                             |
| [`no-unreachable`][170]                                        | `error`  |                                                                           |
| [`no-unreachable-loop`][171]                                   | `error`  | `{"ignore":[]}`                                                           |
| [`no-unsafe-finally`][172]                                     | `error`  |                                                                           |
| [`no-unsafe-negation`][173]                                    | `error`  |                                                                           |
| [`no-unsafe-optional-chaining`][174]                           | `error`  | `{"disallowArithmeticOperators":true}`                                    |
| [`no-unused-expressions`][175]                                 | `error`  | [see Config][config]                                                      |
| [`no-unused-labels`][176]                                      | `error`  |                                                                           |
| [`no-unused-vars`][177]                                        | `error`  | `{"vars":"all","args":"after-used","ignoreRestSiblings":true}`            |
| [`no-use-before-define`][178]                                  | `error`  | `{"functions":true,"classes":true,"variables":true}`                      |
| [`no-useless-backreference`][179]                              | `error`  |                                                                           |
| [`no-useless-catch`][180]                                      | `error`  |                                                                           |
| [`no-useless-computed-key`][181]                               | `error`  |                                                                           |
| [`no-useless-concat`][182]                                     | `error`  |                                                                           |
| [`no-useless-constructor`][183]                                | `error`  |                                                                           |
| [`no-useless-escape`][184]                                     | `error`  |                                                                           |
| [`no-useless-rename`][185]                                     | `error`  | `{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}` |
| [`no-useless-return`][186]                                     | `error`  |                                                                           |
| [`no-void`][187]                                               | `error`  |                                                                           |
| [`no-with`][188]                                               | `error`  |                                                                           |
| [`object-shorthand`][189]                                      | `error`  | `"methods"`                                                               |
| [`one-var`][190]                                               | `error`  | `"never"`                                                                 |
| [`operator-assignment`][191]                                   | `error`  | `"always"`                                                                |
| [`prefer-arrow-callback`][192]                                 | `error`  | `{"allowNamedFunctions":false,"allowUnboundThis":true}`                   |
| [`prefer-const`][193]                                          | `error`  | `{"destructuring":"any","ignoreReadBeforeAssign":true}`                   |
| [`prefer-destructuring`][194]                                  | `error`  | [see Config][config]                                                      |
| [`prefer-exponentiation-operator`][195]                        | `error`  |                                                                           |
| [`prefer-numeric-literals`][196]                               | `error`  |                                                                           |
| [`prefer-object-spread`][197]                                  | `error`  |                                                                           |
| [`prefer-promise-reject-errors`][198]                          | `error`  | `{"allowEmptyReject":true}`                                               |
| [`prefer-regex-literals`][199]                                 | `error`  | `{"disallowRedundantWrapping":true}`                                      |
| [`prefer-rest-params`][200]                                    | `error`  |                                                                           |
| [`prefer-spread`][201]                                         | `error`  |                                                                           |
| [`radix`][202]                                                 | `error`  |                                                                           |
| [`react-hooks/exhaustive-deps`][203]                           | `error`  |                                                                           |
| [`react-hooks/rules-of-hooks`][204]                            | `error`  |                                                                           |
| [`react/button-has-type`][205]                                 | `error`  | `{"button":true,"submit":true,"reset":false}`                             |
| [`react/default-props-match-prop-types`][206]                  | `error`  | `{"allowRequiredDefaults":false}`                                         |
| [`react/destructuring-assignment`][207]                        | `error`  | `"always"`                                                                |
| [`react/forbid-foreign-prop-types`][208]                       | `warn`   | `{"allowInPropTypes":true}`                                               |
| [`react/forbid-prop-types`][209]                               | `error`  | [see Config][config]                                                      |
| [`react/function-component-definition`][210]                   | `error`  | [see Config][config]                                                      |
| [`react/jsx-curly-brace-presence`][211]                        | `error`  | `{"props":"never","children":"never"}`                                    |
| [`react/jsx-filename-extension`][212]                          | `error`  | `{"extensions":[".jsx"]}`                                                 |
| [`react/jsx-fragments`][213]                                   | `error`  | `"syntax"`                                                                |
| [`react/jsx-no-comment-textnodes`][214]                        | `error`  |                                                                           |
| [`react/jsx-no-constructed-context-values`][215]               | `error`  |                                                                           |
| [`react/jsx-no-duplicate-props`][216]                          | `error`  | `{"ignoreCase":true}`                                                     |
| [`react/jsx-no-script-url`][217]                               | `error`  | `[{"name":"Link","props":["to"]}]`                                        |
| [`react/jsx-no-target-blank`][218]                             | `error`  | `{"enforceDynamicLinks":"always","links":true,"forms":false}`             |
| [`react/jsx-no-undef`][219]                                    | `error`  |                                                                           |
| [`react/jsx-no-useless-fragment`][220]                         | `error`  |                                                                           |
| [`react/jsx-pascal-case`][221]                                 | `error`  | `{"allowAllCaps":true,"ignore":[]}`                                       |
| [`react/jsx-props-no-spreading`][222]                          | `error`  | [see Config][config]                                                      |
| [`react/jsx-uses-react`][223]                                  | `error`  |                                                                           |
| [`react/jsx-uses-vars`][224]                                   | `error`  |                                                                           |
| [`react/no-access-state-in-setstate`][225]                     | `error`  |                                                                           |
| [`react/no-array-index-key`][226]                              | `error`  |                                                                           |
| [`react/no-arrow-function-lifecycle`][227]                     | `error`  |                                                                           |
| [`react/no-children-prop`][228]                                | `error`  |                                                                           |
| [`react/no-danger`][229]                                       | `warn`   |                                                                           |
| [`react/no-danger-with-children`][230]                         | `error`  |                                                                           |
| [`react/no-deprecated`][231]                                   | `error`  |                                                                           |
| [`react/no-did-update-set-state`][232]                         | `error`  |                                                                           |
| [`react/no-find-dom-node`][233]                                | `error`  |                                                                           |
| [`react/no-invalid-html-attribute`][234]                       | `error`  |                                                                           |
| [`react/no-is-mounted`][235]                                   | `error`  |                                                                           |
| [`react/no-namespace`][236]                                    | `error`  |                                                                           |
| [`react/no-redundant-should-component-update`][237]            | `error`  |                                                                           |
| [`react/no-render-return-value`][238]                          | `error`  |                                                                           |
| [`react/no-string-refs`][239]                                  | `error`  |                                                                           |
| [`react/no-this-in-sfc`][240]                                  | `error`  |                                                                           |
| [`react/no-typos`][241]                                        | `error`  |                                                                           |
| [`react/no-unescaped-entities`][242]                           | `error`  |                                                                           |
| [`react/no-unknown-property`][243]                             | `error`  |                                                                           |
| [`react/no-unstable-nested-components`][244]                   | `error`  |                                                                           |
| [`react/no-unused-class-component-methods`][245]               | `error`  |                                                                           |
| [`react/no-unused-prop-types`][246]                            | `error`  | `{"customValidators":[],"skipShapeProps":true}`                           |
| [`react/no-unused-state`][247]                                 | `error`  |                                                                           |
| [`react/no-will-update-set-state`][248]                        | `error`  |                                                                           |
| [`react/prefer-exact-props`][249]                              | `error`  |                                                                           |
| [`react/prefer-stateless-function`][250]                       | `error`  | `{"ignorePureComponents":true}`                                           |
| [`react/react-in-jsx-scope`][251]                              | `error`  |                                                                           |
| [`react/require-default-props`][252]                           | `error`  | `{"forbidDefaultForRequired":true}`                                       |
| [`react/require-render-return`][253]                           | `error`  |                                                                           |
| [`react/self-closing-comp`][254]                               | `error`  |                                                                           |
| [`react/state-in-constructor`][255]                            | `error`  | `"always"`                                                                |
| [`react/static-property-placement`][256]                       | `error`  | `"property assignment"`                                                   |
| [`react/style-prop-object`][257]                               | `error`  |                                                                           |
| [`react/void-dom-elements-no-children`][258]                   | `error`  |                                                                           |
| [`require-yield`][259]                                         | `error`  |                                                                           |
| [`spaced-comment`][260]                                        | `error`  | [see Config][config]                                                      |
| [`strict`][261]                                                | `error`  | `"never"`                                                                 |
| [`symbol-description`][262]                                    | `error`  |                                                                           |
| [`unicode-bom`][263]                                           | `error`  | `"never"`                                                                 |
| [`use-isnan`][264]                                             | `error`  |                                                                           |
| [`valid-typeof`][265]                                          | `error`  | `{"requireStringLiterals":true}`                                          |
| [`vars-on-top`][266]                                           | `error`  |                                                                           |
| [`yoda`][267]                                                  | `error`  |                                                                           |

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
[0]: https://eslint.org/docs/latest/rules/array-callback-return
[1]: https://eslint.org/docs/latest/rules/arrow-body-style
[2]: https://eslint.org/docs/latest/rules/block-scoped-var
[3]: https://eslint.org/docs/latest/rules/camelcase
[4]: https://eslint.org/docs/latest/rules/consistent-return
[5]: https://eslint.org/docs/latest/rules/constructor-super
[6]: https://eslint.org/docs/latest/rules/default-case
[7]: https://eslint.org/docs/latest/rules/default-case-last
[8]: https://eslint.org/docs/latest/rules/default-param-last
[9]: https://eslint.org/docs/latest/rules/dot-notation
[10]: https://eslint.org/docs/latest/rules/eqeqeq
[11]: https://eslint.org/docs/latest/rules/for-direction
[12]: https://eslint.org/docs/latest/rules/func-names
[13]: https://eslint.org/docs/latest/rules/getter-return
[14]: https://eslint.org/docs/latest/rules/global-require
[15]: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
[16]: https://eslint.org/docs/latest/rules/guard-for-in
[17]: https://eslint.org/docs/latest/rules/id-length
[18]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
[19]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
[20]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
[21]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
[22]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
[23]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
[24]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
[25]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
[26]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
[27]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
[28]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
[29]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
[30]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
[31]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
[32]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
[33]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
[34]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
[35]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
[36]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
[37]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
[38]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
[39]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
[40]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
[41]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[42]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
[43]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
[44]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
[45]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
[46]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
[47]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[48]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
[49]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
[50]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
[51]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
[52]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
[53]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
[54]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[55]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
[56]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
[57]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
[58]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
[59]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
[60]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[61]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
[62]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
[63]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
[64]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
[65]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
[66]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
[67]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
[68]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
[69]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
[70]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
[71]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
[72]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
[73]: https://eslint.org/docs/latest/rules/lines-around-directive
[74]: https://eslint.org/docs/latest/rules/lines-between-class-members
[75]: https://eslint.org/docs/latest/rules/new-cap
[76]: https://eslint.org/docs/latest/rules/no-alert
[77]: https://eslint.org/docs/latest/rules/no-array-constructor
[78]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[79]: https://eslint.org/docs/latest/rules/no-await-in-loop
[80]: https://eslint.org/docs/latest/rules/no-bitwise
[81]: https://eslint.org/docs/latest/rules/no-buffer-constructor
[82]: https://eslint.org/docs/latest/rules/no-caller
[83]: https://eslint.org/docs/latest/rules/no-case-declarations
[84]: https://eslint.org/docs/latest/rules/no-class-assign
[85]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[86]: https://eslint.org/docs/latest/rules/no-cond-assign
[87]: https://eslint.org/docs/latest/rules/no-console
[88]: https://eslint.org/docs/latest/rules/no-const-assign
[89]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[90]: https://eslint.org/docs/latest/rules/no-constant-condition
[91]: https://eslint.org/docs/latest/rules/no-constructor-return
[92]: https://eslint.org/docs/latest/rules/no-continue
[93]: https://eslint.org/docs/latest/rules/no-control-regex
[94]: https://eslint.org/docs/latest/rules/no-debugger
[95]: https://eslint.org/docs/latest/rules/no-delete-var
[96]: https://eslint.org/docs/latest/rules/no-dupe-args
[97]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[98]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[99]: https://eslint.org/docs/latest/rules/no-dupe-keys
[100]: https://eslint.org/docs/latest/rules/no-duplicate-case
[101]: https://eslint.org/docs/latest/rules/no-else-return
[102]: https://eslint.org/docs/latest/rules/no-empty
[103]: https://eslint.org/docs/latest/rules/no-empty-character-class
[104]: https://eslint.org/docs/latest/rules/no-empty-function
[105]: https://eslint.org/docs/latest/rules/no-empty-pattern
[106]: https://eslint.org/docs/latest/rules/no-eval
[107]: https://eslint.org/docs/latest/rules/no-ex-assign
[108]: https://eslint.org/docs/latest/rules/no-extend-native
[109]: https://eslint.org/docs/latest/rules/no-extra-bind
[110]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[111]: https://eslint.org/docs/latest/rules/no-extra-label
[112]: https://eslint.org/docs/latest/rules/no-fallthrough
[113]: https://eslint.org/docs/latest/rules/no-func-assign
[114]: https://eslint.org/docs/latest/rules/no-global-assign
[115]: https://eslint.org/docs/latest/rules/no-implied-eval
[116]: https://eslint.org/docs/latest/rules/no-import-assign
[117]: https://eslint.org/docs/latest/rules/no-inner-declarations
[118]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[119]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[120]: https://eslint.org/docs/latest/rules/no-iterator
[121]: https://eslint.org/docs/latest/rules/no-label-var
[122]: https://eslint.org/docs/latest/rules/no-labels
[123]: https://eslint.org/docs/latest/rules/no-lone-blocks
[124]: https://eslint.org/docs/latest/rules/no-lonely-if
[125]: https://eslint.org/docs/latest/rules/no-loop-func
[126]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[127]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[128]: https://eslint.org/docs/latest/rules/no-multi-assign
[129]: https://eslint.org/docs/latest/rules/no-multi-str
[130]: https://eslint.org/docs/latest/rules/no-nested-ternary
[131]: https://eslint.org/docs/latest/rules/no-new
[132]: https://eslint.org/docs/latest/rules/no-new-func
[133]: https://eslint.org/docs/latest/rules/no-new-object
[134]: https://eslint.org/docs/latest/rules/no-new-require
[135]: https://eslint.org/docs/latest/rules/no-new-symbol
[136]: https://eslint.org/docs/latest/rules/no-new-wrappers
[137]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[138]: https://eslint.org/docs/latest/rules/no-obj-calls
[139]: https://eslint.org/docs/latest/rules/no-octal
[140]: https://eslint.org/docs/latest/rules/no-octal-escape
[141]: https://eslint.org/docs/latest/rules/no-param-reassign
[142]: https://eslint.org/docs/latest/rules/no-path-concat
[143]: https://eslint.org/docs/latest/rules/no-plusplus
[144]: https://eslint.org/docs/latest/rules/no-promise-executor-return
[145]: https://eslint.org/docs/latest/rules/no-proto
[146]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[147]: https://eslint.org/docs/latest/rules/no-redeclare
[148]: https://eslint.org/docs/latest/rules/no-regex-spaces
[149]: https://eslint.org/docs/latest/rules/no-restricted-exports
[150]: https://eslint.org/docs/latest/rules/no-restricted-globals
[151]: https://eslint.org/docs/latest/rules/no-restricted-properties
[152]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[153]: https://eslint.org/docs/latest/rules/no-return-assign
[154]: https://eslint.org/docs/latest/rules/no-return-await
[155]: https://eslint.org/docs/latest/rules/no-script-url
[156]: https://eslint.org/docs/latest/rules/no-self-assign
[157]: https://eslint.org/docs/latest/rules/no-self-compare
[158]: https://eslint.org/docs/latest/rules/no-sequences
[159]: https://eslint.org/docs/latest/rules/no-setter-return
[160]: https://eslint.org/docs/latest/rules/no-shadow
[161]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[162]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[163]: https://eslint.org/docs/latest/rules/no-template-curly-in-string
[164]: https://eslint.org/docs/latest/rules/no-this-before-super
[165]: https://eslint.org/docs/latest/rules/no-throw-literal
[166]: https://eslint.org/docs/latest/rules/no-undef
[167]: https://eslint.org/docs/latest/rules/no-undef-init
[168]: https://eslint.org/docs/latest/rules/no-underscore-dangle
[169]: https://eslint.org/docs/latest/rules/no-unneeded-ternary
[170]: https://eslint.org/docs/latest/rules/no-unreachable
[171]: https://eslint.org/docs/latest/rules/no-unreachable-loop
[172]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[173]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[174]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[175]: https://eslint.org/docs/latest/rules/no-unused-expressions
[176]: https://eslint.org/docs/latest/rules/no-unused-labels
[177]: https://eslint.org/docs/latest/rules/no-unused-vars
[178]: https://eslint.org/docs/latest/rules/no-use-before-define
[179]: https://eslint.org/docs/latest/rules/no-useless-backreference
[180]: https://eslint.org/docs/latest/rules/no-useless-catch
[181]: https://eslint.org/docs/latest/rules/no-useless-computed-key
[182]: https://eslint.org/docs/latest/rules/no-useless-concat
[183]: https://eslint.org/docs/latest/rules/no-useless-constructor
[184]: https://eslint.org/docs/latest/rules/no-useless-escape
[185]: https://eslint.org/docs/latest/rules/no-useless-rename
[186]: https://eslint.org/docs/latest/rules/no-useless-return
[187]: https://eslint.org/docs/latest/rules/no-void
[188]: https://eslint.org/docs/latest/rules/no-with
[189]: https://eslint.org/docs/latest/rules/object-shorthand
[190]: https://eslint.org/docs/latest/rules/one-var
[191]: https://eslint.org/docs/latest/rules/operator-assignment
[192]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[193]: https://eslint.org/docs/latest/rules/prefer-const
[194]: https://eslint.org/docs/latest/rules/prefer-destructuring
[195]: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
[196]: https://eslint.org/docs/latest/rules/prefer-numeric-literals
[197]: https://eslint.org/docs/latest/rules/prefer-object-spread
[198]: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
[199]: https://eslint.org/docs/latest/rules/prefer-regex-literals
[200]: https://eslint.org/docs/latest/rules/prefer-rest-params
[201]: https://eslint.org/docs/latest/rules/prefer-spread
[202]: https://eslint.org/docs/latest/rules/radix
[203]: https://legacy.reactjs.org/docs/hooks-rules.html
[204]: https://legacy.reactjs.org/docs/hooks-rules.html
[205]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
[206]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
[207]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
[208]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
[209]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
[210]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
[211]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[212]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
[213]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
[214]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
[215]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
[216]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
[217]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
[218]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
[219]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
[220]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
[221]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[222]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
[223]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
[224]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
[225]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
[226]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
[227]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
[228]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
[229]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
[230]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
[231]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[232]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
[233]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
[234]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
[235]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[236]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
[237]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
[238]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
[239]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[240]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
[241]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
[242]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
[243]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
[244]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
[245]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
[246]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
[247]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
[248]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
[249]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
[250]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
[251]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
[252]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
[253]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[254]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
[255]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
[256]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
[257]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
[258]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
[259]: https://eslint.org/docs/latest/rules/require-yield
[260]: https://eslint.org/docs/latest/rules/spaced-comment
[261]: https://eslint.org/docs/latest/rules/strict
[262]: https://eslint.org/docs/latest/rules/symbol-description
[263]: https://eslint.org/docs/latest/rules/unicode-bom
[264]: https://eslint.org/docs/latest/rules/use-isnan
[265]: https://eslint.org/docs/latest/rules/valid-typeof
[266]: https://eslint.org/docs/latest/rules/vars-on-top
[267]: https://eslint.org/docs/latest/rules/yoda
