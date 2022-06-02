module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-empty-function': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1,
      },
      'multiline': {
        'max': 1,
      },
    }],
    'space-before-function-paren': ['error', 'never'],
    'comma-spacing': [
      'error', {
        'before': false,
        'after': true,
      }],
    'semi': ['error', 'never'],
    'quotes': [2, 'single'],
    'keyword-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-irregular-whitespace': 'off',
    'no-console': 'off',
    'no-empty-pattern': 'off',
    'no-unreachable': 'off',
    'require-await': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'no-redeclare':'off',
  },
}
