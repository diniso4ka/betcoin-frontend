import { endpoints } from '../../endpoints';
import { api } from '../../instance';
import { ILoginRequest } from './types';

export async function fetchLogin(data: ILoginRequest) {
    return await api.post(endpoints.auth.login, data).then(({ data }) => data);
}
