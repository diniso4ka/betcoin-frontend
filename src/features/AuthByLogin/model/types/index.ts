import { ILoginRequest } from '@/shared/api/resources/auth/types';

export interface IAuthByLoginSchema {
    form: IForm;
    loading: boolean;
    error?: string;
}

export type Fields = keyof ILoginRequest;

export type IForm = ILoginRequest;

export interface ISetValuePayload {
    value: string;
    field: Fields;
}
