import { memo, useState } from 'react';
import s from './Counter.module.scss';

export const Counter = memo(() => {
    const [v, setV] = useState(0);
    
    return (
        <div className={s.fontSize}>
            {v}
            <button onClick={() => setV(v + 1)}>+</button>
        </div>
    );
});