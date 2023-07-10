import { endpoints } from '../../endpoints';
import { api } from '../../instance';
import {
    ILoginRequest,
    ILoginResponse,
    IRegisterRequest,
    RegisterResponse,
} from './types';

export async function fetchLogin(data: ILoginRequest): Promise<ILoginResponse> {
    return await api.post(endpoints.auth.login, data).then(({ data }) => data);
}

export async function fetchRegister(
    data: IRegisterRequest,
): Promise<RegisterResponse> {
    return await api.post(endpoints.auth.login, data).then(({ data }) => data);
}
