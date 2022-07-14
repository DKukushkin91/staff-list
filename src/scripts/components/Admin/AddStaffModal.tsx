import {ChangeEvent, Component, FormEvent, MouseEvent, ReactNode} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {isShowAddStaffModal} from '@store/actions';
import {State} from "@tsTypes/state";
import {addStaffItem} from '@store/api-actions';
import {store} from '@app/store';

const mapStateToProps = ({isShowAddStaffModal}: State) => ({isShowAddStaffModal});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

interface AddStaffModalState {
    id: string;
    avatar: string;
    fullName: string;
    position: string;
    department: string;
    phoneNumber: string;
    email: string;
    birthday: string;
    description: string;
    socialLink: string;
};

class AddStaffModal extends Component<PropsFromRedux, AddStaffModalState> {
    constructor(props: PropsFromRedux) {
        super(props);

        this.state = {
            id: '',
            avatar: '',
            fullName: '',
            position: '',
            department: '',
            phoneNumber: '',
            email: '',
            birthday: '',
            description: '',
            socialLink: '',
        }
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";

        this.setState({
            id: `${Date.now()}`,
        })
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    handleCloseModal(e: MouseEvent) {
        e.preventDefault()
        document.body.style.overflow = "visible";
        this.props.dispatch(isShowAddStaffModal(false));
    }

    handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // @ts-ignore
        this.setState({
            [name]: value
        })
    }

    handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        store.dispatch(addStaffItem(this.state));
        this.props.dispatch(isShowAddStaffModal(false));
    }

    render(): ReactNode {
        return (
            <section className="modal">
                <form onSubmit={((e) => this.handleSubmitForm(e))} className="modal_form" method="POST">
                    <fieldset className="modal_form-fieldset">
                        <button onClick={((e) => this.handleCloseModal(e))} className="modal_form-close-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.3002 5.70973C17.9102 5.31973 17.2802 5.31973 16.8902 5.70973L12.0002 10.5897L7.11022 5.69973C6.72022 5.30973 6.09021 5.30973 5.70021 5.69973C5.31021 6.08973 5.31021 6.71973 5.70021 7.10973L10.5902 11.9997L5.70021 16.8897C5.31021 17.2797 5.31021 17.9097 5.70021 18.2997C6.09021 18.6897 6.72022 18.6897 7.11022 18.2997L12.0002 13.4097L16.8902 18.2997C17.2802 18.6897 17.9102 18.6897 18.3002 18.2997C18.6902 17.9097 18.6902 17.2797 18.3002 16.8897L13.4102 11.9997L18.3002 7.10973C18.6802 6.72973 18.6802 6.08973 18.3002 5.70973Z"
                                    fill="#3B5172"/>
                            </svg>
                        </button>
                        <legend className="modal_form-caption">Сотрудник</legend>
                        <div className="modal_form-inputs">
                            <div className="modal_form-input">
                                <label htmlFor="modal-id">Id</label>
                                <input name="id" id="modal-id" type="text" value={this.state.id} readOnly/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-avatar">Аватар</label>
                                <input name="avatar" id="modal-avatar" type="file"/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-fullName">ФИО*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="fullName"
                                       id="modal-fullName" type="text" placeholder="Иванов Иван Иванович" required/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-position">Должность*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="position"
                                       id="modal-position" type="text" placeholder="Дизайнер" required/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-department">Отдел*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="department"
                                       id="modal-department" type="text" placeholder="Дизайн" required/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-phoneNumber">Телефон*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="phoneNumber"
                                       id="modal-phoneNumber" type="tel" placeholder="89123456789" required/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-email">Почта*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="email" id="modal-email"
                                       type="email" placeholder="ivanov@edemrf.com" required/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-date">Дата рождения*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="birthday" id="modal-date"
                                       type="date" placeholder="01.01.1111" required/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-description">О себе</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="description"
                                       id="modal-description" type="text"
                                       placeholder="Хобби, инстересы из жизни, и т.п."/>
                            </div>
                            <div className="modal_form-input">
                                <label htmlFor="modal-socialLink">Социальные сети*</label>
                                <input onChange={((e) => this.handleChangeValue(e))} name="socialLink"
                                       id="modal-socialLink" type="url" placeholder="https://t.me/ivanov" required/>
                            </div>
                        </div>
                        <span className="modal_form-hint">* Обязательно для заполнения</span>
                        <button className="modal_form-confirm-button">Сохарнить</button>
                    </fieldset>
                </form>
            </section>
        )

    }
}

export {AddStaffModal};
export default connector(AddStaffModal);