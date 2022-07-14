import {PureComponent, ReactNode} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Staff from '@components/Staff/Staff';
import {State} from '@tsTypes/state';
import {StaffData} from '@tsTypes/staff-data';
import EmptySearchCaption from '@components/EmptySearchCaption';

const mapStateToProps = ({staff, searchQuery}: State) => ({staff, searchQuery});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class StaffList extends PureComponent<PropsFromRedux> {

    getSearchResult() {
        const searchParams: string[] = [
            'fullName',
            'phoneNumber',
            'position',
            'department',
            'email'
        ];

        const {searchQuery, staff} = this.props;

        if (searchQuery !== '') {
            return staff.filter((item: StaffData | any) => {
                return searchParams.some((parameter: string) => {
                    return (
                        item[parameter].toString().toLowerCase()
                            .indexOf(searchQuery.toLowerCase()) > -1
                    );
                })
            })
        } else {
            return staff
        }
    }


    render(): ReactNode {
        const isSearchResultEmpty = !this.getSearchResult().length;

        if (isSearchResultEmpty) {
            return <EmptySearchCaption/>
        }

        return (
            <div className='staff'>
                <ul className='staff_list'>
                    {this.getSearchResult().map((el) => <Staff staff={el} key={el.id}/>)}
                </ul>
            </div>
        );
    }
}

export {StaffList};
export default connector(StaffList);
