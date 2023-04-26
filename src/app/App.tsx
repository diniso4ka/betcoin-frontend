import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <AppRouter />
        </div>
    );
};
