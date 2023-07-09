import { ILoginResponse } from '@/shared/types/api/auth/login';

import { endpoints } from '../../endpoints';
import { api } from '../../instance';
import { ILoginRequest } from './types';

export async function fetchLogin(data: ILoginRequest): Promise<ILoginResponse> {
    return await api.post(endpoints.auth.login, data).then(({ data }) => data);
}
