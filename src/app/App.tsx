import { LangSwitcher } from '@/features/LangSwitcher';
import { Header } from '@/widgets/Header';

import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <Header />
            <AppRouter />
            <LangSwitcher />
        </div>
    );
};
