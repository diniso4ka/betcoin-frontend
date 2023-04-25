import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
};

export const routerConfig: RouteProps[] = [
    {
        path: RoutesPath.main,
        element: <MainPage />,
    },
];
