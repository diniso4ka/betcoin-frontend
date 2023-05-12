import { CSSProperties, memo } from 'react';
import cn from 'classnames';

import s from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}

const SkeletonComponent = (props: ISkeletonProps) => {
    const { className, width, height, borderRadius } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return <div style={styles} className={cn(className, s.skeleton)} />;
};

export const Skeleton = memo(SkeletonComponent);
