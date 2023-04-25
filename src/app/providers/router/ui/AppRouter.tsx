import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/shared/config/routeConfig/routeConfig';

export const AppRouter = memo(() => {
    
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                {routerConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});