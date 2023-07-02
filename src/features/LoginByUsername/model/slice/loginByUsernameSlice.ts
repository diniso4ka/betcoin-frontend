import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoginByUsernameSchema, ISetValuePayload } from '../types';

const initialState: ILoginByUsernameSchema = {
    form: {
        login: '',
        password: '',
    },
    loading: false,
};

export const loginByUsernameSlice = createSlice({
    name: 'loginByUsername',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<ISetValuePayload>) {
            const { value, field } = action.payload;
            state.form[field] = value;
        },
    },
});

export const { actions: loginByUsernameActions } = loginByUsernameSlice;
export const { reducer: loginByUsernameReducer } = loginByUsernameSlice;
