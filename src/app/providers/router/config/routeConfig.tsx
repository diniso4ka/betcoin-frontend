import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';

import { LOGIN_ROUTE, MAIN_ROUTE } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routerConfig: AppRoutesProps[] = [
    {
        path: MAIN_ROUTE,
        element: <MainPage />,
    },
    {
        path: LOGIN_ROUTE,
        element: <LoginPage />,
    },
];
