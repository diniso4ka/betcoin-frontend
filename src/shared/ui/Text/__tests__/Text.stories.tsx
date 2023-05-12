import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
    args: {
        value: 'Text',
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const AllOptions: Story = {};
