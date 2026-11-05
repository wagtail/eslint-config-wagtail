# Contribution Guidelines

## Install

- Required [Node](https://nodejs.org)
- We recommend using [fnm](https://github.com/Schniz/fnm)
- Clone the project on to your computer
- Run `fnm install` to ensure you have the correct Node version
- Run `npm install` to install project dependencies
- Ensure your editor is set up to use [editorconfig](https://editorconfig.org/), [Prettier](https://prettier.io/) and [oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Development

- Run `fnm use` to set Node to the correct version
- Run tests via `npm run test`
- Run linting via `npm run lint`
- Run preflight checks before commiting final code via `npm run preflight`
- Note: When working with the rule set, only modify the `index.js` file (and `plugin/` for vendored rules), not the `oxlint.config.ts` file as it is for the linting of this project only
- After changing rules, run `npm run write-rules` to update the README, and `node --test --test-update-snapshots` to update the rules snapshot
