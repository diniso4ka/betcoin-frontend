import { ButtonHTMLAttributes, memo, MouseEvent, ReactNode } from 'react';
import cn from 'classnames';

import { ButtonSize, ButtonTheme, ButtonType, ButtonWidth } from './types';

import s from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
    buttonType?: ButtonType;
}

const ButtonComponent = (props: IButtonProps) => {
    const {
        className,
        children,
        theme = 'THEME_GREEN',
        size = 'SIZE_M',
        width = 'WIDTH_M',
        buttonType = 'TYPE_SQUARE',
        disabled,
        onClick,
        ...rest
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
            {...rest}
        >
            {children}
        </button>
    );
};

export const Button = memo(ButtonComponent);
