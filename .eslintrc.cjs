/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    // parser: '@typescript-eslint/parser'
  },
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    'max-len': ['error', { code: 180, ignoreComments: true, ignoreUrls: true }]
  }
}
