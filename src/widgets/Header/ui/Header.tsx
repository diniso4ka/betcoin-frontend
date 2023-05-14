import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { Navbar } from '../../Navbar';

import LogoIcon from '@/shared/assets/icons/logo.svg';

import s from './Header.module.scss';

const HeaderComponent = () => {
    const { t } = useTranslation();

    return (
        <header className={s.header}>
            <LogoIcon />
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
