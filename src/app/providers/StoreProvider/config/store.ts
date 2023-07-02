import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { loginByUsernameReducer } from '@/features/LoginByUsername';

import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        loginByUsername: loginByUsernameReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
