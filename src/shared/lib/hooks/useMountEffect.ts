import { useEffect, useRef } from 'react';

export const useMountEffect = (
    mountEffect?: Parameters<typeof useEffect>[0],
    unmountEffect?: Parameters<typeof useEffect>[0],
) => {
    const mountEffectRef = useRef(mountEffect);
    const unmountEffectRef = useRef(unmountEffect);

    useEffect(() => {
        mountEffectRef.current?.();

        const unmountEffectFunc = unmountEffectRef.current;
        return () => {
            unmountEffectFunc?.();
        };
    }, []);
};
