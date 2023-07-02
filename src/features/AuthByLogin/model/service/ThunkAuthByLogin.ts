import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchLogin } from '@/shared/api/resources/auth/auth';

import { IForm } from '../types';

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        email: string;
        username: string;
        role: string;
        id: string;
        isActivated: boolean;
    };
}

export const thunkAuthByLogin = createAsyncThunk<
    ILoginResponse,
    IForm,
    { rejectValue: string }
>('auth/AuthByLogin', async (form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetchLogin(form);

        if (!response) {
            throw new Error();
        }

        return response;
    } catch (error) {
        return rejectWithValue('Error');
    }
});
