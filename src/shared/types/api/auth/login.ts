import { UserRoles } from '../../user';

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
