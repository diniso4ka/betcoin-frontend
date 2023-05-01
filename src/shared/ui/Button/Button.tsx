import cn from 'classnames';
import { ButtonHTMLAttributes, FC, memo, MouseEvent, ReactNode } from 'react';

import { ButtonSize, ButtonTheme, ButtonType, ButtonWidth } from './types';

import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
    buttonType?: ButtonType;
}

export const ButtonComponent: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = 'THEME_GREEN',
        size = 'SIZE_M',
        width = 'WIDTH_M',
        buttonType = 'TYPE_SQUARE',
        disabled,
        onClick,
    } = props;

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onClick?.(e);
    };

    const buttonWidthMap = `${size}_${width}`;
    const classnames = cn(
        s.Button,
        className,
        s[size],
        s[buttonWidthMap],
        s[buttonType],
        s[theme],
        {
            [s.disabled]: disabled,
        },
    );

    return (
        <button
            onClick={handleButtonClick}
            className={classnames}
            disabled={disabled}
            data-testid='Button'
            {...props}
        >
            {children}
        </button>
    );
};

export const Button = memo(ButtonComponent);
