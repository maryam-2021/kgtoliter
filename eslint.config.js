import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

const browserGlobals = {
  alert: 'readonly',
  Blob: 'readonly',
  caches: 'readonly',
  CustomEvent: 'readonly',
  document: 'readonly',
  Event: 'readonly',
  fetch: 'readonly',
  FileReader: 'readonly',
  HTMLButtonElement: 'readonly',
  HTMLElement: 'readonly',
  HTMLInputElement: 'readonly',
  HTMLParagraphElement: 'readonly',
  HTMLSelectElement: 'readonly',
  HTMLSpanElement: 'readonly',
  HTMLTableCellElement: 'readonly',
  HTMLTableRowElement: 'readonly',
  HTMLTableSectionElement: 'readonly',
  IntersectionObserver: 'readonly',
  KeyboardEvent: 'readonly',
  navigator: 'readonly',
  NodeListOf: 'readonly',
  Response: 'readonly',
  self: 'readonly',
  setTimeout: 'readonly',
  URL: 'readonly',
  window: 'readonly',
};

const nodeGlobals = {
  console: 'readonly',
  process: 'readonly',
};

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**', 'playwright-report/**', 'test-results/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.{js,mjs,ts,astro}'],
    languageOptions: {
      globals: browserGlobals,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['server.js', 'tests/**/*.ts', 'playwright.config.ts'],
    languageOptions: {
      globals: nodeGlobals,
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
