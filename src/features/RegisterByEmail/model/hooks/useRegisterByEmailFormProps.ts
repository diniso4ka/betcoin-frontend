import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { noop } from '@/shared/lib/helpers/noop';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useMountEffect } from '@/shared/lib/hooks/useMountEffect';

import {
    emailSelector,
    errorSelector,
    loginSelector,
    passwordSelector,
    statusSelector,
} from '../selectors/registerByEmailFormSelector';
import { thunkRegisterByEmail } from '../service/ThunkRegisterByEmail';
import { registerByEmailActions } from '../slice/registerByEmail';
import { ISetValuePayload } from '../types';

export const useRegisterByEmailFormProps = (): {
    handleSetValue: (data: ISetValuePayload) => void;
    handleSubmit: () => void;
    loginValue?: string;
    emailValue?: string;
    passwordValue?: string;
    loading: boolean;
    error?: string;
} => {
    const dispatch = useAppDispatch();
    const emailValue = useSelector(emailSelector);
    const loginValue = useSelector(loginSelector);
    const passwordValue = useSelector(passwordSelector);
    const loading = useSelector(statusSelector);
    const error = useSelector(errorSelector);
    const handleSetValue = useCallback(
        (data: ISetValuePayload) => {
            dispatch(registerByEmailActions.setValue(data));
        },
        [dispatch],
    );

    const handleSubmit = useCallback(() => {
        dispatch(
            thunkRegisterByEmail({
                email: emailValue,
                login: loginValue,
                password: passwordValue,
            }),
        );
    }, [dispatch, emailValue, loginValue, passwordValue]);

    useMountEffect(noop, () => {
        dispatch(registerByEmailActions.setValue());
    });

    return {
        handleSetValue,
        handleSubmit,
        loginValue,
        passwordValue,
        loading,
        error,
    };
};
