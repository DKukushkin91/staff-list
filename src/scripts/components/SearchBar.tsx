import {Component, ReactNode} from 'react';
import {searchStaff} from '@store/actions';
import {State} from '@tsTypes/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({searchQuery}: State) => ({searchQuery});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class SearchBar extends Component<PropsFromRedux> {

    componentWillUnmount() {
        this.props.dispatch(searchStaff(''));
    }

    handleChangeSearchBarValue(evt: any) {
        this.props.dispatch(searchStaff(evt.target.value.toLowerCase()));
    }

    render(): ReactNode {
        return (
            <div className='search-bar'>
                <input
                    className='search-bar_input'
                    type='search'
                    placeholder='Поиск сотрудников'
                    onChange={((evt) => this.handleChangeSearchBarValue(evt))}
                />
            </div>
        );
    }
}

export {SearchBar};
export default connector(SearchBar);