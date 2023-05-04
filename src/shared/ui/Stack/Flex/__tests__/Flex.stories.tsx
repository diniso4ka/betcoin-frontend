import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {},
    args: {
        children: (
            <>
                <p>first</p>
                <p>second</p>
                <p>third</p>
                <p>fourth</p>
            </>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const AllOptions: Story = {};
