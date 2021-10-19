module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'chore', // 构建过程或辅助工具的变动
        'docs', // 文档（documentation）
        'style', // 代码格式（不影响代码运行的变动）
        'test', // 增加测试
        'UI', // 样式修改（不影响代码功能）
        'i18n', // 修补bug
      ],
    ],
    'type-case': [2, 'always', ['lower-case', 'upper-case']],
  }
};
