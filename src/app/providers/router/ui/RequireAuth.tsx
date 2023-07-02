import { Navigate, useLocation } from 'react-router-dom';

import { MAIN_ROUTE } from '@/shared/const/router';

interface IRequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuthProps) => {
    const location = useLocation();
    const auth = true;

    if (!auth) {
        return <Navigate to={MAIN_ROUTE} state={{ from: location }} replace />;
    }

    return children;
};
