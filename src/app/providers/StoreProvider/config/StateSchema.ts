import { AxiosInstance } from 'axios';

import { IAuthByLoginSchema } from '@/features/AuthByLogin';

export interface IStateSchema {
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
