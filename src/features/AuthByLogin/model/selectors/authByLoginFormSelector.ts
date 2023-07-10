import { IStateSchema } from '@/app/providers/StoreProvider';

export const loginSelector = (state: IStateSchema) =>
    state.loginForm.form.login;

export const passwordSelector = (state: IStateSchema) =>
    state.loginForm.form.password;

export const statusSelector = (state: IStateSchema) => state.loginForm.loading;

export const errorSelector = (state: IStateSchema) => state.loginForm?.error;
