import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Menubar from './Menubar';
import SearchInput from './SearchInput';
import Feed from './Feed';

function App() {
    return (
        <div className="App">
            <Menubar />
            <body>
                <SearchInput />
                <Feed />
            </body>
        </div>
    );
}

export default App;
