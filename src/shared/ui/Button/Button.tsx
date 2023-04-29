import cn from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import s from './Button.module.scss';

export type ButtonTheme = 'clear' | 'primary' | 'blue';

export type ButtonSize = 'size_s' | 'size_m' | 'size_l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo(
    ({
        className,
        children,
        theme = 'clear',
        size = 'size_m',
        disabled,
        ...props
    }: ButtonProps) => (
        <button
            className={cn(s.Button, className, s[size], s[theme], {
                [s.disabled]: disabled,
            })}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    ),
);
