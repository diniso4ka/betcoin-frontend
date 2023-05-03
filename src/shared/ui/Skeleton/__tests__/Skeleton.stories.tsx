import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '../Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Rectangle: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        borderRadius: '50%',
        width: 200,
        height: 200,
    },
};
