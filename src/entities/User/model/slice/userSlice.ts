import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoginResponse } from '@/shared/types/api/auth/login';

import { userDataAdapter } from '../service/userDataAdapter';
import { IUserSchema } from '../types';

const initialState: IUserSchema = {
    user: undefined,
};

export const userSlice = createSlice({
    name: 'authByLogin',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<ILoginResponse>) {
            state.user = userDataAdapter(action.payload);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
