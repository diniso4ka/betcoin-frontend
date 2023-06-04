import type { Preview } from '@storybook/react';

import '../../src/shared/config/i18n/i18n';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';

import '../../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'main',
            values: [
                {
                    name: 'main',
                    value: '#171721',
                },
                {
                    name: 'test',
                    value: '#fff',
                },
            ],
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // layout: 'fullscreen',
    },
    decorators: [RouterDecorator, SuspenseDecorator],
};

export default preview;
