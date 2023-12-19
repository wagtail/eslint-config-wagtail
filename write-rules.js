const fs = require('node:fs');
const { ESLint } = require('eslint');

const COMMENT = '<!-- RULES:START -->';
const README = 'README.md';

const getUrl = (rule) => {
  const parts = rule.split('/');

  if (parts.length === 1) {
    return `https://eslint.org/docs/latest/rules/${rule}`;
  }

  const [group, ruleName] = parts;

  const nonCoreRules = {
    'import': () =>
      `https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/${ruleName}.md`,
    'jsx-a11y': () =>
      `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/${ruleName}.md`,
    'react': () =>
      `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/${ruleName}.md`,
    'react-hooks': () => 'https://legacy.reactjs.org/docs/hooks-rules.html',
  };

  return (nonCoreRules[group] || (() => null))();
};

/**
 * Attempts to parse the config value to return a pretty formatted version.
 * If the value becomes too long it will instead direct the viewer to an external link.
 *
 * @param {array} config
 * @param {object?} options
 * @returns {string}
 */
const getPrettyConfig = (
  [severity, ...config],
  { defaultValue = '', maxLength = 75 } = {},
) => {
  if (!Array.isArray(config)) return [severity, defaultValue];

  const configItems = config.filter((item) => typeof item !== 'boolean');

  const prettyConfig = configItems.map(JSON.stringify).join(', ');

  if (prettyConfig.length === 0) return [severity, defaultValue];

  if (prettyConfig.length > maxLength) {
    return [severity, '[see Config][config]'];
  }

  return [severity, `\`${prettyConfig}\``];
};

/**
 * Prepares a reasonably formatted markdown table based on the spec
 * https://github.github.com/gfm/#tables-extension-
 *
 * Ensuring that column widths remain readable while viewing the markdown raw.
 *
 * If a rule URL can be resolved, the rule will be added with a link to it, otherwise
 * the rule will be just shown as is.
 *
 * Rule configuration is not yet included in the table.
 *
 * @param {Object} rules
 * @returns {String}
 */
const createMarkdownTable = (rules) => {
  const enabledRules = Object.entries(rules)
    .filter(([, [value]]) => value && value !== 'off')
    .sort(([ruleA], [ruleB]) => ruleA.localeCompare(ruleB));

  const maxRuleLength =
    enabledRules.reduce(
      (maxLength, [rule]) =>
        rule.length > maxLength ? rule.length : maxLength,
      0,
    ) + 7; // adding padding + room for links

  const prettyConfigs = enabledRules.map(([, config]) =>
    getPrettyConfig(config),
  );

  const maxConfigLength = prettyConfigs.reduce(
    (maxLength, [, prettyConfig]) =>
      prettyConfig.length > maxLength ? prettyConfig.length : maxLength,
    0,
  );

  const tableRows = enabledRules.map(([rule], index) => {
    const ruleBackticks = `\`${rule}\``;

    const url = getUrl(rule);

    const ruleFormatted = url ? `[${ruleBackticks}][${index}]` : ruleBackticks;

    const [severity, prettyConfig] = prettyConfigs[index];

    const columns = [
      ruleFormatted.padEnd(maxRuleLength + 1, ' '),
      ('`' + severity + '`').padEnd(8),
      prettyConfig.padEnd(maxConfigLength, ' '),
    ];

    const footnote = url && `[${index}]: ${url}`;

    return [`| ${columns.join(' | ')} |`, footnote];
  });

  const tableHeader = [
    `| ${'Rule'.padEnd(maxRuleLength, ' ')}  | Severity | ${'Config'.padEnd(
      maxConfigLength,
      ' ',
    )} |`,
    `| ${''.padEnd(maxRuleLength, '-')}- | -------- | ${''.padEnd(
      maxConfigLength,
      '-',
    )} |`,
  ].join('\n');

  return `

${tableHeader}
${tableRows.map(([row]) => row).join('\n')}

[config]: https://github.com/wagtail/eslint-config-wagtail/blob/main/index.js
${tableRows
  .map(([, link]) => link)
  .filter(Boolean)
  .join('\n')}
`;
};

/**
 * Reads the rules configuration from stylelint and writes an updated table
 * to the README.md file.
 *
 * If run with `--check`, no content will be written and instead an exit
 * code will fire to flag a CI error.
 */
const writeRules = async () => {
  const eslint = new ESLint();
  const { rules } = await eslint.calculateConfigForFile('.index.js');

  const markdownTable = createMarkdownTable(rules);

  fs.readFile(README, (fileReadError, buf) => {
    if (fileReadError) throw fileReadError;

    const content = buf.toString();

    const startOfTable = content.indexOf(COMMENT) + COMMENT.length;

    const newContent = content.substring(0, startOfTable).concat(markdownTable);

    // if in check mode, only compare contents and do not write to the file
    const args = process.argv.slice(2) || [];
    const isCheck = args.includes('--check');

    if (isCheck) {
      if (newContent !== content) {
        process.stderr.write(
          'Rules have not been written, run `npm run write-rules`\n',
        );
        process.exit(1);
      }
      process.exit(0);
    } else {
      // if not checking - ok to write to the file
      fs.writeFile(README, newContent, (fileWriteError) => {
        if (fileWriteError) throw fileWriteError;
      });
    }
  });
};

writeRules();
