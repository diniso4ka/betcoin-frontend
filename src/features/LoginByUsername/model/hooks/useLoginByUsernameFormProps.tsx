import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import {
    loginByUsernameFormLoginSelector,
    loginByUsernameFormPasswordSelector,
} from '../selectors/loginByUsernameFormSelector';
import { loginByUsernameActions } from '../slice/loginByUsernameSlice';
import { ISetValuePayload } from '../types';

export const useLoginByUsernameFormProps = (): {
    handleSetValue: (data: ISetValuePayload) => void;
    loginValue?: string;
    passwordValue?: string;
} => {
    const dispatch = useAppDispatch();
    const loginValue = useSelector(loginByUsernameFormLoginSelector);
    const passwordValue = useSelector(loginByUsernameFormPasswordSelector);
    const handleSetValue = useCallback(
        (data: ISetValuePayload) => {
            dispatch(loginByUsernameActions.setValue(data));
        },
        [dispatch],
    );

    return {
        handleSetValue,
        loginValue,
        passwordValue,
    };
};
