import { IStateSchema } from '@/app/providers/StoreProvider';

export const loginByUsernameFormLoginSelector = (state: IStateSchema) =>
    state.loginByUsername.form?.login;

export const loginByUsernameFormPasswordSelector = (state: IStateSchema) =>
    state.loginByUsername.form?.password;
