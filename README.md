# eslint-config-wagtail

The package provides Wagtail's .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including Airbnb's config
(which has ECMAScript 6 and React).

1. Run `npm install eslint eslint-config-wagtail --save-dev`
2. Add `"extends": "wagtail"` to your `.eslintrc`
