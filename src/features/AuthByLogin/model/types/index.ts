import { ILoginRequest } from '@/shared/api/resources/auth/types';

export interface IAuthByLoginSchema {
    form: IForm;
    loading: boolean;
    error?: string;
}

export type Fields = keyof ILoginRequest;

export type IForm = Record<Fields, string>;

export interface ISetValuePayload {
    value: string;
    field: Fields;
}
