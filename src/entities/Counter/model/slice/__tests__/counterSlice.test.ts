import { CounterSchema } from '../../types/counter';
import { counterActions, counterReducer } from '../counterSlice';

describe('counterSlice', () => {
    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 0,
        };

        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({ value: 1 });
    });

    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 0,
        };

        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        ).toEqual({ value: -1 });
    });
});
