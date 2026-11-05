# [@wagtail/oxlint-config](https://www.npmjs.com/package/@wagtail/oxlint-config) [<img src="https://raw.githubusercontent.com/oxc-project/oxc-assets/main/icon-color-light.svg" alt="Oxlint" width="90" align="right">](https://oxc.rs/docs/guide/usage/linter.html)

> Strict [oxlint](https://oxc.rs/docs/guide/usage/linter.html) config for high-quality code in [Wagtail](https://wagtail.org/).

This package provides Wagtail's strict linting configuration as an oxlint shared config. It is the successor of [`@wagtail/eslint-config-wagtail`](https://www.npmjs.com/package/@wagtail/eslint-config-wagtail).

- [Usage](#usage)
- [Code style](#code-style)
- [Migrating from @wagtail/eslint-config-wagtail](#migrating-from-wagtaileslint-config-wagtail)
- [Differences from @wagtail/eslint-config-wagtail](#differences-from-wagtaileslint-config-wagtail)
- [Contribution Guidelines](#contribution-guidelines)
- [Rules](#rules)

## Usage

Install the package with its peer dependencies:

```sh
npm install --save-dev @wagtail/oxlint-config oxlint oxlint-tsgolint eslint @stylistic/eslint-plugin eslint-plugin-import-x eslint-import-resolver-typescript eslint-plugin-react
```

Then extend it in an `oxlint.config.ts` file (Node.js 22.18+ is required for TypeScript config files):

```ts
import wagtail from '@wagtail/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [wagtail],
  options: {
    // Required for the type-aware rules in this config. Can only be set in
    // the root config file, so it cannot be enabled by the shared config.
    typeAware: true,
    reportUnusedDisableDirectives: 'warn',
  },
  settings: {
    // oxlint does not inherit settings from extended configs, so they must be
    // spread in. Without them, import-x-js/no-unresolved cannot resolve
    // TypeScript files.
    ...wagtail.settings,
    // Used by the eslint-plugin-react rules. oxlint does not support "detect".
    react: { version: '19.2.0' },
  },
  // Your custom config here
});
```

`.oxlintrc.json` files cannot import packages in `extends`, so a TypeScript config file is required.

Some rules are provided by ESLint plugins loaded as oxlint [JS plugins](https://oxc.rs/docs/guide/usage/linter/js-plugins.html), which is why `eslint` and those plugins are peer dependencies. They are resolved from your config file, so they must be installed in your project. JS plugins are in alpha in oxlint and are not covered by its semver guarantees.

Type-aware rules run through [oxlint-tsgolint](https://github.com/oxc-project/tsgolint), which is based on TypeScript 7. Your `tsconfig.json` must be valid for TypeScript 7. For example, `allowJs` without `noEmit` or `outDir` is rejected with "Cannot write file … because it would overwrite input file".

## Code style

This config includes rules from the `recommended` presets of:

- [ESLint rules](https://eslint.org/docs/latest/rules/)
- [typescript-eslint](https://typescript-eslint.io/) (`strict` and `stylistic`)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

Most of them run as oxlint's native ports of those plugins. Formatting is left to Prettier, as before.

With some Wagtail-specific customizations:

- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
- We accept `snake_case` in object properties, such as `ajaxResponse.page_title`, however camelCase or UPPER_CASE should be used everywhere else.

## Migrating from @wagtail/eslint-config-wagtail

- Run `npx @oxlint/migrate --replace-eslint-comments` to rewrite `eslint-disable` comments. Native rules are renamed: `@typescript-eslint/*` becomes `typescript/*` (or the core rule name for extension rules such as `no-shadow`), `import-x/*` becomes `import/*` and `react-hooks/*` becomes `react/*`.
- Rules loaded from JS plugins use aliases, because the original plugin names are reserved by oxlint: `import-x-js/*` for eslint-plugin-import-x, `react-js/*` for eslint-plugin-react, and `wagtail/camelcase` for `camelcase`. `--replace-eslint-comments` does not know about these aliases, so update disable comments for these rules by hand (for example `/* eslint-disable camelcase */` becomes `/* eslint-disable wagtail/camelcase */`).
- `/* global $ */` comments are not supported by oxlint. Declare those globals in the `globals` of your config instead, using `overrides` to scope them to specific files.
- Set `options.typeAware`, `options.reportUnusedDisableDirectives`, `settings.react.version` and `...wagtail.settings` in your own config, as shown in [Usage](#usage).
- Plugins your project used on top of this config (for example `eslint-plugin-no-jquery`) can be loaded through `jsPlugins`.

## Differences from @wagtail/eslint-config-wagtail

Rules from the ESLint config are kept, except for the following.

| Rule                                                      | Status                                                                                                     |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `no-restricted-syntax` (ban on `for..in`, labels, `with`) | Removed. `guard-for-in`, `no-labels` and `no-with` cover the underlying issues.                            |
| `strict`                                                  | Removed. Not implemented by oxlint. ES modules are always in strict mode.                                  |
| `no-dupe-args`, `no-octal`, `no-octal-escape`             | Removed. These are syntax errors in strict mode code.                                                      |
| `react/jsx-uses-react`, `react/jsx-uses-vars`             | Removed. oxlint's `no-unused-vars` already understands JSX.                                                |
| `react-hooks/config`, `react-hooks/gating`                | Removed. React Compiler options are not configurable in oxlint.                                            |
| `react-hooks/component-hook-factories`                    | Removed. Deprecated upstream, and covered by `react/static-components`.                                    |
| `no-undef-init`                                           | Replaced by `unicorn/no-useless-undefined`, which also reports `return undefined`.                         |
| `consistent-return`, `dot-notation`                       | Replaced by type-aware `typescript/consistent-return` and `typescript/dot-notation`, for TypeScript files. |
| `camelcase`                                               | Vendored from ESLint as `wagtail/camelcase`.                                                               |
| `react/jsx-no-duplicate-props`                            | The `ignoreCase` option is not supported by oxlint.                                                        |
| `id-length`                                               | oxlint also checks TypeScript type parameters, such as `<T>`.                                              |
| `typescript/no-this-alias`                                | oxlint only checks TypeScript files.                                                                       |
| `@stylistic/*`, `import-x-js/*`, `react-js/*`             | Not available natively. Loaded from their ESLint plugins as JS plugins.                                    |

## Contribution Guidelines

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                           | Severity | Config                                                                 |
| -------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| [`@stylistic/lines-between-class-members`][0]                  | `error`  | `"always", {"exceptAfterSingleLine":true}`                             |
| [`@stylistic/spaced-comment`][1]                               | `error`  | [see Config][config]                                                   |
| [`array-callback-return`][2]                                   | `error`  | `{"allowImplicit":true}`                                               |
| [`arrow-body-style`][3]                                        | `error`  | `"as-needed"`                                                          |
| [`block-scoped-var`][4]                                        | `error`  |                                                                        |
| [`constructor-super`][5]                                       | `error`  |                                                                        |
| [`default-case`][6]                                            | `error`  | `{"commentPattern":"^no default$"}`                                    |
| [`default-case-last`][7]                                       | `error`  |                                                                        |
| [`default-param-last`][8]                                      | `error`  |                                                                        |
| [`eqeqeq`][9]                                                  | `error`  | `"always", {"null":"ignore"}`                                          |
| [`for-direction`][10]                                          | `error`  |                                                                        |
| [`func-names`][11]                                             | `warn`   |                                                                        |
| [`getter-return`][12]                                          | `error`  |                                                                        |
| [`grouped-accessor-pairs`][13]                                 | `error`  |                                                                        |
| [`guard-for-in`][14]                                           | `error`  |                                                                        |
| [`id-length`][15]                                              | `warn`   | `{"min":2,"exceptions":["x","y","e","h","i","j","k","d","n","_","$"]}` |
| [`import-x-js/no-extraneous-dependencies`][16]                 | `error`  | [see Config][config]                                                   |
| [`import-x-js/no-import-module-exports`][17]                   | `error`  | `{"exceptions":[]}`                                                    |
| [`import-x-js/no-relative-packages`][18]                       | `error`  |                                                                        |
| [`import-x-js/no-unresolved`][19]                              | `error`  | `{"commonjs":true}`                                                    |
| [`import-x-js/no-useless-path-segments`][20]                   | `error`  | `{"commonjs":true}`                                                    |
| [`import-x-js/order`][21]                                      | `error`  | [see Config][config]                                                   |
| [`import/default`][22]                                         | `error`  |                                                                        |
| [`import/export`][23]                                          | `error`  |                                                                        |
| [`import/first`][24]                                           | `error`  |                                                                        |
| [`import/namespace`][25]                                       | `error`  |                                                                        |
| [`import/newline-after-import`][26]                            | `error`  |                                                                        |
| [`import/no-absolute-path`][27]                                | `error`  |                                                                        |
| [`import/no-amd`][28]                                          | `error`  |                                                                        |
| [`import/no-cycle`][29]                                        | `error`  |                                                                        |
| [`import/no-duplicates`][30]                                   | `error`  |                                                                        |
| [`import/no-dynamic-require`][31]                              | `error`  |                                                                        |
| [`import/no-mutable-exports`][32]                              | `error`  |                                                                        |
| [`import/no-named-as-default`][33]                             | `error`  |                                                                        |
| [`import/no-named-default`][34]                                | `error`  |                                                                        |
| [`import/no-self-import`][35]                                  | `error`  |                                                                        |
| [`import/no-webpack-loader-syntax`][36]                        | `error`  |                                                                        |
| [`jsx-a11y/alt-text`][37]                                      | `error`  |                                                                        |
| [`jsx-a11y/anchor-has-content`][38]                            | `error`  |                                                                        |
| [`jsx-a11y/anchor-is-valid`][39]                               | `error`  |                                                                        |
| [`jsx-a11y/aria-activedescendant-has-tabindex`][40]            | `error`  |                                                                        |
| [`jsx-a11y/aria-props`][41]                                    | `error`  |                                                                        |
| [`jsx-a11y/aria-proptypes`][42]                                | `error`  |                                                                        |
| [`jsx-a11y/aria-role`][43]                                     | `error`  |                                                                        |
| [`jsx-a11y/aria-unsupported-elements`][44]                     | `error`  |                                                                        |
| [`jsx-a11y/autocomplete-valid`][45]                            | `error`  |                                                                        |
| [`jsx-a11y/click-events-have-key-events`][46]                  | `error`  |                                                                        |
| [`jsx-a11y/control-has-associated-label`][47]                  | `error`  | [see Config][config]                                                   |
| [`jsx-a11y/heading-has-content`][48]                           | `error`  |                                                                        |
| [`jsx-a11y/html-has-lang`][49]                                 | `error`  |                                                                        |
| [`jsx-a11y/iframe-has-title`][50]                              | `error`  |                                                                        |
| [`jsx-a11y/img-redundant-alt`][51]                             | `error`  |                                                                        |
| [`jsx-a11y/interactive-supports-focus`][52]                    | `error`  | [see Config][config]                                                   |
| [`jsx-a11y/label-has-associated-control`][53]                  | `error`  | `{"assert":"either","depth":25}`                                       |
| [`jsx-a11y/lang`][54]                                          | `error`  |                                                                        |
| [`jsx-a11y/media-has-caption`][55]                             | `error`  |                                                                        |
| [`jsx-a11y/mouse-events-have-key-events`][56]                  | `error`  |                                                                        |
| [`jsx-a11y/no-access-key`][57]                                 | `error`  |                                                                        |
| [`jsx-a11y/no-autofocus`][58]                                  | `error`  |                                                                        |
| [`jsx-a11y/no-distracting-elements`][59]                       | `error`  |                                                                        |
| [`jsx-a11y/no-interactive-element-to-noninteractive-role`][60] | `error`  | `{"tr":["none","presentation"],"canvas":["img"]}`                      |
| [`jsx-a11y/no-noninteractive-element-interactions`][61]        | `error`  | [see Config][config]                                                   |
| [`jsx-a11y/no-noninteractive-element-to-interactive-role`][62] | `error`  | [see Config][config]                                                   |
| [`jsx-a11y/no-noninteractive-tabindex`][63]                    | `error`  | `{"tags":[],"roles":["tabpanel"],"allowExpressionValues":true}`        |
| [`jsx-a11y/no-redundant-roles`][64]                            | `error`  |                                                                        |
| [`jsx-a11y/no-static-element-interactions`][65]                | `error`  | [see Config][config]                                                   |
| [`jsx-a11y/role-has-required-aria-props`][66]                  | `error`  |                                                                        |
| [`jsx-a11y/role-supports-aria-props`][67]                      | `error`  |                                                                        |
| [`jsx-a11y/scope`][68]                                         | `error`  |                                                                        |
| [`jsx-a11y/tabindex-no-positive`][69]                          | `error`  |                                                                        |
| [`new-cap`][70]                                                | `error`  | `{"capIsNew":false}`                                                   |
| [`no-alert`][71]                                               | `warn`   |                                                                        |
| [`no-array-constructor`][72]                                   | `error`  |                                                                        |
| [`no-async-promise-executor`][73]                              | `error`  |                                                                        |
| [`no-await-in-loop`][74]                                       | `error`  |                                                                        |
| [`no-bitwise`][75]                                             | `error`  |                                                                        |
| [`no-caller`][76]                                              | `error`  |                                                                        |
| [`no-case-declarations`][77]                                   | `error`  |                                                                        |
| [`no-class-assign`][78]                                        | `error`  |                                                                        |
| [`no-compare-neg-zero`][79]                                    | `error`  |                                                                        |
| [`no-cond-assign`][80]                                         | `error`  | `"always"`                                                             |
| [`no-console`][81]                                             | `warn`   |                                                                        |
| [`no-const-assign`][82]                                        | `error`  |                                                                        |
| [`no-constant-binary-expression`][83]                          | `error`  |                                                                        |
| [`no-constant-condition`][84]                                  | `error`  |                                                                        |
| [`no-constructor-return`][85]                                  | `error`  |                                                                        |
| [`no-continue`][86]                                            | `error`  |                                                                        |
| [`no-control-regex`][87]                                       | `error`  |                                                                        |
| [`no-debugger`][88]                                            | `error`  |                                                                        |
| [`no-delete-var`][89]                                          | `error`  |                                                                        |
| [`no-dupe-class-members`][90]                                  | `error`  |                                                                        |
| [`no-dupe-else-if`][91]                                        | `error`  |                                                                        |
| [`no-dupe-keys`][92]                                           | `error`  |                                                                        |
| [`no-duplicate-case`][93]                                      | `error`  |                                                                        |
| [`no-else-return`][94]                                         | `error`  | `{"allowElseIf":false}`                                                |
| [`no-empty`][95]                                               | `error`  |                                                                        |
| [`no-empty-character-class`][96]                               | `error`  |                                                                        |
| [`no-empty-function`][97]                                      | `error`  | `{"allow":["arrowFunctions","functions","methods"]}`                   |
| [`no-empty-pattern`][98]                                       | `error`  |                                                                        |
| [`no-empty-static-block`][99]                                  | `error`  |                                                                        |
| [`no-eval`][100]                                               | `error`  |                                                                        |
| [`no-ex-assign`][101]                                          | `error`  |                                                                        |
| [`no-extend-native`][102]                                      | `error`  |                                                                        |
| [`no-extra-bind`][103]                                         | `error`  |                                                                        |
| [`no-extra-boolean-cast`][104]                                 | `error`  |                                                                        |
| [`no-extra-label`][105]                                        | `error`  |                                                                        |
| [`no-fallthrough`][106]                                        | `error`  |                                                                        |
| [`no-func-assign`][107]                                        | `error`  |                                                                        |
| [`no-global-assign`][108]                                      | `error`  |                                                                        |
| [`no-implied-eval`][109]                                       | `error`  |                                                                        |
| [`no-import-assign`][110]                                      | `error`  |                                                                        |
| [`no-inner-declarations`][111]                                 | `error`  |                                                                        |
| [`no-invalid-regexp`][112]                                     | `error`  |                                                                        |
| [`no-irregular-whitespace`][113]                               | `error`  |                                                                        |
| [`no-iterator`][114]                                           | `error`  |                                                                        |
| [`no-label-var`][115]                                          | `error`  |                                                                        |
| [`no-labels`][116]                                             | `error`  |                                                                        |
| [`no-lone-blocks`][117]                                        | `error`  |                                                                        |
| [`no-lonely-if`][118]                                          | `error`  |                                                                        |
| [`no-loop-func`][119]                                          | `error`  |                                                                        |
| [`no-loss-of-precision`][120]                                  | `error`  |                                                                        |
| [`no-misleading-character-class`][121]                         | `error`  |                                                                        |
| [`no-multi-assign`][122]                                       | `error`  |                                                                        |
| [`no-multi-str`][123]                                          | `error`  |                                                                        |
| [`no-nested-ternary`][124]                                     | `error`  |                                                                        |
| [`no-new`][125]                                                | `warn`   |                                                                        |
| [`no-new-func`][126]                                           | `error`  |                                                                        |
| [`no-new-native-nonconstructor`][127]                          | `error`  |                                                                        |
| [`no-new-wrappers`][128]                                       | `error`  |                                                                        |
| [`no-nonoctal-decimal-escape`][129]                            | `error`  |                                                                        |
| [`no-obj-calls`][130]                                          | `error`  |                                                                        |
| [`no-object-constructor`][131]                                 | `error`  |                                                                        |
| [`no-param-reassign`][132]                                     | `error`  |                                                                        |
| [`no-plusplus`][133]                                           | `error`  |                                                                        |
| [`no-promise-executor-return`][134]                            | `error`  |                                                                        |
| [`no-proto`][135]                                              | `error`  |                                                                        |
| [`no-prototype-builtins`][136]                                 | `error`  |                                                                        |
| [`no-redeclare`][137]                                          | `error`  |                                                                        |
| [`no-regex-spaces`][138]                                       | `error`  |                                                                        |
| [`no-restricted-exports`][139]                                 | `error`  | `{"restrictedNamedExports":["default","then"]}`                        |
| [`no-restricted-globals`][140]                                 | `error`  | [see Config][config]                                                   |
| [`no-restricted-properties`][141]                              | `error`  | [see Config][config]                                                   |
| [`no-return-assign`][142]                                      | `error`  | `"always"`                                                             |
| [`no-script-url`][143]                                         | `error`  |                                                                        |
| [`no-self-assign`][144]                                        | `error`  |                                                                        |
| [`no-self-compare`][145]                                       | `error`  |                                                                        |
| [`no-sequences`][146]                                          | `error`  |                                                                        |
| [`no-setter-return`][147]                                      | `error`  |                                                                        |
| [`no-shadow`][148]                                             | `error`  |                                                                        |
| [`no-shadow-restricted-names`][149]                            | `error`  |                                                                        |
| [`no-sparse-arrays`][150]                                      | `error`  |                                                                        |
| [`no-template-curly-in-string`][151]                           | `error`  |                                                                        |
| [`no-this-before-super`][152]                                  | `error`  |                                                                        |
| [`no-undef`][153]                                              | `error`  |                                                                        |
| [`no-underscore-dangle`][154]                                  | `error`  | `{"enforceInMethodNames":true}`                                        |
| [`no-unneeded-ternary`][155]                                   | `error`  | `{"defaultAssignment":false}`                                          |
| [`no-unreachable`][156]                                        | `error`  |                                                                        |
| [`no-unreachable-loop`][157]                                   | `error`  |                                                                        |
| [`no-unsafe-finally`][158]                                     | `error`  |                                                                        |
| [`no-unsafe-negation`][159]                                    | `error`  |                                                                        |
| [`no-unsafe-optional-chaining`][160]                           | `error`  | `{"disallowArithmeticOperators":true}`                                 |
| [`no-unused-expressions`][161]                                 | `error`  |                                                                        |
| [`no-unused-labels`][162]                                      | `error`  |                                                                        |
| [`no-unused-private-class-members`][163]                       | `error`  |                                                                        |
| [`no-unused-vars`][164]                                        | `error`  | [see Config][config]                                                   |
| [`no-use-before-define`][165]                                  | `error`  |                                                                        |
| [`no-useless-backreference`][166]                              | `error`  |                                                                        |
| [`no-useless-catch`][167]                                      | `error`  |                                                                        |
| [`no-useless-computed-key`][168]                               | `error`  |                                                                        |
| [`no-useless-concat`][169]                                     | `error`  |                                                                        |
| [`no-useless-constructor`][170]                                | `error`  |                                                                        |
| [`no-useless-escape`][171]                                     | `error`  |                                                                        |
| [`no-useless-rename`][172]                                     | `error`  |                                                                        |
| [`no-useless-return`][173]                                     | `error`  |                                                                        |
| [`no-void`][174]                                               | `error`  |                                                                        |
| [`no-with`][175]                                               | `error`  |                                                                        |
| [`object-shorthand`][176]                                      | `error`  | `"methods"`                                                            |
| [`one-var`][177]                                               | `error`  | `"never"`                                                              |
| [`operator-assignment`][178]                                   | `error`  |                                                                        |
| [`prefer-arrow-callback`][179]                                 | `error`  |                                                                        |
| [`prefer-const`][180]                                          | `error`  | `{"ignoreReadBeforeAssign":true}`                                      |
| [`prefer-exponentiation-operator`][181]                        | `error`  |                                                                        |
| [`prefer-numeric-literals`][182]                               | `error`  |                                                                        |
| [`prefer-object-spread`][183]                                  | `error`  |                                                                        |
| [`prefer-promise-reject-errors`][184]                          | `error`  | `{"allowEmptyReject":true}`                                            |
| [`prefer-regex-literals`][185]                                 | `error`  | `{"disallowRedundantWrapping":true}`                                   |
| [`prefer-rest-params`][186]                                    | `error`  |                                                                        |
| [`prefer-spread`][187]                                         | `error`  |                                                                        |
| [`radix`][188]                                                 | `error`  |                                                                        |
| [`react-js/default-props-match-prop-types`][189]               | `error`  | `{"allowRequiredDefaults":false}`                                      |
| [`react-js/destructuring-assignment`][190]                     | `error`  |                                                                        |
| [`react-js/forbid-foreign-prop-types`][191]                    | `warn`   | `{"allowInPropTypes":true}`                                            |
| [`react-js/forbid-prop-types`][192]                            | `error`  | `{"checkContextTypes":true,"checkChildContextTypes":true}`             |
| [`react-js/no-access-state-in-setstate`][193]                  | `error`  |                                                                        |
| [`react-js/no-arrow-function-lifecycle`][194]                  | `error`  |                                                                        |
| [`react-js/no-deprecated`][195]                                | `error`  |                                                                        |
| [`react-js/no-invalid-html-attribute`][196]                    | `error`  |                                                                        |
| [`react-js/no-typos`][197]                                     | `error`  |                                                                        |
| [`react-js/no-unused-class-component-methods`][198]            | `error`  |                                                                        |
| [`react-js/no-unused-prop-types`][199]                         | `error`  |                                                                        |
| [`react-js/no-unused-state`][200]                              | `error`  |                                                                        |
| [`react-js/prefer-exact-props`][201]                           | `error`  |                                                                        |
| [`react-js/prefer-stateless-function`][202]                    | `error`  | `{"ignorePureComponents":true}`                                        |
| [`react-js/require-default-props`][203]                        | `error`  | `{"forbidDefaultForRequired":true}`                                    |
| [`react-js/static-property-placement`][204]                    | `error`  | `"property assignment"`                                                |
| [`react/button-has-type`][205]                                 | `error`  | `{"reset":false}`                                                      |
| [`react/display-name`][206]                                    | `error`  |                                                                        |
| [`react/error-boundaries`][207]                                | `error`  |                                                                        |
| [`react/exhaustive-deps`][208]                                 | `error`  |                                                                        |
| [`react/function-component-definition`][209]                   | `error`  | [see Config][config]                                                   |
| [`react/globals`][210]                                         | `error`  |                                                                        |
| [`react/hook-use-state`][211]                                  | `error`  |                                                                        |
| [`react/immutability`][212]                                    | `error`  |                                                                        |
| [`react/incompatible-library`][213]                            | `warn`   |                                                                        |
| [`react/jsx-curly-brace-presence`][214]                        | `error`  | `{"props":"never","children":"never"}`                                 |
| [`react/jsx-filename-extension`][215]                          | `error`  |                                                                        |
| [`react/jsx-fragments`][216]                                   | `error`  |                                                                        |
| [`react/jsx-key`][217]                                         | `error`  |                                                                        |
| [`react/jsx-no-comment-textnodes`][218]                        | `error`  |                                                                        |
| [`react/jsx-no-constructed-context-values`][219]               | `error`  |                                                                        |
| [`react/jsx-no-duplicate-props`][220]                          | `error`  |                                                                        |
| [`react/jsx-no-script-url`][221]                               | `error`  |                                                                        |
| [`react/jsx-no-target-blank`][222]                             | `error`  |                                                                        |
| [`react/jsx-no-undef`][223]                                    | `error`  |                                                                        |
| [`react/jsx-no-useless-fragment`][224]                         | `error`  |                                                                        |
| [`react/jsx-pascal-case`][225]                                 | `error`  | `{"allowAllCaps":true}`                                                |
| [`react/jsx-props-no-spreading`][226]                          | `error`  | `{"explicitSpread":"ignore"}`                                          |
| [`react/no-array-index-key`][227]                              | `error`  |                                                                        |
| [`react/no-children-prop`][228]                                | `error`  |                                                                        |
| [`react/no-danger`][229]                                       | `warn`   |                                                                        |
| [`react/no-danger-with-children`][230]                         | `error`  |                                                                        |
| [`react/no-did-update-set-state`][231]                         | `error`  |                                                                        |
| [`react/no-direct-mutation-state`][232]                        | `error`  |                                                                        |
| [`react/no-find-dom-node`][233]                                | `error`  |                                                                        |
| [`react/no-is-mounted`][234]                                   | `error`  |                                                                        |
| [`react/no-namespace`][235]                                    | `error`  |                                                                        |
| [`react/no-redundant-should-component-update`][236]            | `error`  |                                                                        |
| [`react/no-render-return-value`][237]                          | `error`  |                                                                        |
| [`react/no-string-refs`][238]                                  | `error`  |                                                                        |
| [`react/no-this-in-sfc`][239]                                  | `error`  |                                                                        |
| [`react/no-unescaped-entities`][240]                           | `error`  |                                                                        |
| [`react/no-unknown-property`][241]                             | `error`  |                                                                        |
| [`react/no-unstable-nested-components`][242]                   | `error`  |                                                                        |
| [`react/no-will-update-set-state`][243]                        | `error`  |                                                                        |
| [`react/preserve-manual-memoization`][244]                     | `error`  |                                                                        |
| [`react/purity`][245]                                          | `error`  |                                                                        |
| [`react/react-in-jsx-scope`][246]                              | `error`  |                                                                        |
| [`react/refs`][247]                                            | `error`  |                                                                        |
| [`react/require-render-return`][248]                           | `error`  |                                                                        |
| [`react/rules-of-hooks`][249]                                  | `error`  |                                                                        |
| [`react/self-closing-comp`][250]                               | `error`  |                                                                        |
| [`react/set-state-in-effect`][251]                             | `error`  |                                                                        |
| [`react/set-state-in-render`][252]                             | `error`  |                                                                        |
| [`react/state-in-constructor`][253]                            | `error`  |                                                                        |
| [`react/static-components`][254]                               | `error`  |                                                                        |
| [`react/style-prop-object`][255]                               | `error`  |                                                                        |
| [`react/unsupported-syntax`][256]                              | `warn`   |                                                                        |
| [`react/use-memo`][257]                                        | `error`  |                                                                        |
| [`react/void-dom-elements-no-children`][258]                   | `error`  |                                                                        |
| [`require-yield`][259]                                         | `error`  |                                                                        |
| [`symbol-description`][260]                                    | `error`  |                                                                        |
| [`typescript/adjacent-overload-signatures`][261]               | `error`  |                                                                        |
| [`typescript/array-type`][262]                                 | `error`  | `{"default":"array-simple"}`                                           |
| [`typescript/ban-ts-comment`][263]                             | `error`  | `{"minimumDescriptionLength":10}`                                      |
| [`typescript/ban-tslint-comment`][264]                         | `error`  |                                                                        |
| [`typescript/class-literal-property-style`][265]               | `error`  |                                                                        |
| [`typescript/consistent-generic-constructors`][266]            | `error`  |                                                                        |
| [`typescript/consistent-return`][267]                          | `error`  |                                                                        |
| [`typescript/consistent-type-assertions`][268]                 | `error`  |                                                                        |
| [`typescript/consistent-type-definitions`][269]                | `error`  |                                                                        |
| [`typescript/dot-notation`][270]                               | `error`  |                                                                        |
| [`typescript/no-confusing-non-null-assertion`][271]            | `error`  |                                                                        |
| [`typescript/no-duplicate-enum-values`][272]                   | `error`  |                                                                        |
| [`typescript/no-dynamic-delete`][273]                          | `error`  |                                                                        |
| [`typescript/no-empty-object-type`][274]                       | `error`  |                                                                        |
| [`typescript/no-explicit-any`][275]                            | `error`  |                                                                        |
| [`typescript/no-extra-non-null-assertion`][276]                | `error`  |                                                                        |
| [`typescript/no-extraneous-class`][277]                        | `error`  | `{"allowConstructorOnly":true}`                                        |
| [`typescript/no-inferrable-types`][278]                        | `error`  |                                                                        |
| [`typescript/no-invalid-void-type`][279]                       | `error`  |                                                                        |
| [`typescript/no-misused-new`][280]                             | `error`  |                                                                        |
| [`typescript/no-namespace`][281]                               | `error`  |                                                                        |
| [`typescript/no-non-null-asserted-nullish-coalescing`][282]    | `error`  |                                                                        |
| [`typescript/no-non-null-asserted-optional-chain`][283]        | `error`  |                                                                        |
| [`typescript/no-require-imports`][284]                         | `error`  |                                                                        |
| [`typescript/no-this-alias`][285]                              | `error`  |                                                                        |
| [`typescript/no-unnecessary-type-constraint`][286]             | `error`  |                                                                        |
| [`typescript/no-unsafe-declaration-merging`][287]              | `error`  |                                                                        |
| [`typescript/no-unsafe-function-type`][288]                    | `error`  |                                                                        |
| [`typescript/no-wrapper-object-types`][289]                    | `error`  |                                                                        |
| [`typescript/prefer-as-const`][290]                            | `error`  |                                                                        |
| [`typescript/prefer-for-of`][291]                              | `error`  |                                                                        |
| [`typescript/prefer-function-type`][292]                       | `error`  |                                                                        |
| [`typescript/prefer-literal-enum-member`][293]                 | `error`  |                                                                        |
| [`typescript/prefer-namespace-keyword`][294]                   | `error`  |                                                                        |
| [`typescript/triple-slash-reference`][295]                     | `error`  |                                                                        |
| [`typescript/unified-signatures`][296]                         | `error`  |                                                                        |
| [`unicode-bom`][297]                                           | `error`  | `"never"`                                                              |
| [`unicorn/no-useless-undefined`][298]                          | `error`  | `{"checkArguments":false,"checkArrowFunctionBody":false}`              |
| [`use-isnan`][299]                                             | `error`  |                                                                        |
| [`valid-typeof`][300]                                          | `error`  | `{"requireStringLiterals":true}`                                       |
| [`vars-on-top`][301]                                           | `error`  |                                                                        |
| [`wagtail/camelcase`][302]                                     | `error`  | `{"properties":"never"}`                                               |
| [`yoda`][303]                                                  | `error`  |                                                                        |

[config]: https://github.com/wagtail/oxlint-config-wagtail/blob/main/index.js
[0]: https://eslint.style/rules/lines-between-class-members
[1]: https://eslint.style/rules/spaced-comment
[2]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html
[3]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html
[4]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html
[5]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html
[6]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
[7]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case-last.html
[8]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-param-last.html
[9]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html
[10]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html
[11]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html
[12]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html
[13]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html
[14]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html
[15]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html
[16]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
[17]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
[18]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
[19]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
[20]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
[21]: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
[22]: https://oxc.rs/docs/guide/usage/linter/rules/import/default.html
[23]: https://oxc.rs/docs/guide/usage/linter/rules/import/export.html
[24]: https://oxc.rs/docs/guide/usage/linter/rules/import/first.html
[25]: https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
[26]: https://oxc.rs/docs/guide/usage/linter/rules/import/newline-after-import.html
[27]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html
[28]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html
[29]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
[30]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html
[31]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html
[32]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html
[33]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html
[34]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html
[35]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html
[36]: https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html
[37]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/alt-text.html
[38]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html
[39]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html
[40]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html
[41]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html
[42]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-proptypes.html
[43]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html
[44]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.html
[45]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html
[46]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html
[47]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/control-has-associated-label.html
[48]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html
[49]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html
[50]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html
[51]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.html
[52]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/interactive-supports-focus.html
[53]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html
[54]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/lang.html
[55]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.html
[56]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html
[57]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html
[58]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html
[59]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.html
[60]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-interactive-element-to-noninteractive-role.html
[61]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-interactions.html
[62]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-to-interactive-role.html
[63]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-tabindex.html
[64]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html
[65]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-static-element-interactions.html
[66]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html
[67]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.html
[68]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/scope.html
[69]: https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html
[70]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap.html
[71]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html
[72]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html
[73]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html
[74]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html
[75]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html
[76]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html
[77]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-case-declarations.html
[78]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html
[79]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html
[80]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html
[81]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html
[82]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html
[83]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html
[84]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html
[85]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return.html
[86]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-continue.html
[87]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-control-regex.html
[88]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html
[89]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-delete-var.html
[90]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html
[91]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html
[92]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html
[93]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html
[94]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html
[95]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html
[96]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-character-class.html
[97]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html
[98]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html
[99]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-static-block.html
[100]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html
[101]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html
[102]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html
[103]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html
[104]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html
[105]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label.html
[106]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html
[107]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html
[108]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html
[109]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html
[110]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html
[111]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html
[112]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html
[113]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html
[114]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html
[115]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var.html
[116]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html
[117]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html
[118]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lonely-if.html
[119]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html
[120]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html
[121]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html
[122]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html
[123]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str.html
[124]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html
[125]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html
[126]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func.html
[127]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html
[128]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html
[129]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html
[130]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html
[131]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor.html
[132]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html
[133]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html
[134]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html
[135]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html
[136]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html
[137]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html
[138]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html
[139]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html
[140]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html
[141]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-properties.html
[142]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html
[143]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url.html
[144]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html
[145]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html
[146]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html
[147]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html
[148]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html
[149]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html
[150]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html
[151]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html
[152]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html
[153]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html
[154]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-underscore-dangle.html
[155]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
[156]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html
[157]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable-loop.html
[158]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html
[159]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html
[160]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html
[161]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html
[162]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-labels.html
[163]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html
[164]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html
[165]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-use-before-define.html
[166]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html
[167]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html
[168]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html
[169]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat.html
[170]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html
[171]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html
[172]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html
[173]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return.html
[174]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html
[175]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html
[176]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand.html
[177]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/one-var.html
[178]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html
[179]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback.html
[180]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
[181]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html
[182]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html
[183]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html
[184]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html
[185]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-regex-literals.html
[186]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html
[187]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html
[188]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html
[189]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
[190]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
[191]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
[192]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
[193]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
[194]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
[195]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
[196]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
[197]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
[198]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
[199]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
[200]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
[201]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
[202]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
[203]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
[204]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
[205]: https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type.html
[206]: https://oxc.rs/docs/guide/usage/linter/rules/react/display-name.html
[207]: https://oxc.rs/docs/guide/usage/linter/rules/react/error-boundaries.html
[208]: https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html
[209]: https://oxc.rs/docs/guide/usage/linter/rules/react/function-component-definition.html
[210]: https://oxc.rs/docs/guide/usage/linter/rules/react/globals.html
[211]: https://oxc.rs/docs/guide/usage/linter/rules/react/hook-use-state.html
[212]: https://oxc.rs/docs/guide/usage/linter/rules/react/immutability.html
[213]: https://oxc.rs/docs/guide/usage/linter/rules/react/incompatible-library.html
[214]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html
[215]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension.html
[216]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments.html
[217]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key.html
[218]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html
[219]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-constructed-context-values.html
[220]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html
[221]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url.html
[222]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html
[223]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef.html
[224]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html
[225]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case.html
[226]: https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spreading.html
[227]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key.html
[228]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-children-prop.html
[229]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger.html
[230]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger-with-children.html
[231]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-update-set-state.html
[232]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html
[233]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-find-dom-node.html
[234]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-is-mounted.html
[235]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-namespace.html
[236]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html
[237]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value.html
[238]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs.html
[239]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc.html
[240]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html
[241]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html
[242]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-unstable-nested-components.html
[243]: https://oxc.rs/docs/guide/usage/linter/rules/react/no-will-update-set-state.html
[244]: https://oxc.rs/docs/guide/usage/linter/rules/react/preserve-manual-memoization.html
[245]: https://oxc.rs/docs/guide/usage/linter/rules/react/purity.html
[246]: https://oxc.rs/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html
[247]: https://oxc.rs/docs/guide/usage/linter/rules/react/refs.html
[248]: https://oxc.rs/docs/guide/usage/linter/rules/react/require-render-return.html
[249]: https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks.html
[250]: https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html
[251]: https://oxc.rs/docs/guide/usage/linter/rules/react/set-state-in-effect.html
[252]: https://oxc.rs/docs/guide/usage/linter/rules/react/set-state-in-render.html
[253]: https://oxc.rs/docs/guide/usage/linter/rules/react/state-in-constructor.html
[254]: https://oxc.rs/docs/guide/usage/linter/rules/react/static-components.html
[255]: https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object.html
[256]: https://oxc.rs/docs/guide/usage/linter/rules/react/unsupported-syntax.html
[257]: https://oxc.rs/docs/guide/usage/linter/rules/react/use-memo.html
[258]: https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html
[259]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html
[260]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description.html
[261]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.html
[262]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/array-type.html
[263]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html
[264]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html
[265]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/class-literal-property-style.html
[266]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-generic-constructors.html
[267]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html
[268]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-assertions.html
[269]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html
[270]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/dot-notation.html
[271]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html
[272]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html
[273]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html
[274]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-object-type.html
[275]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html
[276]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html
[277]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html
[278]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-inferrable-types.html
[279]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-invalid-void-type.html
[280]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-new.html
[281]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-namespace.html
[282]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html
[283]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html
[284]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html
[285]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-this-alias.html
[286]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html
[287]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html
[288]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html
[289]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html
[290]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-as-const.html
[291]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-for-of.html
[292]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-function-type.html
[293]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html
[294]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html
[295]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html
[296]: https://oxc.rs/docs/guide/usage/linter/rules/typescript/unified-signatures.html
[297]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html
[298]: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html
[299]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html
[300]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html
[301]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html
[302]: https://eslint.org/docs/latest/rules/camelcase
[303]: https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html
