import { memo } from 'react';

import { useTranslation } from 'react-i18next';

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const handleToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return <button onClick={handleToggle}>****</button>;
});
