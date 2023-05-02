import { Suspense } from 'react';

import { StoryFn } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: StoryFn) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
