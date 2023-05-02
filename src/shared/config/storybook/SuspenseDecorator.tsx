import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
