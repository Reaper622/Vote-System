module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不加分号
    'semi': ['error', 'never'],
    // 驼峰命名
    'camelcase': 1,
    // 缩进为 tab
    'indent': ['error', 'tab'] ,
    // 引号使用单引号
    'quotes': ['error', 'single'],
    'no-tabs': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
