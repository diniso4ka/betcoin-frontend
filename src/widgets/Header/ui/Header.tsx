import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Logo } from '@/shared/ui/Logo';

import { Navbar } from '../../Navbar';

import s from './Header.module.scss';

const HeaderComponent = () => {
    const { t } = useTranslation();

    return (
        <header className={s.header}>
            <Logo />
            <Navbar />
            <Input
                className={s.searchInput}
                placeholder={t('Search for NFT') as string}
            />
            <div className={s.buttons}>
                <Button>{t('Log in')}</Button>
                <Button>{t('Sign up')}</Button>
            </div>
        </header>
    );
};

export const Header = memo(HeaderComponent);
