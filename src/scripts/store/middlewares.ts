import browserHistory from '@app/browser-history';
import {State} from '@tsTypes/state';
import {ActionType} from '@store/actions';
import {Middleware} from 'redux';

export const redirect: Middleware<unknown, State> = (_store: any) => (next: any) => (action) => {
    if (action.type === ActionType.REDIRECT_TO_ROUTE) {
        browserHistory.push(action.payload);
    }
    return next(action);
};