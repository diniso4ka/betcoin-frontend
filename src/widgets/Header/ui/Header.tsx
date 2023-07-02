import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { LangSwitcher } from '@/features/LangSwitcher';
import { Navbar } from '@/widgets/Navbar';

import { pagesWithoutHeader } from '@/shared/const/pagesWithoutHeader';
import { LOGIN_ROUTE } from '@/shared/const/router';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Logo } from '@/shared/ui/Logo';

import { shouldRenderHeader } from '../model/helpers/shouldRenderHeader';

import s from './Header.module.scss';

const HeaderComponent = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    if (shouldRenderHeader(pagesWithoutHeader, pathname)) {
        return null;
    }

    return (
        <header className={s.header}>
            <Logo />
            <Navbar />
            <Input
                className={s.searchInput}
                placeholder={t('Search for NFT') as string}
            />
            <div className={s.right}>
                <div className={s.buttons}>
                    <Button url={LOGIN_ROUTE}>{t('Log in')}</Button>
                    <Button>{t('Sign up')}</Button>
                </div>
                <LangSwitcher />
            </div>
        </header>
    );
};

export const Header = memo(HeaderComponent);
