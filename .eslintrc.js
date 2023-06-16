module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    semi: 'off',
    'no-multiple-empty-lines': 'off',
    'vue/multi-word-component-names': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'warn'
  }
}
