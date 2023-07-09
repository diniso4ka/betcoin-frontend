import { AxiosInstance } from 'axios';

import { IUserSchema } from '@/entities/User';
import { IAuthByLoginSchema } from '@/features/AuthByLogin';

export interface IStateSchema {
    user: IUserSchema;
    loginForm: IAuthByLoginSchema;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
