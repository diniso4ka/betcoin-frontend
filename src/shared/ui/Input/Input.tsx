import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import cn from 'classnames';

import { InputVariant } from './types';

import SearchIcon from '@/shared/assets/icons/search.svg';

import s from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'disabled'
>;

interface IInputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: ({ field, value }: { field: any; value: string }) => void;
    autoFocus?: boolean;
    variant?: InputVariant;
    className?: string;
    readonly?: boolean;
    disabled?: boolean;
    search?: boolean;
}

const InputComponent = (props: IInputProps) => {
    const {
        className,
        variant = 'DEFAULT',
        onChange,
        autoFocus,
        disabled,
        search = false,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.({ field: e.target.name, value: e.target.value });
    };

    const classnames = cn(s.inputWrapper, className, s[variant], {
        [s.focused]: isFocused,
        [s.disabled]: disabled,
    });

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classnames}>
            <input
                ref={inputRef}
                className={s.input}
                disabled={disabled}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
            {search && <SearchIcon className={s.icon} />}
        </div>
    );
};

export const Input = memo(InputComponent);
