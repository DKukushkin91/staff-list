import {Component, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {StaffData} from '@tsTypes/staff-data';
import image from '@assets/images/avatar-male.png';
import dayjs from 'dayjs';

interface Props {
    staff: StaffData
}

class Staff extends Component<Props> {
    render(): ReactNode {
        const {staff} = this.props;
        const isAvatarEmpty = !staff.avatar;

        return (
            <li id={`${staff.id}`} className='staff_item'>
                <div className={`staff_item-img`}>
                    <img src={isAvatarEmpty ? image : staff.avatar} alt=""/>
                </div>
                <div className="staff_item-content">
                    <div className='staff_item-title'>
                        <h5>{staff.fullName}</h5>
                    </div>
                    <div className="staff_item-inner">
                        <span className="staff_item-inner-caption">Должность:</span>
                        <span className="staff_item-inner-description">{staff.position}</span>
                    </div>
                    <div className="staff_item-inner">
                        <span className="staff_item-inner-caption">Отдел:</span>
                        <span className="staff_item-inner-description">{staff.department}</span>
                    </div>
                    <div className="staff_item-inner">
                        <span className="staff_item-inner-caption">Телефон:</span>
                        <a href={`tel:${staff.phoneNumber}`} target='_blank'
                           className="staff_item-inner-description">{staff.phoneNumber}</a>
                    </div>
                    <div className="staff_item-inner">
                        <span className="staff_item-inner-caption">Email:</span>
                        <a href={`mailto:${staff.email}`} target='_blank'
                           className='staff_item-inner-description'>{staff.email}</a>
                    </div>
                    <div className="staff_item-inner">
                        <span className="staff_item-inner-caption">Дата рождения:</span>
                        <span
                            className="staff_item-inner-description">{dayjs(staff.birthday).format('DD.MM.YYYY')}</span>
                    </div>
                    <div className="staff_item-inner">
                        <span className="staff_item-inner-caption">Социальные сети:</span>
                        <a href={`${staff.socialLink}`} target='_blank' className="staff_item-inner-description">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.1004 35C19.3228 35 19.455 34.7064 19.1868 33.966L16.9004 26.4414L34.5004 16"
                                    fill="#F4F6FE"/>
                                <path
                                    d="M20.0996 35C20.6996 35 20.9646 34.7256 21.2996 34.4L24.4996 31.2883L20.508 28.8813"
                                    fill="black"/>
                                <path
                                    d="M20.5084 28.882L30.1804 36.0278C31.2842 36.6368 32.0806 36.3214 32.3556 35.0032L36.2926 16.4506C36.6956 14.8346 35.6766 14.1014 34.6206 14.5808L11.5026 23.495C9.92465 24.128 9.93405 25.0084 11.215 25.4006L17.1476 27.2524L30.8822 18.5874C31.5306 18.1942 32.1258 18.4054 31.6374 18.839"
                                    fill="#3B5172"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <NavLink className='staff_item-link' to={`staff-list/${staff.id}`}/>
            </li>
        );
    }
}

export default Staff;