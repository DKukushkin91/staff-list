import {Component, ReactNode} from "react";
import {connect, ConnectedProps} from "react-redux";
import {State} from '@tsTypes/state';
import StaffItem from "@components/Admin/StaffItem";

const mapStateToProps = ({staff}: State) => ({staff});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class StaffList extends Component<PropsFromRedux> {
    render(): ReactNode {
        const isStaffListEmpty = !this.props.staff.length;

        if (isStaffListEmpty) {
            return (
                <div className="admin_staff-list">
                    <h2>Добавьте нового сотрудника</h2>
                </div>
            )
        }
        return (
            <div className="admin_staff-list">
                {this.props.staff.map(item =>
                    <StaffItem staff={item} key={item.id}/>
                )}
            </div>
        )
    }
}

export {StaffList};
export default connector(StaffList);