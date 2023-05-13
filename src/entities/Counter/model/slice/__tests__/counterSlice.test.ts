import { ICounterSchema } from '../../types/counter';
import { counterActions, counterReducer } from '../counterSlice';

describe('counterSlice', () => {
    test('increment', () => {
        const state: DeepPartial<ICounterSchema> = {
            value: 0,
        };

        expect(
            counterReducer(state as ICounterSchema, counterActions.increment()),
        ).toEqual({ value: 1 });
    });

    test('decrement', () => {
        const state: DeepPartial<ICounterSchema> = {
            value: 0,
        };

        expect(
            counterReducer(state as ICounterSchema, counterActions.decrement()),
        ).toEqual({ value: -1 });
    });
});
