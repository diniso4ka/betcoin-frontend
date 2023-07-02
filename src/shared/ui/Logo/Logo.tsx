import { memo } from 'react';

import { MAIN_ROUTE } from '@/shared/const/router';

import { AppLink } from '../AppLink';

import LogoIcon from '@/shared/assets/icons/logo.svg';

interface ILogoProps {
    isLink?: boolean;
    className?: string;
}
const LogoComponent = (props: ILogoProps) => {
    const { isLink = true, className } = props;

    const Logo = <LogoIcon key='logoIcon' className={className} />;

    if (isLink) {
        return <AppLink to={MAIN_ROUTE}>{Logo}</AppLink>;
    }

    return Logo;
};

export const Logo = memo(LogoComponent);
