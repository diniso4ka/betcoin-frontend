import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    argTypes: {},
    args: {
        trigger: 'Trigger',
        items: [
            { content: 'Item 1' },
            { content: 'Item 2' },
            { content: 'Item 3' },
            { content: 'Item 4' },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const AllOptions: Story = {};
