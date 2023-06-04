import { RefObject, useEffect } from 'react';

export const useClickOutside = (
    ref: RefObject<HTMLElement>,
    callback: () => void,
    deleteListener?: boolean,
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();

                if (deleteListener !== undefined) {
                    document.removeEventListener('click', handleClickOutside);
                }
            }
        };

        if (deleteListener !== undefined) {
            if (deleteListener) {
                document.addEventListener('click', handleClickOutside);
            }
        } else {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [callback, deleteListener, ref]);

    return ref;
};
