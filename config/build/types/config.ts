export type BuildMode = 'production' | 'development';

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
    fonts: string;
    buildFonts: string;
}

export interface IBuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}