import {Component, ReactNode} from "react";
import {StaffData} from "@tsTypes/staff-data";
import AccordionCaption from "@components/Admin/AccordionCaption";
import AccordionForm from "@components/Admin/AccordionForm";

interface Props {
    staff: StaffData
}

class StaffItem extends Component<Props> {
    render(): ReactNode {
        return (
            <div className="admin_staff-item admin_accordion">
                <AccordionCaption title={this.props.staff.fullName} id={this.props.staff.id}/>
                <AccordionForm staff={this.props.staff}/>
            </div>
        )
    }
}

export default StaffItem;