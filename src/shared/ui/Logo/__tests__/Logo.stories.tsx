import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../Logo';

const meta: Meta<typeof Logo> = {
    title: 'shared/Logo',
    component: Logo,
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const AllOptions: Story = {};
