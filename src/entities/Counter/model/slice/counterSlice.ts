import { createSlice } from '@reduxjs/toolkit';

import { CounterSchema } from '../types/counter';

const initialState: CounterSchema = {
    value: 0,
};

const counterSlice = createSlice({
    name: '@@counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state: CounterSchema) {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
