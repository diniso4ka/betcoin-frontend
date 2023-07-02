import { IStateSchema } from '@/app/providers/StoreProvider';

export const authByLoginFormLoginSelector = (state: IStateSchema) =>
    state.loginForm.form.login;

export const authByLoginFormPasswordSelector = (state: IStateSchema) =>
    state.loginForm.form.password;

export const authByLoginFormStatusSelector = (state: IStateSchema) =>
    state.loginForm.loading;
