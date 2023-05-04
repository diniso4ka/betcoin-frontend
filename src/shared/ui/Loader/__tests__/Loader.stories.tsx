import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../Loader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Main: Story = {};
