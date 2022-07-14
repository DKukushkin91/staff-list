import {Component, ReactNode} from 'react';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import PageTitle from '@components/PageTitle';
import StaffList from '@components/Staff/StaffList';

class Main extends Component {
    render(): ReactNode {
        return (
            <div className='fix-content'>
                <Header/>
                <div className="container">
                    <main className="main">
                        <div className="main_title">
                            <PageTitle title={'Список сотрудников'}/>
                        </div>
                        <SearchBar/>
                        <StaffList/>
                    </main>
                </div>
            </div>
        );
    }
}

export default Main;