import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';
import { authByLoginReducer } from '@/features/AuthByLogin';
import { registerByEmailReducer } from '@/features/RegisterByEmail';

import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        loginForm: authByLoginReducer,
        registerForm: registerByEmailReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
