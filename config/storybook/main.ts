import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPath } from '../build/types/config';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config: webpack.Configuration) => {
        const paths: BuildPath = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        config.resolve!.modules!.push(paths.src);
        config.resolve!.extensions!.push('.ts', '.tsx');
        config.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        config.module!.rules = config.module!.rules!.map(
            (rule: webpack.RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            },
        );

        config.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module!.rules.push(buildCssLoader(true));

        config.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};
export default config;
