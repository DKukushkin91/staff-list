import {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import Main from '@pages/Main';
import Loader from '@components/Loader';
import {State} from '@tsTypes/state';
import {AppRoute} from '@app/constants';
import StaffDetailsPage from '@pages/StaffDetails';
import Error from '@pages/Error';
import PrivateRoute from '@helpers/private-route';
import AdminPage from '@pages/Admin';
import Login from "@pages/Login";

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({authorizationStatus, isDataLoaded});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class App extends Component<PropsFromRedux> {
    render() {
        const {authorizationStatus, isDataLoaded} = this.props;

        if (!isDataLoaded) {
            return (
                <Loader/>
            )
        }

        return (
            <Routes>
                <Route path={AppRoute.ROOT} element={<Main/>}/>
                <Route path={AppRoute.STAFF_DETAILS} element={<StaffDetailsPage/>}/>
                <Route path={AppRoute.ADMIN} element={
                    <PrivateRoute authorizationStatus={authorizationStatus}>
                        <AdminPage/>
                    </PrivateRoute>
                }/>
                <Route path={AppRoute.LOGIN} element={<Login/>}/>
                <Route path={AppRoute.ERROR} element={<Error/>}/>
            </Routes>
        );
    }
}

export {App};
export default connector(App);