import { sum } from './sum';

describe('sum', () => {
    test('1', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
