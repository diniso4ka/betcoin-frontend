import { UserRoles } from '@/shared/types/user';

export interface IUserSchema {
    user?: IUserData;
}

export interface IUserData {
    email: string;
    username: string;
    balance: number;
    role: UserRoles;
    uid: string;
    isActivated: boolean;
}
