// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    globals: {
        NodeJS: true,
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'prettier',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/extensions': ['.ts, .tsx'],
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'i18next',
        'react-hooks',
        'import',
        'simple-import-sort',
        'opmind-plugin',
    ],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/display-name': 'off',
        'import/no-named-as-default': 'off',
        'no-debugger': 'warn',
        'no-console': 'error',
        'react/react-in-jsx-scope': 'off',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    [
                        //Absolute imports (path from 'path')
                        '^\\w+$',
                        // Packages. `react` related packages come first.
                        '^react',
                        '^@?\\w',
                        // Internal packages.
                        '(app|pages|widgets|entities|shared)(/.*|$)',
                        // Side effect imports.
                        '^\\u0000',
                        // Parent imports. Put `..` last.
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.(?!/?$)',
                        // Assets
                        '^shared\\/assets.+',
                        // Styles.
                        '^.+\\.s?css$',
                    ],
                ],
            },
        ],
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/no-unresolved': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'theme',
                    'size',
                    'data-testid',
                    'dataTestid',
                    'target',
                    'to',
                    'name',
                    'alt',
                    'as',
                ],
            },
        ],
        'opmind-plugin/path-checker': ['error', { alias: '@' }],
        'opmind-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'opmind-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
    },
};
