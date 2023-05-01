import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
    args: {
        theme: 'THEME_GREEN',
        size: 'SIZE_L',
        width: 'WIDTH_M',
        children: 'Test',
    },
};
