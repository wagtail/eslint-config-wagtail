# eslint-config-wagtail

The package provides Wagtail's .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including Airbnb's config
(which has ECMAScript 6 and React). It requires `eslint`,
`eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. Run `npm install eslint eslint-config-wagtail eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev`
2. Add `"extends": "wagtail"` to your `.eslintrc`

## Links

- [Eslint](https://eslint.org/)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)

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
