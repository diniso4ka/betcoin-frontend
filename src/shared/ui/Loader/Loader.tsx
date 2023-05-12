import { memo } from 'react';
import cn from 'classnames';

import s from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

const LoaderComponent = (props: ILoaderProps) => {
    const { className } = props;

    return (
        <div className={cn(s.loader, className)}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export const Loader = memo(LoaderComponent);
