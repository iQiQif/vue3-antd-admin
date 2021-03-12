module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "vue/no-unused-components": 1,
    'vue/no-unused-vars': 1,
    'vue/no-v-for-template-key-on-child': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/camelcase': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
