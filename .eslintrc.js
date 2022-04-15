module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 设置编译宏 defineProps未定义警告
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 关闭组建名称必须是多个单词
    'vue/multi-word-component-names': 0
  },
  overrides: [{
    // 关闭api文件夹接口返回类型不能有_问题。如：login_user命名
    files: ['src/api/**/*.ts'],
    rules: { camelcase: 'off' }
  }]
}
