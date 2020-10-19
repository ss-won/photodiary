import * as React from 'react';
import Feed from '../Feed';
import Menubar from '../Menubar';
import SearchInput from '../SearchInput';

const Home: React.FC = () => {
    return (
        <div>
            <h2>HOME</h2>
            <Menubar />
            <SearchInput />
            <Feed />
        </div>
    );
};
export default Home;
