import {Component, ReactNode} from "react";

class EmptySearchCaption extends Component {
    render(): ReactNode {
        return (
            <div className="empty-search-caption">
                <h2>К сожалению мы никого не нашли :(</h2>
            </div>
        )
    }
}

export default EmptySearchCaption;