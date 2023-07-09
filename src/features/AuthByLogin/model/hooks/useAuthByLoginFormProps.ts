import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { noop } from '@/shared/lib/helpers/noop';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useMountEffect } from '@/shared/lib/hooks/useMountEffect';

import {
    authByLoginFormLoginSelector,
    authByLoginFormPasswordSelector,
    authByLoginFormStatusSelector,
} from '../selectors/authByLoginFormSelector';
import { thunkAuthByLogin } from '../service/ThunkAuthByLogin';
import { authByLoginActions } from '../slice/authByLoginSlice';
import { ISetValuePayload } from '../types';

export const useAuthByLoginFormProps = (): {
    handleSetValue: (data: ISetValuePayload) => void;
    handleSubmit: () => void;
    loginValue?: string;
    passwordValue?: string;
    loading: boolean;
} => {
    const dispatch = useAppDispatch();
    const loginValue = useSelector(authByLoginFormLoginSelector);
    const passwordValue = useSelector(authByLoginFormPasswordSelector);
    const loading = useSelector(authByLoginFormStatusSelector);
    const handleSetValue = useCallback(
        (data: ISetValuePayload) => {
            dispatch(authByLoginActions.setValue(data));
        },
        [dispatch],
    );

    const handleSubmit = useCallback(() => {
        dispatch(
            thunkAuthByLogin({
                login: loginValue,
                password: passwordValue,
            }),
        );
    }, [dispatch, loginValue, passwordValue]);

    useMountEffect(noop, () => {
        dispatch(authByLoginActions.setValue());
    });

    return {
        handleSetValue,
        handleSubmit,
        loginValue,
        passwordValue,
        loading,
    };
};
