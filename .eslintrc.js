module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 解决编译宏 defineProps未定义警告
    'vue/setup-compiler-macros': true
  },
  extends: [
    // 设置eslint为vue3最强语法检查
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
    // 关闭组建名称必须是多个单词警告
    'vue/multi-word-component-names': 0
  },
  overrides: [{
    // 重写api文件夹接口返回类型不能有_问题。如：login_user命名
    files: ['src/api/**/*.ts'],
    rules: { camelcase: 'off' }
  }]
}
