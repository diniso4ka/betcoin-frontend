import { ReactNode } from 'react';
import cn from 'classnames';

import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from './types';

import s from './Flex.module.scss';

const justifyClasses: Record<FlexJustify, string> = {
    START: s.JUSTIFY_START,
    END: s.JUSTIFY_END,
    CENTER: s.JUSTIFY_CENTER,
    BETWEEN: s.JUSTIFY_BETWEEN,
};

const alignClasses: Record<FlexAlign, string> = {
    START: s.ALIGN_START,
    END: s.ALIGN_END,
    CENTER: s.ALIGN_CENTER,
};

const directionClasses: Record<FlexDirection, string> = {
    ROW: s.DIRECTION_ROW,
    COLUMN: s.DIRECTION_COLUMN,
};
const gapClasses: Record<FlexGap, string> = {
    4: s.GAP_4,
    8: s.GAP_8,
    16: s.GAP_16,
    32: s.GAP_32,
};

export interface IFlexProps {
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
    align = 'CENTER',
    justify = 'START',
    direction = 'ROW',
    gap,
    max,
}: IFlexProps) => {
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
