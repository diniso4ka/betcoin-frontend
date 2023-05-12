import { ReactNode } from 'react';
import cn from 'classnames';

import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from './types';

import s from './Flex.module.scss';

const justifyClasses: Record<FlexJustify, string> = {
    start: s.justifyStart,
    end: s.justifyEnd,
    center: s.justifyCenter,
    between: s.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: s.alignStart,
    end: s.alignEnd,
    center: s.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: s.directionRow,
    column: s.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: s.gap4,
    8: s.gap8,
    16: s.gap16,
    32: s.gap32,
};

export interface FlexProps {
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    className?: string;
}

export const Flex = ({
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap,
    max,
}: FlexProps) => {
    const classnames = cn(
        s.flex,
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        {
            [s.max]: max,
        },
    );

    return <div className={classnames}>{children}</div>;
};
