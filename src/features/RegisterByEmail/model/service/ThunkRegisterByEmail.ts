import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions } from '@/entities/User';

import { fetchRegister } from '@/shared/api/resources/auth';

import { IForm } from '../types';

export const thunkRegisterByEmail = createAsyncThunk<
    undefined,
    IForm,
    { rejectValue: string }
>('register/RegisterByEmail', async (form, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
        const response = await fetchRegister(form);

        if (!response) {
            throw new Error();
        }

        dispatch(userActions.setUserData(response));
    } catch (error) {
        return rejectWithValue('Error');
    }
});
