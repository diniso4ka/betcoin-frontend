import { IStateSchema } from '@/app/providers/StoreProvider';

import { getCounterValue } from '../getCounterValue';

describe('selector getUserInited', () => {
    test('should return 10', () => {
        const state: DeepPartial<IStateSchema> = { counter: { value: 0 } };

        expect(getCounterValue(state as IStateSchema)).toBe(0);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getCounterValue(state as IStateSchema)).toBe(0);
    });
});
