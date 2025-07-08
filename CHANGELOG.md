# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.5.0](https://github.com/wagtail/eslint-config-wagtail/releases/tag/v0.5.0) - 2025-07-08)

### Changed

- Allow assignment of any object properties (`no-param-reassign`). Previously they were only allowed for specific property names.
- Allow `for…of` loops (`no-restricted-syntax`).

## [v0.4.0](https://github.com/wagtail/eslint-config-wagtail/releases/tag/v0.4.0) - 2021-12-23)

- Update to ESLint v8 and [eslint-config-airbnb v19.0.2](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md), changing rules that are applied with this config.

There are a number of existing rules that are now enforced:

- [default-case-last](https://eslint.org/docs/rules/default-case-last)
- [default-param-last](https://eslint.org/docs/rules/default-param-last)
- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)
- [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)
- [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)
- [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports) (restricted: default, then)
- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
- [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)
- [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)
- [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator) (`**` over `Math.pow`)
- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)
- [react/jsx-no-script-url](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)
- [react/jsx-no-useless-fragment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)

And brand new rules introduced with this release:

- [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
- [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)
- [import/no-relative-packages](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)
- [react/no-arrow-function-lifecycle](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md)
- [react/no-invalid-html-attribute](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md)
- [react/no-namespace](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)
- [react/no-unstable-nested-components](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)
- [react/no-unused-class-component-methods](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md)
- [react/jsx-no-constructed-context-values](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)

### BREAKING CHANGES

This release updates most of the dependencies of the config:

| package                   | from    | to      |
| ------------------------- | ------- | ------- |
| eslint                    | ^7.2.0  | ^8.2.0  |
| eslint-config-airbnb      | ^18.2.1 | ^19.0.2 |
| eslint-config-prettier    |         | ^8.3.0  |
| eslint-plugin-react       | ^7.24.0 | ^7.27.1 |
| eslint-plugin-react-hooks | ^4.2.0  | ^4.3.0  |
| eslint-plugin-jsx-a11y    | ^6.4.1  | ^6.5.1  |
| eslint-plugin-import      | ^2.23.4 | ^2.25.3 |

Users of npm v7 can `npm install --save-dev @wagtail/eslint-config-wagtail@latest` and this will automatically install all required peer dependencies.

For older versions of npm, use `npx install-peerdeps --dev @wagtail/eslint-config-wagtail@latest` so all other peerDependencies are updated as well.

## [v0.3.0](https://github.com/wagtail/eslint-config-wagtail/releases/tag/v0.3.0) - 2021-05-13)

### Changed

- Disabled `no-warning-comments`
- Disabled `react/prop-types`
- Renamed `master` branch to `main`

## [v0.2.0](https://github.com/wagtail/eslint-config-wagtail/releases/tag/v0.2.0) - 2020-06-05

### Changed

- Rename to `@wagtail/eslint-config-wagtail` to match Wagtail’s stylelint config
- Upgrade to ESLint v6
- Update to use `eslint:recommended` as a baseline.
- Update to latest `eslint-config-airbnb` and its dependencies.
- Update package metadata
- Add MIT license
- Add more npm keywords
- Whitelist files to be published to npm

## [v0.1.1](https://github.com/wagtail/eslint-config-wagtail/releases/tag/v0.1.1) - 2016-09-26

### Changed

- Fix JSX prop indentation level

## [v0.1.0](https://github.com/wagtail/eslint-config-wagtail/releases/tag/v0.1.0) - 2016-06-16

- Initial release
