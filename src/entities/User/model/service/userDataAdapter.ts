import { ILoginResponse } from '@/shared/types/api/auth/login';

import { IUserData } from '../..';

export function userDataAdapter(data: ILoginResponse): IUserData {
    const { user } = data;
    const { email, username, id, balance, role, isActivated } = user;

    return {
        email,
        username,
        uid: id,
        balance,
        role,
        isActivated,
    };
}
