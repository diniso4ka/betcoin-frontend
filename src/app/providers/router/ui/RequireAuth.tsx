import { Navigate, useLocation } from 'react-router-dom';

import { getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const location = useLocation();
    const auth = true;

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
};
