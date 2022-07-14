import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../constants';

interface PrivateRouteProps {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
    const {authorizationStatus, children} = props;

    return (
        authorizationStatus === AuthorizationStatus.AUTH
            ? children
            : <Navigate to={AppRoute.LOGIN}/>
    );
}

export default PrivateRoute;