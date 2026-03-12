import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    ignores: [
      // system
      "**/.git/**",
      "**/.github/**",
      "**/.vscode/**",
      "**/.idea/**",

      // build
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.cache/**",
      "**/public/**",

      // config
      "**/*.config.js",
      "**/*.config.ts",
      "**/.eslintrc.js",
      "**/.prettierrc",
      "**/vite.config.ts",
      "**/vitest.config.ts",
      "**/jest.config.js",

      // temp
      "**/*.log",
      "**/tmp/**",
      "**/temp/**",
      "**/*.min.js",
      "**/*.bundle.js",
      "**/*.d.ts",

      // certain
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",

    ],
  },
])
