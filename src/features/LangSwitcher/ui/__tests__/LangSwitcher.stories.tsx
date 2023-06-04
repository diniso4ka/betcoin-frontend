import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from '../LangSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof LangSwitcher> = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const AllOptions: Story = {};
