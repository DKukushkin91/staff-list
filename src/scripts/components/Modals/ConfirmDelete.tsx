import {Component, MouseEvent} from "react";
import {isShowConfirmDeleteModal} from "@store/actions";
import {State} from "@tsTypes/state";
import {connect, ConnectedProps} from "react-redux";
import {store} from "@app/store";
import {deleteStaffItem} from "@store/api-actions";

const mapStateToProps = ({isShowConfirmDeleteModal, idCurrentStaffItem}: State) => ({
    isShowConfirmDeleteModal,
    idCurrentStaffItem
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class ConfirmDelete extends Component<PropsFromRedux> {
    componentDidMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    handleCloseModal(e: MouseEvent) {
        e.preventDefault()
        document.body.style.overflow = "visible";
        this.props.dispatch(isShowConfirmDeleteModal(false));
    }

    handleDeleteStaffItem(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        document.body.style.overflow = "visible";
        this.props.dispatch(isShowConfirmDeleteModal(false));
        store.dispatch(deleteStaffItem(this.props.idCurrentStaffItem));
    }


    render() {
        return (
            <section className="modal">
                <form className="modal_form">
                    <fieldset className="modal_form-fieldset">
                        <button onClick={((e) => this.handleCloseModal(e))} className="modal_form-close-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.3002 5.70973C17.9102 5.31973 17.2802 5.31973 16.8902 5.70973L12.0002 10.5897L7.11022 5.69973C6.72022 5.30973 6.09021 5.30973 5.70021 5.69973C5.31021 6.08973 5.31021 6.71973 5.70021 7.10973L10.5902 11.9997L5.70021 16.8897C5.31021 17.2797 5.31021 17.9097 5.70021 18.2997C6.09021 18.6897 6.72022 18.6897 7.11022 18.2997L12.0002 13.4097L16.8902 18.2997C17.2802 18.6897 17.9102 18.6897 18.3002 18.2997C18.6902 17.9097 18.6902 17.2797 18.3002 16.8897L13.4102 11.9997L18.3002 7.10973C18.6802 6.72973 18.6802 6.08973 18.3002 5.70973Z"
                                    fill="#3B5172"/>
                            </svg>
                        </button>
                        <legend className="modal_form-caption">Вы уверены?</legend>
                        <button onClick={((e) => this.handleDeleteStaffItem(e))}
                                className="modal_form-confirm-button">Удалить
                        </button>
                        <button onClick={((e) => this.handleCloseModal(e))}
                                className="modal_form-confirm-button">Отмена
                        </button>
                    </fieldset>
                </form>
            </section>
        );
    }
}

export {ConfirmDelete};
export default connector(ConfirmDelete);