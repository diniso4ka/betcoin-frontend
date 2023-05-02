// import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderProps) => {
    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    // isTSX && !isDev && [ TODO
                    //     babelRemovePropsPlugin,
                    //     {
                    //         props: ['data-testid'],
                    //     },
                    // ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
};