import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
    args: {
        children: 'Button',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const AllOptions: Story = {};
