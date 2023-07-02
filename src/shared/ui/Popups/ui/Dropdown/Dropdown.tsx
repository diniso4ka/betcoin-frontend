import { memo, ReactNode, useRef, useState } from 'react';
import cn from 'classnames';

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';

import { DropdownDirection } from '../../types';

import popupS from '../../Popup.module.scss';
import s from './Dropdown.module.scss';

export interface IDropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    active?: boolean;
}

interface IDropdownProps {
    items: IDropdownItem[];
    trigger: ReactNode;
    className?: string;
    direction?: DropdownDirection;
}

const DropdownComponent = (props: IDropdownProps) => {
    const { direction = 'BOTTOM_RIGHT', trigger, items, className } = props;

    const [isVisible, setIsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(dropdownRef, () => setIsVisible(false), isVisible);

    const handleClickTrigger = () => {
        setIsVisible((prev) => !prev);
    };

    const handleClickItem = (onClick?: () => void) => {
        onClick?.();
        setIsVisible(false);
    };
    return (
        <div className={cn(s.dropdown, className)} ref={dropdownRef}>
            <button className={popupS.trigger} onClick={handleClickTrigger}>
                {trigger}
            </button>
            {isVisible && (
                <ul className={cn(s.menu, popupS[direction])}>
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className={cn(s.item, { [s.active]: item.active })}
                            onClick={() => handleClickItem(item.onClick)}
                        >
                            {item.content}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const Dropdown = memo(DropdownComponent);
