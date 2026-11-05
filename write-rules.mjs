import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import wagtailConfig from './index.js';

const COMMENT = '<!-- RULES:START -->';
const README = 'README.md';

/**
 * Documentation URLs of oxlint's native rules, keyed by the rule name as it is
 * written in the config, e.g. `no-console` or `jsx-a11y/alt-text`.
 */
const nativeRuleUrls = new Map(
  JSON.parse(
    execFileSync('npx', ['oxlint', '--rules', '--format=json'], {
      encoding: 'utf8',
    }),
  ).map(({ scope, value, docs_url: url }) => [
    scope === 'eslint' ? value : `${scope.replace('_', '-')}/${value}`,
    url,
  ]),
);

const getUrl = (rule) => {
  if (nativeRuleUrls.has(rule)) return nativeRuleUrls.get(rule);

  const [group, ruleName] = rule.split('/');

  const jsPluginRules = {
    '@stylistic': () => `https://eslint.style/rules/${ruleName}`,
    'import-x-js': () =>
      `https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/${ruleName}.md`,
    'react-js': () =>
      `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/${ruleName}.md`,
    'wagtail': () => `https://eslint.org/docs/latest/rules/${ruleName}`,
  };

  return (jsPluginRules[group] || (() => null))();
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
  ruleConfig,
  { defaultValue = '', maxLength = 75 } = {},
) => {
  const [severity, ...config] = [ruleConfig].flat();

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
    .filter(([, value]) => [value].flat()[0] !== 'off')
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

[config]: https://github.com/wagtail/oxlint-config-wagtail/blob/main/index.js
${tableRows
  .map(([, link]) => link)
  .filter(Boolean)
  .join('\n')}
`;
};

/**
 * Reads the rules configuration from index.js and writes an updated table
 * to the README.md file.
 *
 * If run with `--check`, no content will be written and instead an exit
 * code will fire to flag a CI error.
 */
const writeRules = () => {
  const markdownTable = createMarkdownTable(wagtailConfig.rules);

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
