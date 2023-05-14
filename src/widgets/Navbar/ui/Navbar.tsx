import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { getRouteMain } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';

import { INavbarItem } from './types';

import s from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

const NavbarComponent = ({ className }: INavbarProps) => {
    const { t } = useTranslation();

    const navbarList: INavbarItem[] = [
        { title: t('Main'), to: getRouteMain() },
        { title: t('Blog'), to: getRouteMain() },
        { title: t('Live bets'), to: getRouteMain() },
    ];

    return (
        <nav className={cn(s.navbar, className)}>
            <ul>
                {navbarList.map((item) => (
                    <li key={item.title}>
                        <AppLink to={item.to}>{item.title}</AppLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const Navbar = memo(NavbarComponent);
