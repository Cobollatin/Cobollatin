import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import * as mdx from 'eslint-plugin-mdx';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default ts.config(
  includeIgnoreFile(gitignorePath),
  ...ts.configs.recommended,
  {
    ignores: ['package-lock.json', 'dist/', '.astro/', 'node_modules/', '!.storybook'],
  },
  ...eslintPluginAstro.configs.recommended,
  perfectionist.configs['recommended-natural'],
  {
    ...mdx.flat,
    files: ['src/**/*.mdx', 'src/**/*.md'],
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    files: ['src/**/*.mdx', 'src/**/*.md'],
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'array-bracket-spacing': ['error', 'never'],
      'arrow-spacing': ['error', { after: true, before: true }],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'always-multiline'],
      curly: 'error',
      eqeqeq: ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'keyword-spacing': ['error', { after: true, before: true }],
      'max-len': ['error', { code: 100, tabWidth: 2 }],
      'no-trailing-spaces': 'error',
      'no-var': 'error',
      'object-curly-spacing': ['error', 'always'],
      'prefer-const': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'space-infix-ops': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: ts.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'jsx-a11y': jsxA11y,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      // Accessibility Rules (Google emphasizes accessibility)
      'jsx-a11y/alt-text': 'error',

      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',

      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',
      'no-undef': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      // Hooks Rules
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          children: 'never',
          props: 'never',
        },
      ],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-fragments': ['error', 'syntax'], // Prefer <> over React.Fragment
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],

      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
          when: 'multiline',
        },
      ],
      'react/jsx-no-undef': 'error',

      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-tag-spacing': [
        'error',
        {
          afterOpening: 'never',
          beforeClosing: 'never',
          beforeSelfClosing: 'always',
          closingSlash: 'never',
        },
      ],
      // React Rules (Google-inspired)
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform
      'react/jsx-uses-vars': 'error',
      'react/jsx-wrap-multilines': [
        'error',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unused-prop-types': 'error',
      // Component and Props Rules
      'react/prop-types': 'off', // Using TypeScript instead
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/require-default-props': 'off', // Using TypeScript instead
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/void-dom-elements-no-children': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      // Prefer interface for component props (Google style)
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // TypeScript + React specific rules
      '@typescript-eslint/explicit-function-return-type': 'off', // Too verbose for React components

      '@typescript-eslint/explicit-module-boundary-types': 'off', // Too verbose for React components

      // Enforce proper typing for event handlers
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false, // Allow async event handlers
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
  ...compat.extends('prettier'),
);
