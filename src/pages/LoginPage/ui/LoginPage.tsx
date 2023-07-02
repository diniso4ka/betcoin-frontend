import { LoginByUsernameForm } from '@/features/LoginByUsername';

import s from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={s.container}>
            <LoginByUsernameForm />
        </div>
    );
};

export default LoginPage;
