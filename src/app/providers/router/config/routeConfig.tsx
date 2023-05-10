import { MainPage } from '@/pages/MainPage';
import { getRouteMain } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routerConfig: AppRoutesProps[] = [
    {
        path: getRouteMain(),
        element: <MainPage />,
    },
];
