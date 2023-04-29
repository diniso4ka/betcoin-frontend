import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Blue_M: Story = {
    args: {
        theme: 'blue',
        size: 'size_m',
        children: 'Button',
    },
};

export const Primary_L: Story = {
    args: {
        theme: 'primary',
        size: 'size_l',
        children: 'Button',
    },
};
