import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import cn from 'classnames';

import SearchIcon from '@/shared/assets/icons/search.svg';

import s from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'disabled'
>;

interface IInputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    className?: string;
    readonly?: boolean;
    disabled?: boolean;
    search?: boolean;
}

const InputComponent = (props: IInputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        autoFocus,
        readonly,
        disabled,
        search = true,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div
            className={cn(s.inputWrapper, className, {
                [s.focused]: isFocused,
                [s.disabled]: disabled,
            })}
        >
            <input
                ref={inputRef}
                className={s.input}
                type={type}
                value={value}
                readOnly={readonly}
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
