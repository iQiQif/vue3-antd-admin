module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/no-unused-components': 1,
    'vue/no-unused-vars': 1,
    'vue/no-v-for-template-key-on-child': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    eqeqeq: 2,
    semi: 0,
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    'max-params': [0, 3],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/member-delimiter-style': 0
  }
}
