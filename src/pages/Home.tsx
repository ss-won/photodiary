import * as React from 'react';
import Feed from '../Components/Feed';
import Menubar from '../Components/Menubar';
import SearchInput from '../Components/SearchInput';

function Home() {
    return (
        <div>
            <h2>HOME</h2>
            <Menubar />
            <SearchInput />
            <Feed />
        </div>
    );
}
export default Home;
