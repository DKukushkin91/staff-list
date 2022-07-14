import {Component} from 'react';
import PageTitle from '@components/PageTitle';
import image from '@assets/images/avatar-male.png';
import {StaffData} from '@tsTypes/staff-data';
import dayjs from 'dayjs';

interface Props {
    staffDetails: StaffData
}

class StaffDetails extends Component<Props> {

    render() {
        const {staffDetails} = this.props;
        const isAvatarEmpty = !staffDetails.avatar;

        return (
            <section id={staffDetails.id} className='staff-details'>
                <div className="container">
                    <div className="staff-details_title">
                        <PageTitle title={staffDetails.fullName}/>
                    </div>
                    <div className="staff-details_wrapper">
                        <div className="staff-details_avatar">
                            <img src={isAvatarEmpty ? image : staffDetails.avatar} alt=""/>
                        </div>
                        <div className="staff-details_info">
                            <div className="staff-details_inner">
                                <span className="staff-details_inner-caption">Должность: </span>
                                <span className="staff-details_inner-description">{staffDetails.position}</span>
                            </div>
                            <div className="staff-details_inner">
                                <span className="staff-details_inner-caption">Отдел: </span>
                                <span className="staff-details_inner-description">{staffDetails.department}</span>
                            </div>
                            <div className="staff-details_inner">
                                <span className="staff-details_inner-caption">Телефон: </span>
                                <a href={`tel:${staffDetails.phoneNumber}`} target='_blank'
                                   className="staff-details_inner-description">{staffDetails.phoneNumber}</a>
                            </div>
                            <div className="staff-details_inner">
                                <span className="staff-details_inner-caption">Email: </span>
                                <a href={`mailto:${staffDetails.email}`} target='_blank'
                                   className='staff-details_inner-description'>{staffDetails.email}</a>
                            </div>
                            <div className="staff-details_inner">
                                <span className="staff-details_inner-caption">Дата рождения: </span>
                                <span
                                    className="staff-details_inner-description">{dayjs(staffDetails.birthday).format('DD.MM.YYYY')}</span>
                            </div>
                            <div className="staff-details_inner">
                                <div className="staff-details_inner-caption">Социальные сети:
                                    <a href={`${staffDetails.socialLink}`} target='_blank'
                                       className="staff-details_inner-icon">
                                        <svg width="40" height="40" viewBox="0 0 48 48" fill="none"
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
                            <div className="staff-details_inner">
                                <span className="staff-details_inner-caption">О себе: </span>
                                <span className="staff-details_inner-description">{staffDetails.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StaffDetails;