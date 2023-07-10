import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IForm, IRegisterByEmailSchema, ISetValuePayload } from '../types';

const initialState: IRegisterByEmailSchema = {
    form: {
        email: '',
        login: '',
        password: '',
    },
    loading: false,
};

export const registerByEmailSlice = createSlice({
    name: 'authByLogin',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<ISetValuePayload | undefined>) {
            if (!action.payload) {
                return Object.keys(state.form).forEach(
                    (key) => (state.form[key as keyof IForm] = ''),
                );
            }

            const { value, field } = action.payload;
            state.form[field] = value;
        },
    },
});

export const { actions: registerByEmailActions } = registerByEmailSlice;
export const { reducer: registerByEmailReducer } = registerByEmailSlice;
