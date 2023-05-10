import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from '../AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        children: 'AppLink',
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AllOptions: Story = {};
