import { AuthByLoginForm } from '@/features/AuthByLogin';

import s from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={s.container}>
            <AuthByLoginForm />
        </div>
    );
};

export default LoginPage;
