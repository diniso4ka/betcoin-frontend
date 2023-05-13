import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/Counter';

import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
