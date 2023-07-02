import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { useLoginByUsernameFormProps } from '../../model/hooks/useLoginByUsernameFormProps';

import s from './LoginByUsernameForm.module.scss';

const LoginByUsernameFormComponent = () => {
    const { t } = useTranslation();
    const { handleSetValue, loginValue, passwordValue } =
        useLoginByUsernameFormProps();

    return (
        <form className={s.container}>
            <Input
                onChange={handleSetValue}
                name={'login'}
                className={s.input}
                placeholder={t('login_placeholder') as string}
                value={loginValue}
            />
            <Input
                onChange={handleSetValue}
                name={'password'}
                className={s.input}
                placeholder={t('password_placeholder') as string}
                type='password'
                value={passwordValue}
            />
            <Button width={'WIDTH_RESPONSIVE'} size={'SIZE_L'}>
                {t('submit')}
            </Button>
        </form>
    );
};

export const LoginByUsernameForm = memo(LoginByUsernameFormComponent);
