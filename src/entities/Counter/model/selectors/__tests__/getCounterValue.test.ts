import { StateSchema } from '@/app/providers/StoreProvider';

import { getCounterValue } from '../getCounterValue';

describe('selector getUserInited', () => {
    test('should return 10', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 0 } };

        expect(getCounterValue(state as StateSchema)).toBe(0);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getCounterValue(state as StateSchema)).toBe(0);
    });
});
