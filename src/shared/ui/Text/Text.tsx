import { memo } from 'react';
import cn from 'classnames';

import { TextSize, TextTheme } from './types';

import s from './Text.module.scss';

interface ITextProps {
    className?: string;
    size?: TextSize;
    theme?: TextTheme;
    title?: string;
    text?: string;
}

enum HeadingMap {
    SIZE_1 = 'h1',
    SIZE_2 = 'h2',
    SIZE_3 = 'h3',
    SIZE_4 = 'h4',
}

const TextComponent = (props: ITextProps) => {
    const {
        className,
        title,
        text,
        theme = 'THEME_DEFAULT',
        size = 'SIZE_2',
    } = props;
    const Heading = HeadingMap[size];
    const classes = cn(className, s[theme], s[size]);

    return (
        <>
            {title && (
                <Heading className={cn(s.heading, classes)}>{title}</Heading>
            )}
            {text && <p className={cn(s.text, classes)}>{text}</p>}
        </>
    );
};

export const Text = memo(TextComponent);
