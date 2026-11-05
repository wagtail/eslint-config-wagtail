import camelcase from './rules/camelcase.js';

/**
 * Wagtail's own rules, loaded by oxlint as a JS plugin. Holds rules that oxlint
 * does not implement and that are not available from any ESLint plugin.
 */
export default {
  meta: {
    name: 'wagtail',
  },
  rules: {
    camelcase,
  },
};
