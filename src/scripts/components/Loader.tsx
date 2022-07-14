import {Component} from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="loader_ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loader;