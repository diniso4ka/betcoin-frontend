import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/Counter';

import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
