import { NoInfer } from 'react-redux';
import {
    ActionReducerMapBuilder,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { thunkAuthByLogin } from '../service/ThunkAuthByLogin';
import { IAuthByLoginSchema, IForm, ISetValuePayload } from '../types';

const initialState = {
    form: {
        login: '',
        password: '',
    },
    loading: false,
};

export const authByLoginSlice = createSlice({
    name: 'authByLogin',
    initialState,
    reducers: {
        setValue(
            state: IAuthByLoginSchema,
            action: PayloadAction<ISetValuePayload | undefined>,
        ) {
            if (!action.payload) {
                return Object.keys(state.form).forEach(
                    (key) => (state.form[key as keyof IForm] = ''),
                );
            }

            const { value, field } = action.payload;
            state.form[field] = value;
        },
    },
    extraReducers: (
        builder: ActionReducerMapBuilder<NoInfer<IAuthByLoginSchema>>,
    ) => {
        builder
            .addCase(thunkAuthByLogin.pending, (state) => {
                state.loading = true;
                delete state.error;
            })
            .addCase(thunkAuthByLogin.fulfilled, () => {
                return initialState;
            })
            .addCase(thunkAuthByLogin.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { actions: authByLoginActions } = authByLoginSlice;
export const { reducer: authByLoginReducer } = authByLoginSlice;
