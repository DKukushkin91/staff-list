import {Component, ReactNode} from "react";
import Tab from "@components/Admin/Tab";

class Tabs extends Component {
    render(): ReactNode {
        return (
            <div className="admin_tabs">
                <Tab/>
            </div>
        )
    }
}

export default Tabs;