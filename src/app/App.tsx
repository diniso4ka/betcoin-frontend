import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <AppRouter />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                accusamus accusantium architecto at beatae deleniti eveniet in
                ipsa ipsam laudantium, maiores maxime, minus nam omnis placeat
                qui quia quos, vel!
            </p>
        </div>
    );
};
