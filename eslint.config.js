import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    {
        ignores: ['.nuxt/**', 'node_modules/**', 'dist/**', '.output/**'],
    },

    js.configs.recommended,

    ...vue.configs['flat/recommended'],

    {
        files: ['**/*.ts', '**/*.vue'],
        languageOptions: {
            // 👉 Parser principal : Vue
            parser: vueParser,
            parserOptions: {
                // 👉 Parser interne pour <script lang="ts">
                parser: tsParser,
                sourceType: 'module',
            },
            // 👉 Globals Nuxt
            globals: {
                defineNuxtConfig: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'unused-imports/no-unused-imports': 'warn',
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
            'vue/multi-word-component-names': 'off',
        },
    },

    prettier,
];
