import { memo } from 'react';
import cn from 'classnames';

import { TextSize, TextTheme } from './types';

import s from './Text.module.scss';

interface ITextProps {
    className?: string;
    size?: TextSize;
    theme?: TextTheme;
    value: string;
}

const TextComponent = (props: ITextProps) => {
    const {
        className,
        value,
        theme = 'THEME_DEFAULT',
        size = 'SIZE_P2',
    } = props;

    const classes = cn(className, s.text, s[theme], s[size]);

    return <p className={classes}>{value}</p>;
};

export const Text = memo(TextComponent);
