import { Navigate, useLocation } from 'react-router-dom';

import { getRouteMain } from '@/shared/const/router';

interface IRequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuthProps) => {
    const location = useLocation();
    const auth = true;

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
};
