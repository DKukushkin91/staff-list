import {ChangeEvent, Component, FormEvent, ReactNode, MouseEvent} from "react";
import {StaffData} from "@tsTypes/staff-data";
import {store} from '@app/store';
import {editStaffItem} from '@store/api-actions';
import {idCurrentStaffItem, isShowConfirmDeleteModal, isShowSuccessModal} from "@store/actions";

interface Props {
    staff: StaffData,
}

interface AccordionFormState {
    id: string;
    avatar: string;
    fullName: string;
    position: string;
    department: string;
    phoneNumber: string | number;
    email: string;
    birthday: string;
    description: string;
    socialLink: string;
    isChangeStateValue: boolean;
}

class AccordionForm extends Component<Props, AccordionFormState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            id: props.staff.id,
            avatar: props.staff.avatar,
            fullName: props.staff.fullName,
            position: props.staff.position,
            department: props.staff.department,
            phoneNumber: props.staff.phoneNumber,
            email: props.staff.email,
            birthday: props.staff.birthday,
            description: props.staff.description,
            socialLink: props.staff.socialLink,
            isChangeStateValue: false,
        }
    }

    handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // @ts-ignore
        this.setState({
            [name]: value,
            isChangeStateValue: true
        })
    }

    handleSubmitForm(e: FormEvent) {
        e.preventDefault();

        store.dispatch(editStaffItem(this.state, this.state.id));
        store.dispatch(isShowSuccessModal(true));

        this.setState({
            isChangeStateValue: false
        })
    }

    handleShowConfirmDeleteModal(e: MouseEvent) {
        e.preventDefault();
        store.dispatch(isShowConfirmDeleteModal(true));
        store.dispatch(idCurrentStaffItem(this.state.id));
    }

    render(): ReactNode {
        return (
            <form onSubmit={((e) => this.handleSubmitForm(e))} className="admin_accordion-form">
                <label className="admin_accordion-form-label">
                    <span>id</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="id"
                           className="admin_accordion-form-input" type='text' readOnly defaultValue={this.state.id}/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Аватар</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="avatar"
                           className="admin_accordion-form-input" type='file' defaultValue={''}/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>ФИО</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="fullName"
                           className="admin_accordion-form-input" type='text' defaultValue={this.state.fullName}
                           required/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Должность</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="position"
                           className="admin_accordion-form-input" type='text' defaultValue={this.state.position}
                           required/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Отдел</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="department"
                           className="admin_accordion-form-input" type='text' defaultValue={this.state.department}
                           required/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Телефон</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="phoneNumber"
                           className="admin_accordion-form-input" type='tel' defaultValue={this.state.phoneNumber}
                           required/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Почта</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="email"
                           className="admin_accordion-form-input" type='email' defaultValue={this.state.email}
                           required/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Дата рождения</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="birthday"
                           className="admin_accordion-form-input" type='date' defaultValue={this.state.birthday}
                           required/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>О себе</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="description"
                           className="admin_accordion-form-input" type='text' defaultValue={this.state.description}/>
                </label>
                <label className="admin_accordion-form-label">
                    <span>Социальные сети</span>
                    <input onChange={((e) => this.handleChangeInputValue(e))} name="socialLink"
                           className="admin_accordion-form-input" type='url' defaultValue={this.state.socialLink}
                           required/>
                </label>

                <div className="admin_accordion-buttons">
                    <button className="admin_accordion-button" disabled={!this.state.isChangeStateValue}>Сохранить
                        изменения
                    </button>
                    <button onClick={((e) => this.handleShowConfirmDeleteModal(e))}
                            className="admin_accordion-button">Удалить сотрудника
                    </button>
                </div>
            </form>
        )
    }
}

export default AccordionForm;