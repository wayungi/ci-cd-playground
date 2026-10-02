import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['dist/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      eqeqeq: ['error', 'always'],
    },
  },
  {
    files: ['**/*.js'],
    ignores: ['**/*.test.js', '**/*.config.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.test.js', '**/*.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]