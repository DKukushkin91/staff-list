import {OmitRouter, RouterProps} from '@tsTypes/with-router';
import {ComponentType} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

function withRouter<T>(Component: ComponentType<OmitRouter<T> & RouterProps>) {
    return (props: OmitRouter<T>) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            // @ts-ignore
            <Component location={location} navigate={navigate} params={params} {...props}/>
        );
    };
}

export default withRouter;