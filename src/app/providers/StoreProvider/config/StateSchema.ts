import { AxiosInstance } from 'axios';

import { IUserSchema } from '@/entities/User';
import { IAuthByLoginSchema } from '@/features/AuthByLogin';
import { IRegisterByEmailSchema } from '@/features/RegisterByEmail';

export interface IStateSchema {
    user: IUserSchema;
    loginForm: IAuthByLoginSchema;
    registerForm: IRegisterByEmailSchema;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
