import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    argTypes: {},
    args: {
        placeholder: 'Search for NFT',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const AllOptions: Story = {};
