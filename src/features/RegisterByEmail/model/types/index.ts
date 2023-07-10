import { IRegisterRequest } from '@/shared/api/resources/auth/types';

export interface IRegisterByEmailSchema {
    form: IForm;
    loading: boolean;
    error?: string;
}

export type Fields = keyof IRegisterRequest;

export type IForm = IRegisterRequest;

export interface ISetValuePayload {
    value: string;
    field: Fields;
}
