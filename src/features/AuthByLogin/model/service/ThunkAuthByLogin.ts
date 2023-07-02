import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions } from '@/entities/User';

import { fetchLogin } from '@/shared/api/resources/auth';

import { IForm } from '../types';

export const thunkAuthByLogin = createAsyncThunk<
    undefined,
    IForm,
    { rejectValue: string }
>('auth/AuthByLogin', async (form, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
        const response = await fetchLogin(form);

        if (!response) {
            throw new Error();
        }

        dispatch(userActions.setUserData(response));
    } catch (error) {
        return rejectWithValue('Error');
    }
});
