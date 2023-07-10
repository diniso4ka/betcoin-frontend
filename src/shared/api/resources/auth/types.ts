import { UserRoles } from '@/shared/types/user';

export interface ILoginRequest {
    login: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        email: string;
        username: string;
        role: UserRoles;
        balance: number;
        id: string;
        isActivated: boolean;
    };
}

export interface IRegisterRequest {
    email: string;
    login: string;
    password: string;
}

export type RegisterResponse = ILoginResponse;
