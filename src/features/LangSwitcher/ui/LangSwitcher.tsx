import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown } from '@/shared/ui/Popups';
import { IDropdownItem } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';

import ArrowIcon from '@/shared/assets/icons/arrow.svg';

import s from './LangSwitcher.module.scss';

const LangSwitcherComponent = memo(() => {
    const { i18n } = useTranslation();

    const trigger = (
        <div className={s.trigger}>
            <p>{i18n.language.toUpperCase()}</p>
            <ArrowIcon />
        </div>
    );

    const items: IDropdownItem[] = [
        {
            content: 'ENG',
            onClick: () => i18n.changeLanguage('en'),
            active: i18n.language === 'en',
        },
        {
            content: 'RUS',
            onClick: () => i18n.changeLanguage('ru'),
            active: i18n.language === 'ru',
        },
    ];

    return (
        <Dropdown trigger={trigger} items={items} direction='bottomCenter' />
    );
});

export const LangSwitcher = memo(LangSwitcherComponent);
