import { ButtonHTMLAttributes, memo, MouseEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { ButtonSize, ButtonTheme, ButtonType, ButtonWidth } from './types';

import s from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    url?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
    buttonType?: ButtonType;
}

const ButtonComponent = (props: IButtonProps) => {
    const {
        className,
        children,
        url,
        theme = 'THEME_BLUE',
        size = 'SIZE_M',
        width = 'WIDTH_L',
        buttonType = 'TYPE_SQUARE',
        disabled,
        onClick,
        ...rest
    } = props;
    const navigate = useNavigate();

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onClick?.(e);
        if (url) {
            navigate(url);
        }
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
