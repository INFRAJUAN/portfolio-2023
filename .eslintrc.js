/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  ignorePatterns: [
    'node_modules/', 
    'dist/'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'indent': 'off',
    'no-console': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
