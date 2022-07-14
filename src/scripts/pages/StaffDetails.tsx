import {Component} from 'react';
import Header from '@components/Header';
import {connect, ConnectedProps} from 'react-redux';
import {WithRouterProps} from '@tsTypes/with-router';
import withRouter from '@hocs/with-router';
import {fetchStaffDetails} from '@store/api-actions';
import {ThunkAppDispatch} from '@tsTypes/actions';
import StaffDetails from '@components/Staff/StaffDetails';
import Loader from '@components/Loader';
import {State} from '@tsTypes/state';
import {removeStaffDetails} from '@store/actions';

const mapStateToProps = ({staffDetails}: State) => ({staffDetails});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class StaffDetailsPage extends Component<WithRouterProps<PropsFromRedux>> {
    componentDidMount() {
        const currentStaffId = Number(this.props.params.id);
        (this.props.dispatch as ThunkAppDispatch)(fetchStaffDetails(currentStaffId));
    }

    componentWillUnmount() {
        this.props.dispatch(removeStaffDetails(null));
    }

    render() {
        const {staffDetails} = this.props;
        const isStaffDetailsEmpty = !staffDetails;

        if (isStaffDetailsEmpty) {
            return (
                <Loader/>
            )
        }

        return (
            <div className='fix-content'>
                <Header/>
                <StaffDetails staffDetails={staffDetails}/>
            </div>
        );
    }
}

export {StaffDetailsPage};
export default withRouter(connector(StaffDetailsPage));