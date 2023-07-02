import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { useAuthByLoginFormProps } from '../../model/hooks/useAuthByLoginFormProps';

import s from './AuthByLoginForm.module.scss';

const AuthByLoginFormComponent = () => {
    const { t } = useTranslation();
    const { handleSetValue, handleSubmit, loginValue, passwordValue, loading } =
        useAuthByLoginFormProps();

    return (
        <form onSubmit={handleSubmit} className={s.container}>
            <Input
                onChange={handleSetValue}
                name={'login'}
                className={s.input}
                placeholder={t('login_placeholder') as string}
                value={loginValue}
                disabled={loading}
            />
            <Input
                onChange={handleSetValue}
                name={'password'}
                className={s.input}
                placeholder={t('password_placeholder') as string}
                type='password'
                value={passwordValue}
                disabled={loading}
            />
            <Button
                onClick={handleSubmit}
                type='submit'
                width={'WIDTH_RESPONSIVE'}
                size={'SIZE_L'}
                disabled={loading}
            >
                {t('submit')}
            </Button>
        </form>
    );
};

export const AuthByLoginForm = memo(AuthByLoginFormComponent);
