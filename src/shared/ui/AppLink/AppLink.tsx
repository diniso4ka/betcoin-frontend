import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import { AppLinkSize, AppLinkTheme } from './types';

import s from './AppLink.module.scss';

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    size?: AppLinkSize;
}

const AppLinkComponent = (props: IAppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = 'THEME_WHITE',
        size = 'SIZE_M',
    } = props;

    const classnames = cn(s.link, className, s[theme], s[size]);

    return (
        <Link to={to} className={classnames}>
            {children}
        </Link>
    );
};

export const AppLink = memo(AppLinkComponent);
