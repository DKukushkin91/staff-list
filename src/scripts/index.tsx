import '../styles/main.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {checkAuthAction, fetchStaffList} from '@store/api-actions';
import browserHistory from '@app/browser-history';
import HistoryRouter from '@hocs/history-router';
import {store} from '@app/store';
import App from "@components/App";

const root = createRoot(document.getElementById('root')!);

store.dispatch(checkAuthAction());
store.dispatch(fetchStaffList());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={browserHistory}>
                <App/>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>
);