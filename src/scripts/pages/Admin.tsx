import {Component, MouseEvent, ReactNode} from "react";
import Header from "@components/Header";
import {isShowAddStaffModal} from "@store/actions";
import {State} from '@tsTypes/state';
import {connect, ConnectedProps} from 'react-redux';
import SuccessModal from "@components/Modals/Success";
import ConfirmDeleteModal from "@components/Modals/ConfirmDelete";
import Tabs from "@components/Admin/Tabs";
import StaffList from "@components/Admin/StaffList";
import AddStaffModal from "@components/Admin/AddStaffModal";

const mapStateToProps = ({isShowAddStaffModal, isShowSuccessModal, isShowConfirmDeleteModal}: State) => ({
    isShowAddStaffModal,
    isShowSuccessModal,
    isShowConfirmDeleteModal
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class Admin extends Component<PropsFromRedux> {
    handleShowModal(e: MouseEvent) {
        e.preventDefault();
        this.props.dispatch(isShowAddStaffModal(true));
    }

    render(): ReactNode {
        return (
            <div className="fix-content">
                <Header/>
                <div className="container">
                    <section className="admin">
                        <Tabs/>
                        <div className="admin_staff">
                            <StaffList/>
                            <button onClick={((e) => this.handleShowModal(e))} className="admin_staff-add-button">
                                <span>Добавить сотрудника</span>
                            </button>
                        </div>
                    </section>
                </div>
                {this.props.isShowAddStaffModal ? <AddStaffModal/> : null}
                {this.props.isShowSuccessModal ? <SuccessModal/> : null}
                {this.props.isShowConfirmDeleteModal ? <ConfirmDeleteModal/> : null}
            </div>
        )
    }
}

export {Admin};
export default connector(Admin);
