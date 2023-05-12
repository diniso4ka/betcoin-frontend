import { memo } from 'react';

import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const CounterComponent = () => {
    const dispatch = useAppDispatch();
    const value = useSelector(getCounterValue);

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(counterActions.increment())}>
                +
            </button>
            <button onClick={() => dispatch(counterActions.decrement())}>
                -
            </button>
        </div>
    );
};

export const Counter = memo(CounterComponent);
