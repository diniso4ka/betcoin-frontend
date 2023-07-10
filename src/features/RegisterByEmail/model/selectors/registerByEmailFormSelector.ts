import { IStateSchema } from '@/app/providers/StoreProvider';

export const emailSelector = (state: IStateSchema) =>
    state.registerForm.form.email;

export const loginSelector = (state: IStateSchema) =>
    state.registerForm.form.login;

export const passwordSelector = (state: IStateSchema) =>
    state.registerForm.form.password;

export const statusSelector = (state: IStateSchema) =>
    state.registerForm.loading;

export const errorSelector = (state: IStateSchema) => state.registerForm?.error;
