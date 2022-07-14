import {Component} from 'react';

interface Props {
    title: string
}

class PageTitle extends Component<Props> {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default PageTitle;