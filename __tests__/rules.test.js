const { ESLint } = require('eslint');
const config = require('../index');

const getComputedConfig = async (baseConfig) => {
  const eslint = new ESLint({
    useEslintrc: false,
    allowInlineConfig: false,
    baseConfig,
  });

  const computedConfig = await eslint.calculateConfigForFile('index.js');
  // Delete env-specific config keys.
  delete computedConfig.filePath;
  delete computedConfig.baseDirectory;

  return computedConfig;
};

describe('rules snapshot', () => {
  it('has stable config rules', async () => {
    const computed = await getComputedConfig(config);
    expect(computed).toMatchInlineSnapshot(`
      {
        "env": {
          "es6": true,
          "node": true,
        },
        "globals": {},
        "ignorePatterns": [
          "node_modules/",
        ],
        "noInlineConfig": undefined,
        "parser": null,
        "parserOptions": {
          "ecmaFeatures": {
            "generators": false,
            "jsx": true,
            "objectLiteralDuplicateProperties": false,
          },
          "ecmaVersion": 2018,
          "sourceType": "module",
        },
        "plugins": [
          "import",
          "react",
          "jsx-a11y",
          "react-hooks",
        ],
        "reportUnusedDisableDirectives": undefined,
        "rules": {
          "@babel/object-curly-spacing": [
            "off",
          ],
          "@babel/semi": [
            "off",
          ],
          "@typescript-eslint/block-spacing": [
            "off",
          ],
          "@typescript-eslint/brace-style": [
            "off",
          ],
          "@typescript-eslint/comma-dangle": [
            "off",
          ],
          "@typescript-eslint/comma-spacing": [
            "off",
          ],
          "@typescript-eslint/func-call-spacing": [
            "off",
          ],
          "@typescript-eslint/indent": [
            "off",
          ],
          "@typescript-eslint/key-spacing": [
            "off",
          ],
          "@typescript-eslint/keyword-spacing": [
            "off",
          ],
          "@typescript-eslint/lines-around-comment": [
            0,
          ],
          "@typescript-eslint/member-delimiter-style": [
            "off",
          ],
          "@typescript-eslint/no-extra-parens": [
            "off",
          ],
          "@typescript-eslint/no-extra-semi": [
            "off",
          ],
          "@typescript-eslint/object-curly-spacing": [
            "off",
          ],
          "@typescript-eslint/quotes": [
            0,
          ],
          "@typescript-eslint/semi": [
            "off",
          ],
          "@typescript-eslint/space-before-blocks": [
            "off",
          ],
          "@typescript-eslint/space-before-function-paren": [
            "off",
          ],
          "@typescript-eslint/space-infix-ops": [
            "off",
          ],
          "@typescript-eslint/type-annotation-spacing": [
            "off",
          ],
          "accessor-pairs": [
            "off",
          ],
          "array-bracket-newline": [
            "off",
            "consistent",
          ],
          "array-bracket-spacing": [
            "off",
            "never",
          ],
          "array-callback-return": [
            "error",
            {
              "allowImplicit": true,
              "allowVoid": false,
              "checkForEach": false,
            },
          ],
          "array-element-newline": [
            "off",
            {
              "minItems": 3,
              "multiline": true,
            },
          ],
          "arrow-body-style": [
            "error",
            "as-needed",
            {
              "requireReturnForObjectLiteral": false,
            },
          ],
          "arrow-parens": [
            "off",
            "always",
          ],
          "arrow-spacing": [
            "off",
            {
              "after": true,
              "before": true,
            },
          ],
          "babel/object-curly-spacing": [
            "off",
          ],
          "babel/quotes": [
            0,
          ],
          "babel/semi": [
            "off",
          ],
          "block-scoped-var": [
            "error",
          ],
          "block-spacing": [
            "off",
            "always",
          ],
          "brace-style": [
            "off",
            "1tbs",
            {
              "allowSingleLine": true,
            },
          ],
          "callback-return": [
            "off",
          ],
          "camelcase": [
            "error",
            {
              "ignoreDestructuring": false,
              "ignoreGlobals": false,
              "ignoreImports": false,
              "properties": "never",
            },
          ],
          "capitalized-comments": [
            "off",
            "never",
            {
              "block": {
                "ignoreConsecutiveComments": true,
                "ignoreInlineComments": true,
                "ignorePattern": ".*",
              },
              "line": {
                "ignoreConsecutiveComments": true,
                "ignoreInlineComments": true,
                "ignorePattern": ".*",
              },
            },
          ],
          "class-methods-use-this": [
            "off",
            {
              "enforceForClassFields": true,
              "exceptMethods": [
                "render",
                "getInitialState",
                "getDefaultProps",
                "getChildContext",
                "componentWillMount",
                "UNSAFE_componentWillMount",
                "componentDidMount",
                "componentWillReceiveProps",
                "UNSAFE_componentWillReceiveProps",
                "shouldComponentUpdate",
                "componentWillUpdate",
                "UNSAFE_componentWillUpdate",
                "componentDidUpdate",
                "componentWillUnmount",
                "componentDidCatch",
                "getSnapshotBeforeUpdate",
              ],
            },
          ],
          "comma-dangle": [
            "off",
            {
              "arrays": "always-multiline",
              "exports": "always-multiline",
              "functions": "always-multiline",
              "imports": "always-multiline",
              "objects": "always-multiline",
            },
          ],
          "comma-spacing": [
            "off",
            {
              "after": true,
              "before": false,
            },
          ],
          "comma-style": [
            "off",
            "last",
            {
              "exceptions": {
                "ArrayExpression": false,
                "ArrayPattern": false,
                "ArrowFunctionExpression": false,
                "CallExpression": false,
                "FunctionDeclaration": false,
                "FunctionExpression": false,
                "ImportDeclaration": false,
                "NewExpression": false,
                "ObjectExpression": false,
                "ObjectPattern": false,
                "VariableDeclaration": false,
              },
            },
          ],
          "complexity": [
            "off",
            20,
          ],
          "computed-property-spacing": [
            "off",
            "never",
          ],
          "consistent-return": [
            "error",
          ],
          "consistent-this": [
            "off",
          ],
          "constructor-super": [
            "error",
          ],
          "curly": [
            0,
            "multi-line",
          ],
          "default-case": [
            "error",
            {
              "commentPattern": "^no default$",
            },
          ],
          "default-case-last": [
            "error",
          ],
          "default-param-last": [
            "error",
          ],
          "dot-location": [
            "off",
            "property",
          ],
          "dot-notation": [
            "error",
            {
              "allowKeywords": true,
              "allowPattern": "",
            },
          ],
          "eol-last": [
            "off",
            "always",
          ],
          "eqeqeq": [
            "error",
            "always",
            {
              "null": "ignore",
            },
          ],
          "flowtype/boolean-style": [
            "off",
          ],
          "flowtype/delimiter-dangle": [
            "off",
          ],
          "flowtype/generic-spacing": [
            "off",
          ],
          "flowtype/object-type-curly-spacing": [
            "off",
          ],
          "flowtype/object-type-delimiter": [
            "off",
          ],
          "flowtype/quotes": [
            "off",
          ],
          "flowtype/semi": [
            "off",
          ],
          "flowtype/space-after-type-colon": [
            "off",
          ],
          "flowtype/space-before-generic-bracket": [
            "off",
          ],
          "flowtype/space-before-type-colon": [
            "off",
          ],
          "flowtype/union-intersection-spacing": [
            "off",
          ],
          "for-direction": [
            "error",
          ],
          "func-call-spacing": [
            "off",
            "never",
          ],
          "func-name-matching": [
            "off",
            "always",
            {
              "considerPropertyDescriptor": true,
              "includeCommonJSModuleExports": false,
            },
          ],
          "func-names": [
            "warn",
          ],
          "func-style": [
            "off",
            "expression",
          ],
          "function-call-argument-newline": [
            "off",
            "consistent",
          ],
          "function-paren-newline": [
            "off",
            "multiline-arguments",
          ],
          "generator-star": [
            "off",
          ],
          "generator-star-spacing": [
            "off",
            {
              "after": true,
              "before": false,
            },
          ],
          "getter-return": [
            "error",
            {
              "allowImplicit": true,
            },
          ],
          "global-require": [
            "error",
          ],
          "grouped-accessor-pairs": [
            "error",
          ],
          "guard-for-in": [
            "error",
          ],
          "handle-callback-err": [
            "off",
          ],
          "id-denylist": [
            "off",
          ],
          "id-length": [
            "warn",
            {
              "exceptions": [
                "x",
                "y",
                "e",
                "i",
                "j",
                "k",
                "d",
                "n",
                "_",
                "$",
              ],
              "min": 2,
            },
          ],
          "id-match": [
            "off",
          ],
          "implicit-arrow-linebreak": [
            "off",
            "beside",
          ],
          "import/default": [
            "off",
          ],
          "import/dynamic-import-chunkname": [
            "off",
            {
              "importFunctions": [],
              "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+",
            },
          ],
          "import/export": [
            "error",
          ],
          "import/exports-last": [
            "off",
          ],
          "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "mjs": "never",
            },
          ],
          "import/first": [
            "error",
          ],
          "import/group-exports": [
            "off",
          ],
          "import/imports-first": [
            "off",
          ],
          "import/max-dependencies": [
            "off",
            {
              "max": 10,
            },
          ],
          "import/named": [
            "error",
          ],
          "import/namespace": [
            "off",
          ],
          "import/newline-after-import": [
            "error",
          ],
          "import/no-absolute-path": [
            "error",
          ],
          "import/no-amd": [
            "error",
          ],
          "import/no-anonymous-default-export": [
            "off",
            {
              "allowAnonymousClass": false,
              "allowAnonymousFunction": false,
              "allowArray": false,
              "allowArrowFunction": false,
              "allowLiteral": false,
              "allowObject": false,
            },
          ],
          "import/no-commonjs": [
            "off",
          ],
          "import/no-cycle": [
            "error",
            {
              "allowUnsafeDynamicCyclicDependency": false,
              "disableScc": false,
              "ignoreExternal": false,
              "maxDepth": "∞",
            },
          ],
          "import/no-default-export": [
            "off",
          ],
          "import/no-deprecated": [
            "off",
          ],
          "import/no-duplicates": [
            "error",
          ],
          "import/no-dynamic-require": [
            "error",
          ],
          "import/no-extraneous-dependencies": [
            "error",
            {
              "devDependencies": [
                "test/**",
                "tests/**",
                "spec/**",
                "**/__tests__/**",
                "**/__mocks__/**",
                "test.{js,jsx}",
                "test-*.{js,jsx}",
                "**/*{.,_}{test,spec}.{js,jsx}",
                "**/jest.config.js",
                "**/jest.setup.js",
                "**/vue.config.js",
                "**/webpack.config.js",
                "**/webpack.config.*.js",
                "**/rollup.config.js",
                "**/rollup.config.*.js",
                "**/gulpfile.js",
                "**/gulpfile.*.js",
                "**/Gruntfile{,.js}",
                "**/protractor.conf.js",
                "**/protractor.conf.*.js",
                "**/karma.conf.js",
                "**/.eslintrc.js",
              ],
              "optionalDependencies": false,
            },
          ],
          "import/no-import-module-exports": [
            "error",
            {
              "exceptions": [],
            },
          ],
          "import/no-internal-modules": [
            "off",
            {
              "allow": [],
            },
          ],
          "import/no-mutable-exports": [
            "error",
          ],
          "import/no-named-as-default": [
            "error",
          ],
          "import/no-named-as-default-member": [
            "error",
          ],
          "import/no-named-default": [
            "error",
          ],
          "import/no-named-export": [
            "off",
          ],
          "import/no-namespace": [
            "off",
          ],
          "import/no-nodejs-modules": [
            "off",
          ],
          "import/no-relative-packages": [
            "error",
          ],
          "import/no-relative-parent-imports": [
            "off",
          ],
          "import/no-restricted-paths": [
            "off",
          ],
          "import/no-self-import": [
            "error",
          ],
          "import/no-unassigned-import": [
            "off",
          ],
          "import/no-unresolved": [
            "error",
            {
              "caseSensitive": true,
              "caseSensitiveStrict": false,
              "commonjs": true,
            },
          ],
          "import/no-unused-modules": [
            "off",
            {
              "ignoreExports": [],
              "missingExports": true,
              "unusedExports": true,
            },
          ],
          "import/no-useless-path-segments": [
            "error",
            {
              "commonjs": true,
            },
          ],
          "import/no-webpack-loader-syntax": [
            "error",
          ],
          "import/order": [
            "error",
            {
              "distinctGroup": true,
              "groups": [
                [
                  "builtin",
                  "external",
                  "internal",
                ],
              ],
              "named": false,
              "sortTypesGroup": false,
              "warnOnUnassignedImports": false,
            },
          ],
          "import/prefer-default-export": [
            "error",
          ],
          "import/unambiguous": [
            "off",
          ],
          "indent": [
            "off",
            2,
            {
              "ArrayExpression": 1,
              "CallExpression": {
                "arguments": 1,
              },
              "FunctionDeclaration": {
                "body": 1,
                "parameters": 1,
              },
              "FunctionExpression": {
                "body": 1,
                "parameters": 1,
              },
              "ImportDeclaration": 1,
              "ObjectExpression": 1,
              "SwitchCase": 1,
              "VariableDeclarator": 1,
              "flatTernaryExpressions": false,
              "ignoreComments": false,
              "ignoredNodes": [
                "JSXElement",
                "JSXElement > *",
                "JSXAttribute",
                "JSXIdentifier",
                "JSXNamespacedName",
                "JSXMemberExpression",
                "JSXSpreadAttribute",
                "JSXExpressionContainer",
                "JSXOpeningElement",
                "JSXClosingElement",
                "JSXFragment",
                "JSXOpeningFragment",
                "JSXClosingFragment",
                "JSXText",
                "JSXEmptyExpression",
                "JSXSpreadChild",
              ],
              "offsetTernaryExpressions": false,
              "outerIIFEBody": 1,
            },
          ],
          "indent-legacy": [
            "off",
          ],
          "init-declarations": [
            "off",
          ],
          "jsx-a11y/accessible-emoji": [
            "off",
          ],
          "jsx-a11y/alt-text": [
            "error",
            {
              "area": [],
              "elements": [
                "img",
                "object",
                "area",
                "input[type="image"]",
              ],
              "img": [],
              "input[type="image"]": [],
              "object": [],
            },
          ],
          "jsx-a11y/anchor-has-content": [
            "error",
            {
              "components": [],
            },
          ],
          "jsx-a11y/anchor-is-valid": [
            "error",
            {
              "aspects": [
                "noHref",
                "invalidHref",
                "preferButton",
              ],
              "components": [
                "Link",
              ],
              "specialLink": [
                "to",
              ],
            },
          ],
          "jsx-a11y/aria-activedescendant-has-tabindex": [
            "error",
          ],
          "jsx-a11y/aria-props": [
            "error",
          ],
          "jsx-a11y/aria-proptypes": [
            "error",
          ],
          "jsx-a11y/aria-role": [
            "error",
            {
              "ignoreNonDOM": false,
            },
          ],
          "jsx-a11y/aria-unsupported-elements": [
            "error",
          ],
          "jsx-a11y/autocomplete-valid": [
            "off",
            {
              "inputComponents": [],
            },
          ],
          "jsx-a11y/click-events-have-key-events": [
            "error",
          ],
          "jsx-a11y/control-has-associated-label": [
            "error",
            {
              "controlComponents": [],
              "depth": 5,
              "ignoreElements": [
                "audio",
                "canvas",
                "embed",
                "input",
                "textarea",
                "tr",
                "video",
              ],
              "ignoreRoles": [
                "grid",
                "listbox",
                "menu",
                "menubar",
                "radiogroup",
                "row",
                "tablist",
                "toolbar",
                "tree",
                "treegrid",
              ],
              "labelAttributes": [
                "label",
              ],
            },
          ],
          "jsx-a11y/heading-has-content": [
            "error",
            {
              "components": [
                "",
              ],
            },
          ],
          "jsx-a11y/html-has-lang": [
            "error",
          ],
          "jsx-a11y/iframe-has-title": [
            "error",
          ],
          "jsx-a11y/img-redundant-alt": [
            "error",
          ],
          "jsx-a11y/interactive-supports-focus": [
            "error",
          ],
          "jsx-a11y/label-has-associated-control": [
            "error",
            {
              "assert": "both",
              "controlComponents": [],
              "depth": 25,
              "labelAttributes": [],
              "labelComponents": [],
            },
          ],
          "jsx-a11y/label-has-for": [
            "off",
            {
              "allowChildren": false,
              "components": [],
              "required": {
                "every": [
                  "nesting",
                  "id",
                ],
              },
            },
          ],
          "jsx-a11y/lang": [
            "error",
          ],
          "jsx-a11y/media-has-caption": [
            "error",
            {
              "audio": [],
              "track": [],
              "video": [],
            },
          ],
          "jsx-a11y/mouse-events-have-key-events": [
            "error",
          ],
          "jsx-a11y/no-access-key": [
            "error",
          ],
          "jsx-a11y/no-autofocus": [
            "error",
            {
              "ignoreNonDOM": true,
            },
          ],
          "jsx-a11y/no-distracting-elements": [
            "error",
            {
              "elements": [
                "marquee",
                "blink",
              ],
            },
          ],
          "jsx-a11y/no-interactive-element-to-noninteractive-role": [
            "error",
            {
              "tr": [
                "none",
                "presentation",
              ],
            },
          ],
          "jsx-a11y/no-noninteractive-element-interactions": [
            "error",
            {
              "handlers": [
                "onClick",
                "onMouseDown",
                "onMouseUp",
                "onKeyPress",
                "onKeyDown",
                "onKeyUp",
              ],
            },
          ],
          "jsx-a11y/no-noninteractive-element-to-interactive-role": [
            "error",
            {
              "li": [
                "menuitem",
                "option",
                "row",
                "tab",
                "treeitem",
              ],
              "ol": [
                "listbox",
                "menu",
                "menubar",
                "radiogroup",
                "tablist",
                "tree",
                "treegrid",
              ],
              "table": [
                "grid",
              ],
              "td": [
                "gridcell",
              ],
              "ul": [
                "listbox",
                "menu",
                "menubar",
                "radiogroup",
                "tablist",
                "tree",
                "treegrid",
              ],
            },
          ],
          "jsx-a11y/no-noninteractive-tabindex": [
            "error",
            {
              "roles": [
                "tabpanel",
              ],
              "tags": [],
            },
          ],
          "jsx-a11y/no-onchange": [
            "off",
          ],
          "jsx-a11y/no-redundant-roles": [
            "error",
          ],
          "jsx-a11y/no-static-element-interactions": [
            "error",
            {
              "handlers": [
                "onClick",
                "onMouseDown",
                "onMouseUp",
                "onKeyPress",
                "onKeyDown",
                "onKeyUp",
              ],
            },
          ],
          "jsx-a11y/role-has-required-aria-props": [
            "error",
          ],
          "jsx-a11y/role-supports-aria-props": [
            "error",
          ],
          "jsx-a11y/scope": [
            "error",
          ],
          "jsx-a11y/tabindex-no-positive": [
            "error",
          ],
          "jsx-quotes": [
            "off",
            "prefer-double",
          ],
          "key-spacing": [
            "off",
            {
              "afterColon": true,
              "beforeColon": false,
            },
          ],
          "keyword-spacing": [
            "off",
            {
              "after": true,
              "before": true,
              "overrides": {
                "case": {
                  "after": true,
                },
                "return": {
                  "after": true,
                },
                "throw": {
                  "after": true,
                },
              },
            },
          ],
          "line-comment-position": [
            "off",
            {
              "applyDefaultPatterns": true,
              "ignorePattern": "",
              "position": "above",
            },
          ],
          "linebreak-style": [
            "off",
            "unix",
          ],
          "lines-around-comment": [
            0,
          ],
          "lines-around-directive": [
            "error",
            {
              "after": "always",
              "before": "always",
            },
          ],
          "lines-between-class-members": [
            "error",
            "always",
            {
              "exceptAfterSingleLine": false,
            },
          ],
          "max-classes-per-file": [
            "off",
            1,
          ],
          "max-depth": [
            "off",
            4,
          ],
          "max-len": [
            0,
            100,
            2,
            {
              "ignoreComments": false,
              "ignoreRegExpLiterals": true,
              "ignoreStrings": true,
              "ignoreTemplateLiterals": true,
              "ignoreUrls": true,
            },
          ],
          "max-lines": [
            "off",
            {
              "max": 300,
              "skipBlankLines": true,
              "skipComments": true,
            },
          ],
          "max-lines-per-function": [
            "off",
            {
              "IIFEs": true,
              "max": 50,
              "skipBlankLines": true,
              "skipComments": true,
            },
          ],
          "max-nested-callbacks": [
            "off",
          ],
          "max-params": [
            "off",
            3,
          ],
          "max-statements": [
            "off",
            10,
          ],
          "max-statements-per-line": [
            "off",
            {
              "max": 1,
            },
          ],
          "multiline-comment-style": [
            "off",
            "starred-block",
          ],
          "multiline-ternary": [
            "off",
            "never",
          ],
          "new-cap": [
            "error",
            {
              "capIsNew": false,
              "capIsNewExceptions": [
                "Immutable.Map",
                "Immutable.Set",
                "Immutable.List",
              ],
              "newIsCap": true,
              "newIsCapExceptions": [],
              "properties": true,
            },
          ],
          "new-parens": [
            "off",
          ],
          "newline-after-var": [
            "off",
          ],
          "newline-before-return": [
            "off",
          ],
          "newline-per-chained-call": [
            "off",
            {
              "ignoreChainWithDepth": 4,
            },
          ],
          "no-alert": [
            "warn",
          ],
          "no-array-constructor": [
            "error",
          ],
          "no-arrow-condition": [
            "off",
          ],
          "no-async-promise-executor": [
            "error",
          ],
          "no-await-in-loop": [
            "error",
          ],
          "no-bitwise": [
            "error",
          ],
          "no-buffer-constructor": [
            "error",
          ],
          "no-caller": [
            "error",
          ],
          "no-case-declarations": [
            "error",
          ],
          "no-catch-shadow": [
            "off",
          ],
          "no-class-assign": [
            "error",
          ],
          "no-comma-dangle": [
            "off",
          ],
          "no-compare-neg-zero": [
            "error",
          ],
          "no-cond-assign": [
            "error",
            "always",
          ],
          "no-confusing-arrow": [
            0,
            {
              "allowParens": true,
              "onlyOneSimpleParam": false,
            },
          ],
          "no-console": [
            "warn",
          ],
          "no-const-assign": [
            "error",
          ],
          "no-constant-binary-expression": [
            "error",
          ],
          "no-constant-condition": [
            "warn",
          ],
          "no-constructor-return": [
            "error",
          ],
          "no-continue": [
            "error",
          ],
          "no-control-regex": [
            "error",
          ],
          "no-debugger": [
            "error",
          ],
          "no-delete-var": [
            "error",
          ],
          "no-div-regex": [
            "off",
          ],
          "no-dupe-args": [
            "error",
          ],
          "no-dupe-class-members": [
            "error",
          ],
          "no-dupe-else-if": [
            "error",
          ],
          "no-dupe-keys": [
            "error",
          ],
          "no-duplicate-case": [
            "error",
          ],
          "no-duplicate-imports": [
            "off",
          ],
          "no-else-return": [
            "error",
            {
              "allowElseIf": false,
            },
          ],
          "no-empty": [
            "error",
          ],
          "no-empty-character-class": [
            "error",
          ],
          "no-empty-function": [
            "error",
            {
              "allow": [
                "arrowFunctions",
                "functions",
                "methods",
              ],
            },
          ],
          "no-empty-pattern": [
            "error",
          ],
          "no-eq-null": [
            "off",
          ],
          "no-eval": [
            "error",
          ],
          "no-ex-assign": [
            "error",
          ],
          "no-extend-native": [
            "error",
          ],
          "no-extra-bind": [
            "error",
          ],
          "no-extra-boolean-cast": [
            "error",
          ],
          "no-extra-label": [
            "error",
          ],
          "no-extra-parens": [
            "off",
            "all",
            {
              "conditionalAssign": true,
              "enforceForArrowConditionals": false,
              "ignoreJSX": "all",
              "nestedBinaryExpressions": false,
              "returnAssign": false,
            },
          ],
          "no-extra-semi": [
            "off",
          ],
          "no-fallthrough": [
            "error",
          ],
          "no-floating-decimal": [
            "off",
          ],
          "no-func-assign": [
            "error",
          ],
          "no-global-assign": [
            "error",
            {
              "exceptions": [],
            },
          ],
          "no-implicit-coercion": [
            "off",
            {
              "allow": [],
              "boolean": false,
              "number": true,
              "string": true,
            },
          ],
          "no-implicit-globals": [
            "off",
          ],
          "no-implied-eval": [
            "error",
          ],
          "no-import-assign": [
            "error",
          ],
          "no-inline-comments": [
            "off",
          ],
          "no-inner-declarations": [
            "error",
          ],
          "no-invalid-regexp": [
            "error",
          ],
          "no-invalid-this": [
            "off",
          ],
          "no-irregular-whitespace": [
            "error",
          ],
          "no-iterator": [
            "error",
          ],
          "no-label-var": [
            "error",
          ],
          "no-labels": [
            "error",
            {
              "allowLoop": false,
              "allowSwitch": false,
            },
          ],
          "no-lone-blocks": [
            "error",
          ],
          "no-lonely-if": [
            "error",
          ],
          "no-loop-func": [
            "error",
          ],
          "no-loss-of-precision": [
            "error",
          ],
          "no-magic-numbers": [
            "off",
            {
              "detectObjects": false,
              "enforceConst": true,
              "ignore": [],
              "ignoreArrayIndexes": true,
            },
          ],
          "no-misleading-character-class": [
            "error",
          ],
          "no-mixed-operators": [
            0,
            {
              "allowSamePrecedence": false,
              "groups": [
                [
                  "%",
                  "**",
                ],
                [
                  "%",
                  "+",
                ],
                [
                  "%",
                  "-",
                ],
                [
                  "%",
                  "*",
                ],
                [
                  "%",
                  "/",
                ],
                [
                  "/",
                  "*",
                ],
                [
                  "&",
                  "|",
                  "<<",
                  ">>",
                  ">>>",
                ],
                [
                  "==",
                  "!=",
                  "===",
                  "!==",
                ],
                [
                  "&&",
                  "||",
                ],
              ],
            },
          ],
          "no-mixed-requires": [
            "off",
            false,
          ],
          "no-mixed-spaces-and-tabs": [
            "off",
          ],
          "no-multi-assign": [
            "error",
          ],
          "no-multi-spaces": [
            "off",
            {
              "ignoreEOLComments": false,
            },
          ],
          "no-multi-str": [
            "error",
          ],
          "no-multiple-empty-lines": [
            "off",
            {
              "max": 1,
              "maxBOF": 0,
              "maxEOF": 0,
            },
          ],
          "no-native-reassign": [
            "off",
          ],
          "no-negated-condition": [
            "off",
          ],
          "no-negated-in-lhs": [
            "off",
          ],
          "no-nested-ternary": [
            "error",
          ],
          "no-new": [
            "warn",
          ],
          "no-new-func": [
            "error",
          ],
          "no-new-object": [
            "error",
          ],
          "no-new-require": [
            "error",
          ],
          "no-new-symbol": [
            "error",
          ],
          "no-new-wrappers": [
            "error",
          ],
          "no-nonoctal-decimal-escape": [
            "error",
          ],
          "no-obj-calls": [
            "error",
          ],
          "no-octal": [
            "error",
          ],
          "no-octal-escape": [
            "error",
          ],
          "no-param-reassign": [
            "error",
            {
              "props": false,
            },
          ],
          "no-path-concat": [
            "error",
          ],
          "no-plusplus": [
            "error",
          ],
          "no-process-env": [
            "off",
          ],
          "no-process-exit": [
            "off",
          ],
          "no-promise-executor-return": [
            "error",
          ],
          "no-proto": [
            "error",
          ],
          "no-prototype-builtins": [
            "error",
          ],
          "no-redeclare": [
            "error",
          ],
          "no-regex-spaces": [
            "error",
          ],
          "no-reserved-keys": [
            "off",
          ],
          "no-restricted-exports": [
            "error",
            {
              "restrictedNamedExports": [
                "default",
                "then",
              ],
            },
          ],
          "no-restricted-globals": [
            "error",
            {
              "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
              "name": "isFinite",
            },
            {
              "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
              "name": "isNaN",
            },
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top",
          ],
          "no-restricted-imports": [
            "off",
            {
              "paths": [],
              "patterns": [],
            },
          ],
          "no-restricted-modules": [
            "off",
          ],
          "no-restricted-properties": [
            "error",
            {
              "message": "arguments.callee is deprecated",
              "object": "arguments",
              "property": "callee",
            },
            {
              "message": "Please use Number.isFinite instead",
              "object": "global",
              "property": "isFinite",
            },
            {
              "message": "Please use Number.isFinite instead",
              "object": "self",
              "property": "isFinite",
            },
            {
              "message": "Please use Number.isFinite instead",
              "object": "window",
              "property": "isFinite",
            },
            {
              "message": "Please use Number.isNaN instead",
              "object": "global",
              "property": "isNaN",
            },
            {
              "message": "Please use Number.isNaN instead",
              "object": "self",
              "property": "isNaN",
            },
            {
              "message": "Please use Number.isNaN instead",
              "object": "window",
              "property": "isNaN",
            },
            {
              "message": "Please use Object.defineProperty instead.",
              "property": "__defineGetter__",
            },
            {
              "message": "Please use Object.defineProperty instead.",
              "property": "__defineSetter__",
            },
            {
              "message": "Use the exponentiation operator (**) instead.",
              "object": "Math",
              "property": "pow",
            },
          ],
          "no-restricted-syntax": [
            "error",
            {
              "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
              "selector": "ForInStatement",
            },
            {
              "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
              "selector": "LabeledStatement",
            },
            {
              "message": "\`with\` is disallowed in strict mode because it makes code impossible to predict and optimize.",
              "selector": "WithStatement",
            },
          ],
          "no-return-assign": [
            "error",
            "always",
          ],
          "no-return-await": [
            "error",
          ],
          "no-script-url": [
            "error",
          ],
          "no-self-assign": [
            "error",
            {
              "props": true,
            },
          ],
          "no-self-compare": [
            "error",
          ],
          "no-sequences": [
            "error",
          ],
          "no-setter-return": [
            "error",
          ],
          "no-shadow": [
            "error",
          ],
          "no-shadow-restricted-names": [
            "error",
          ],
          "no-space-before-semi": [
            "off",
          ],
          "no-spaced-func": [
            "off",
          ],
          "no-sparse-arrays": [
            "error",
          ],
          "no-sync": [
            "off",
          ],
          "no-tabs": [
            0,
          ],
          "no-template-curly-in-string": [
            "error",
          ],
          "no-ternary": [
            "off",
          ],
          "no-this-before-super": [
            "error",
          ],
          "no-throw-literal": [
            "error",
          ],
          "no-trailing-spaces": [
            "off",
            {
              "ignoreComments": false,
              "skipBlankLines": false,
            },
          ],
          "no-undef": [
            "error",
          ],
          "no-undef-init": [
            "error",
          ],
          "no-undefined": [
            "off",
          ],
          "no-underscore-dangle": [
            "error",
            {
              "allow": [
                "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__",
              ],
              "allowAfterSuper": false,
              "allowAfterThis": false,
              "allowAfterThisConstructor": false,
              "allowFunctionParams": true,
              "allowInArrayDestructuring": true,
              "allowInObjectDestructuring": true,
              "enforceInClassFields": false,
              "enforceInMethodNames": true,
            },
          ],
          "no-unexpected-multiline": [
            0,
          ],
          "no-unmodified-loop-condition": [
            "off",
          ],
          "no-unneeded-ternary": [
            "error",
            {
              "defaultAssignment": false,
            },
          ],
          "no-unreachable": [
            "error",
          ],
          "no-unreachable-loop": [
            "error",
            {
              "ignore": [],
            },
          ],
          "no-unsafe-finally": [
            "error",
          ],
          "no-unsafe-negation": [
            "error",
          ],
          "no-unsafe-optional-chaining": [
            "error",
            {
              "disallowArithmeticOperators": true,
            },
          ],
          "no-unused-expressions": [
            "error",
            {
              "allowShortCircuit": false,
              "allowTaggedTemplates": false,
              "allowTernary": false,
              "enforceForJSX": false,
            },
          ],
          "no-unused-labels": [
            "error",
          ],
          "no-unused-private-class-members": [
            "off",
          ],
          "no-unused-vars": [
            "error",
            {
              "args": "after-used",
              "ignoreRestSiblings": true,
              "vars": "all",
            },
          ],
          "no-use-before-define": [
            "error",
            {
              "classes": true,
              "functions": true,
              "variables": true,
            },
          ],
          "no-useless-backreference": [
            "error",
          ],
          "no-useless-call": [
            "off",
          ],
          "no-useless-catch": [
            "error",
          ],
          "no-useless-computed-key": [
            "error",
          ],
          "no-useless-concat": [
            "error",
          ],
          "no-useless-constructor": [
            "error",
          ],
          "no-useless-escape": [
            "error",
          ],
          "no-useless-rename": [
            "error",
            {
              "ignoreDestructuring": false,
              "ignoreExport": false,
              "ignoreImport": false,
            },
          ],
          "no-useless-return": [
            "error",
          ],
          "no-var": [
            "off",
          ],
          "no-void": [
            "error",
          ],
          "no-warning-comments": [
            "off",
            {
              "location": "start",
              "terms": [
                "todo",
                "fixme",
                "xxx",
              ],
            },
          ],
          "no-whitespace-before-property": [
            "off",
          ],
          "no-with": [
            "error",
          ],
          "no-wrap-func": [
            "off",
          ],
          "nonblock-statement-body-position": [
            "off",
            "beside",
            {
              "overrides": {},
            },
          ],
          "object-curly-newline": [
            "off",
            {
              "ExportDeclaration": {
                "consistent": true,
                "minProperties": 4,
                "multiline": true,
              },
              "ImportDeclaration": {
                "consistent": true,
                "minProperties": 4,
                "multiline": true,
              },
              "ObjectExpression": {
                "consistent": true,
                "minProperties": 4,
                "multiline": true,
              },
              "ObjectPattern": {
                "consistent": true,
                "minProperties": 4,
                "multiline": true,
              },
            },
          ],
          "object-curly-spacing": [
            "off",
            "always",
          ],
          "object-property-newline": [
            "off",
            {
              "allowAllPropertiesOnSameLine": true,
              "allowMultiplePropertiesPerLine": false,
            },
          ],
          "object-shorthand": [
            "error",
            "methods",
          ],
          "one-var": [
            "error",
            "never",
          ],
          "one-var-declaration-per-line": [
            "off",
            "always",
          ],
          "operator-assignment": [
            "error",
            "always",
          ],
          "operator-linebreak": [
            "off",
            "before",
            {
              "overrides": {
                "=": "none",
              },
            },
          ],
          "padded-blocks": [
            "off",
            {
              "blocks": "never",
              "classes": "never",
              "switches": "never",
            },
            {
              "allowSingleLineBlocks": true,
            },
          ],
          "padding-line-between-statements": [
            "off",
          ],
          "prefer-arrow-callback": [
            "error",
            {
              "allowNamedFunctions": false,
              "allowUnboundThis": true,
            },
          ],
          "prefer-const": [
            "error",
            {
              "destructuring": "any",
              "ignoreReadBeforeAssign": true,
            },
          ],
          "prefer-destructuring": [
            "error",
            {
              "AssignmentExpression": {
                "array": true,
                "object": false,
              },
              "VariableDeclarator": {
                "array": false,
                "object": true,
              },
            },
            {
              "enforceForRenamedProperties": false,
            },
          ],
          "prefer-exponentiation-operator": [
            "error",
          ],
          "prefer-named-capture-group": [
            "off",
          ],
          "prefer-numeric-literals": [
            "error",
          ],
          "prefer-object-spread": [
            "error",
          ],
          "prefer-promise-reject-errors": [
            "error",
            {
              "allowEmptyReject": true,
            },
          ],
          "prefer-reflect": [
            "off",
          ],
          "prefer-regex-literals": [
            "error",
            {
              "disallowRedundantWrapping": true,
            },
          ],
          "prefer-rest-params": [
            "error",
          ],
          "prefer-spread": [
            "error",
          ],
          "prefer-template": [
            "off",
          ],
          "quote-props": [
            "off",
            "as-needed",
            {
              "keywords": false,
              "numbers": false,
              "unnecessary": true,
            },
          ],
          "quotes": [
            0,
            "single",
            {
              "avoidEscape": true,
            },
          ],
          "radix": [
            "error",
          ],
          "react-hooks/exhaustive-deps": [
            "error",
          ],
          "react-hooks/rules-of-hooks": [
            "error",
          ],
          "react/boolean-prop-naming": [
            "off",
            {
              "message": "",
              "propTypeNames": [
                "bool",
                "mutuallyExclusiveTrueProps",
              ],
              "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
            },
          ],
          "react/button-has-type": [
            "error",
            {
              "button": true,
              "reset": false,
              "submit": true,
            },
          ],
          "react/default-props-match-prop-types": [
            "error",
            {
              "allowRequiredDefaults": false,
            },
          ],
          "react/destructuring-assignment": [
            "error",
            "always",
          ],
          "react/display-name": [
            "off",
            {
              "ignoreTranspilerName": false,
            },
          ],
          "react/forbid-component-props": [
            "off",
            {
              "forbid": [],
            },
          ],
          "react/forbid-dom-props": [
            "off",
            {
              "forbid": [],
            },
          ],
          "react/forbid-elements": [
            "off",
            {
              "forbid": [],
            },
          ],
          "react/forbid-foreign-prop-types": [
            "warn",
            {
              "allowInPropTypes": true,
            },
          ],
          "react/forbid-prop-types": [
            "error",
            {
              "checkChildContextTypes": true,
              "checkContextTypes": true,
              "forbid": [
                "any",
                "array",
                "object",
              ],
            },
          ],
          "react/function-component-definition": [
            "error",
            {
              "namedComponents": [
                "function-declaration",
                "function-expression",
              ],
              "unnamedComponents": "function-expression",
            },
          ],
          "react/jsx-boolean-value": [
            "off",
            "never",
            {
              "always": [],
            },
          ],
          "react/jsx-child-element-spacing": [
            "off",
          ],
          "react/jsx-closing-bracket-location": [
            "off",
            "line-aligned",
          ],
          "react/jsx-closing-tag-location": [
            "off",
          ],
          "react/jsx-curly-brace-presence": [
            "error",
            {
              "children": "never",
              "props": "never",
            },
          ],
          "react/jsx-curly-newline": [
            "off",
            {
              "multiline": "consistent",
              "singleline": "consistent",
            },
          ],
          "react/jsx-curly-spacing": [
            "off",
            "never",
            {
              "allowMultiline": true,
            },
          ],
          "react/jsx-equals-spacing": [
            "off",
            "never",
          ],
          "react/jsx-filename-extension": [
            "error",
            {
              "extensions": [
                ".jsx",
              ],
            },
          ],
          "react/jsx-first-prop-new-line": [
            "off",
            "multiline-multiprop",
          ],
          "react/jsx-fragments": [
            "error",
            "syntax",
          ],
          "react/jsx-handler-names": [
            "off",
            {
              "eventHandlerPrefix": "handle",
              "eventHandlerPropPrefix": "on",
            },
          ],
          "react/jsx-indent": [
            "off",
            2,
          ],
          "react/jsx-indent-props": [
            "off",
            2,
          ],
          "react/jsx-key": [
            "off",
          ],
          "react/jsx-max-depth": [
            "off",
          ],
          "react/jsx-max-props-per-line": [
            "off",
            {
              "maximum": 1,
              "when": "multiline",
            },
          ],
          "react/jsx-newline": [
            "off",
          ],
          "react/jsx-no-bind": [
            "off",
            {
              "allowArrowFunctions": true,
              "allowBind": false,
              "allowFunctions": false,
              "ignoreDOMComponents": true,
              "ignoreRefs": true,
            },
          ],
          "react/jsx-no-comment-textnodes": [
            "error",
          ],
          "react/jsx-no-constructed-context-values": [
            "error",
          ],
          "react/jsx-no-duplicate-props": [
            "error",
            {
              "ignoreCase": true,
            },
          ],
          "react/jsx-no-literals": [
            "off",
            {
              "noStrings": true,
            },
          ],
          "react/jsx-no-script-url": [
            "error",
            [
              {
                "name": "Link",
                "props": [
                  "to",
                ],
              },
            ],
          ],
          "react/jsx-no-target-blank": [
            "error",
            {
              "enforceDynamicLinks": "always",
              "forms": false,
              "links": true,
            },
          ],
          "react/jsx-no-undef": [
            "error",
          ],
          "react/jsx-no-useless-fragment": [
            "error",
          ],
          "react/jsx-one-expression-per-line": [
            "off",
            {
              "allow": "single-child",
            },
          ],
          "react/jsx-pascal-case": [
            "error",
            {
              "allowAllCaps": true,
              "ignore": [],
            },
          ],
          "react/jsx-props-no-multi-spaces": [
            "off",
          ],
          "react/jsx-props-no-spreading": [
            "error",
            {
              "custom": "enforce",
              "exceptions": [],
              "explicitSpread": "ignore",
              "html": "enforce",
            },
          ],
          "react/jsx-sort-default-props": [
            "off",
            {
              "ignoreCase": true,
            },
          ],
          "react/jsx-sort-prop-types": [
            "off",
          ],
          "react/jsx-sort-props": [
            "off",
            {
              "callbacksLast": false,
              "ignoreCase": true,
              "noSortAlphabetically": false,
              "reservedFirst": true,
              "shorthandFirst": false,
              "shorthandLast": false,
            },
          ],
          "react/jsx-space-before-closing": [
            "off",
            "always",
          ],
          "react/jsx-tag-spacing": [
            "off",
            {
              "afterOpening": "never",
              "beforeClosing": "never",
              "beforeSelfClosing": "always",
              "closingSlash": "never",
            },
          ],
          "react/jsx-uses-react": [
            "error",
          ],
          "react/jsx-uses-vars": [
            "error",
          ],
          "react/jsx-wrap-multilines": [
            "off",
            {
              "arrow": "parens-new-line",
              "assignment": "parens-new-line",
              "condition": "parens-new-line",
              "declaration": "parens-new-line",
              "logical": "parens-new-line",
              "prop": "parens-new-line",
              "return": "parens-new-line",
            },
          ],
          "react/no-access-state-in-setstate": [
            "error",
          ],
          "react/no-adjacent-inline-elements": [
            "off",
          ],
          "react/no-array-index-key": [
            "error",
          ],
          "react/no-arrow-function-lifecycle": [
            "error",
          ],
          "react/no-children-prop": [
            "error",
          ],
          "react/no-danger": [
            "warn",
          ],
          "react/no-danger-with-children": [
            "error",
          ],
          "react/no-deprecated": [
            "error",
          ],
          "react/no-did-mount-set-state": [
            "off",
          ],
          "react/no-did-update-set-state": [
            "error",
          ],
          "react/no-direct-mutation-state": [
            "off",
          ],
          "react/no-find-dom-node": [
            "error",
          ],
          "react/no-invalid-html-attribute": [
            "error",
          ],
          "react/no-is-mounted": [
            "error",
          ],
          "react/no-multi-comp": [
            "off",
          ],
          "react/no-namespace": [
            "error",
          ],
          "react/no-redundant-should-component-update": [
            "error",
          ],
          "react/no-render-return-value": [
            "error",
          ],
          "react/no-set-state": [
            "off",
          ],
          "react/no-string-refs": [
            "error",
          ],
          "react/no-this-in-sfc": [
            "error",
          ],
          "react/no-typos": [
            "error",
          ],
          "react/no-unescaped-entities": [
            "error",
          ],
          "react/no-unknown-property": [
            "error",
          ],
          "react/no-unsafe": [
            "off",
          ],
          "react/no-unstable-nested-components": [
            "error",
          ],
          "react/no-unused-class-component-methods": [
            "error",
          ],
          "react/no-unused-prop-types": [
            "error",
            {
              "customValidators": [],
              "skipShapeProps": true,
            },
          ],
          "react/no-unused-state": [
            "error",
          ],
          "react/no-will-update-set-state": [
            "error",
          ],
          "react/prefer-es6-class": [
            "off",
            "never",
          ],
          "react/prefer-exact-props": [
            "error",
          ],
          "react/prefer-read-only-props": [
            "off",
          ],
          "react/prefer-stateless-function": [
            "error",
            {
              "ignorePureComponents": true,
            },
          ],
          "react/prop-types": [
            "off",
            {
              "customValidators": [],
              "ignore": [],
              "skipUndeclared": false,
            },
          ],
          "react/react-in-jsx-scope": [
            "error",
          ],
          "react/require-default-props": [
            "error",
            {
              "forbidDefaultForRequired": true,
            },
          ],
          "react/require-optimization": [
            "off",
            {
              "allowDecorators": [],
            },
          ],
          "react/require-render-return": [
            "error",
          ],
          "react/self-closing-comp": [
            "error",
          ],
          "react/sort-comp": [
            "off",
            {
              "groups": {
                "lifecycle": [
                  "displayName",
                  "propTypes",
                  "contextTypes",
                  "childContextTypes",
                  "mixins",
                  "statics",
                  "defaultProps",
                  "constructor",
                  "getDefaultProps",
                  "getInitialState",
                  "state",
                  "getChildContext",
                  "getDerivedStateFromProps",
                  "componentWillMount",
                  "UNSAFE_componentWillMount",
                  "componentDidMount",
                  "componentWillReceiveProps",
                  "UNSAFE_componentWillReceiveProps",
                  "shouldComponentUpdate",
                  "componentWillUpdate",
                  "UNSAFE_componentWillUpdate",
                  "getSnapshotBeforeUpdate",
                  "componentDidUpdate",
                  "componentDidCatch",
                  "componentWillUnmount",
                ],
                "rendering": [
                  "/^render.+$/",
                  "render",
                ],
              },
              "order": [
                "static-variables",
                "static-methods",
                "instance-variables",
                "lifecycle",
                "/^handle.+$/",
                "/^on.+$/",
                "getters",
                "setters",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "instance-methods",
                "everything-else",
                "rendering",
              ],
            },
          ],
          "react/sort-prop-types": [
            "off",
            {
              "callbacksLast": false,
              "ignoreCase": true,
              "requiredFirst": false,
              "sortShapeProp": true,
            },
          ],
          "react/state-in-constructor": [
            "error",
            "always",
          ],
          "react/static-property-placement": [
            "error",
            "property assignment",
          ],
          "react/style-prop-object": [
            "error",
          ],
          "react/void-dom-elements-no-children": [
            "error",
          ],
          "require-atomic-updates": [
            "off",
          ],
          "require-await": [
            "off",
          ],
          "require-jsdoc": [
            "off",
          ],
          "require-unicode-regexp": [
            "off",
          ],
          "require-yield": [
            "error",
          ],
          "rest-spread-spacing": [
            "off",
            "never",
          ],
          "semi": [
            "off",
            "always",
          ],
          "semi-spacing": [
            "off",
            {
              "after": true,
              "before": false,
            },
          ],
          "semi-style": [
            "off",
            "last",
          ],
          "sort-imports": [
            "off",
            {
              "ignoreCase": false,
              "ignoreDeclarationSort": false,
              "ignoreMemberSort": false,
              "memberSyntaxSortOrder": [
                "none",
                "all",
                "multiple",
                "single",
              ],
            },
          ],
          "sort-keys": [
            "off",
            "asc",
            {
              "caseSensitive": false,
              "natural": true,
            },
          ],
          "sort-vars": [
            "off",
          ],
          "space-after-function-name": [
            "off",
          ],
          "space-after-keywords": [
            "off",
          ],
          "space-before-blocks": [
            "off",
          ],
          "space-before-function-paren": [
            "off",
            {
              "anonymous": "always",
              "asyncArrow": "always",
              "named": "never",
            },
          ],
          "space-before-function-parentheses": [
            "off",
          ],
          "space-before-keywords": [
            "off",
          ],
          "space-in-brackets": [
            "off",
          ],
          "space-in-parens": [
            "off",
            "never",
          ],
          "space-infix-ops": [
            "off",
          ],
          "space-return-throw-case": [
            "off",
          ],
          "space-unary-ops": [
            "off",
            {
              "nonwords": false,
              "overrides": {},
              "words": true,
            },
          ],
          "space-unary-word-ops": [
            "off",
          ],
          "spaced-comment": [
            "error",
            "always",
            {
              "block": {
                "balanced": true,
                "exceptions": [
                  "-",
                  "+",
                ],
                "markers": [
                  "=",
                  "!",
                  ":",
                  "::",
                ],
              },
              "line": {
                "exceptions": [
                  "-",
                  "+",
                ],
                "markers": [
                  "=",
                  "!",
                  "/",
                ],
              },
            },
          ],
          "standard/array-bracket-even-spacing": [
            "off",
          ],
          "standard/computed-property-even-spacing": [
            "off",
          ],
          "standard/object-curly-even-spacing": [
            "off",
          ],
          "strict": [
            "error",
            "never",
          ],
          "switch-colon-spacing": [
            "off",
            {
              "after": true,
              "before": false,
            },
          ],
          "symbol-description": [
            "error",
          ],
          "template-curly-spacing": [
            "off",
          ],
          "template-tag-spacing": [
            "off",
            "never",
          ],
          "unicode-bom": [
            "error",
            "never",
          ],
          "unicorn/empty-brace-spaces": [
            "off",
          ],
          "unicorn/no-nested-ternary": [
            "off",
          ],
          "unicorn/number-literal-case": [
            "off",
          ],
          "unicorn/template-indent": [
            0,
          ],
          "use-isnan": [
            "error",
          ],
          "valid-jsdoc": [
            "off",
          ],
          "valid-typeof": [
            "error",
            {
              "requireStringLiterals": true,
            },
          ],
          "vars-on-top": [
            "error",
          ],
          "vue/array-bracket-newline": [
            "off",
          ],
          "vue/array-bracket-spacing": [
            "off",
          ],
          "vue/array-element-newline": [
            "off",
          ],
          "vue/arrow-spacing": [
            "off",
          ],
          "vue/block-spacing": [
            "off",
          ],
          "vue/block-tag-newline": [
            "off",
          ],
          "vue/brace-style": [
            "off",
          ],
          "vue/comma-dangle": [
            "off",
          ],
          "vue/comma-spacing": [
            "off",
          ],
          "vue/comma-style": [
            "off",
          ],
          "vue/dot-location": [
            "off",
          ],
          "vue/func-call-spacing": [
            "off",
          ],
          "vue/html-closing-bracket-newline": [
            "off",
          ],
          "vue/html-closing-bracket-spacing": [
            "off",
          ],
          "vue/html-end-tags": [
            "off",
          ],
          "vue/html-indent": [
            "off",
          ],
          "vue/html-quotes": [
            "off",
          ],
          "vue/html-self-closing": [
            0,
          ],
          "vue/key-spacing": [
            "off",
          ],
          "vue/keyword-spacing": [
            "off",
          ],
          "vue/max-attributes-per-line": [
            "off",
          ],
          "vue/max-len": [
            0,
          ],
          "vue/multiline-html-element-content-newline": [
            "off",
          ],
          "vue/multiline-ternary": [
            "off",
          ],
          "vue/mustache-interpolation-spacing": [
            "off",
          ],
          "vue/no-extra-parens": [
            "off",
          ],
          "vue/no-multi-spaces": [
            "off",
          ],
          "vue/no-spaces-around-equal-signs-in-attribute": [
            "off",
          ],
          "vue/object-curly-newline": [
            "off",
          ],
          "vue/object-curly-spacing": [
            "off",
          ],
          "vue/object-property-newline": [
            "off",
          ],
          "vue/operator-linebreak": [
            "off",
          ],
          "vue/quote-props": [
            "off",
          ],
          "vue/script-indent": [
            "off",
          ],
          "vue/singleline-html-element-content-newline": [
            "off",
          ],
          "vue/space-in-parens": [
            "off",
          ],
          "vue/space-infix-ops": [
            "off",
          ],
          "vue/space-unary-ops": [
            "off",
          ],
          "vue/template-curly-spacing": [
            "off",
          ],
          "wrap-iife": [
            "off",
            "outside",
            {
              "functionPrototypeMethods": false,
            },
          ],
          "wrap-regex": [
            "off",
          ],
          "yield-star-spacing": [
            "off",
            "after",
          ],
          "yoda": [
            "error",
          ],
        },
        "settings": {
          "import/core-modules": [],
          "import/extensions": [
            ".js",
            ".mjs",
            ".jsx",
          ],
          "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$",
          ],
          "import/resolver": {
            "node": {
              "extensions": [
                ".js",
                ".jsx",
                ".json",
              ],
            },
          },
          "propWrapperFunctions": [
            "forbidExtraProps",
            "exact",
            "Object.freeze",
          ],
          "react": {
            "pragma": "React",
            "version": "detect",
          },
        },
      }
    `);
  });
});
