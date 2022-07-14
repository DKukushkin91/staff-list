import React from "react";
import {Component, ReactNode, Fragment} from "react";

interface Props {
    title: string,
    id: string
}

class AccordionCaption extends Component<Props> {
    render(): ReactNode {
        return (
            <Fragment>
                <input id={`accordionRadio${this.props.id}`} className="admin_accordion-radio-button" type="checkbox"
                       name="accordionCaption"/>
                <label htmlFor={`accordionRadio${this.props.id}`} className="admin_accordion-caption">
                    <h5>{this.props.title}</h5>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"/>
                    </svg>
                </label>
            </Fragment>
        )
    }
}

export default AccordionCaption;