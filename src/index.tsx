import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/shared/config/i18n/i18n';
import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
