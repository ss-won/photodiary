import React from 'react';
import SearchInput from './SearchInput';
import Feed from './Feed';
import Menubar from './Menubar';
import Root from './routes/root';

function App() {
    return (
        <Root>
            <div className="App">
                <Menubar />
                <body>
                    <SearchInput />
                    <Feed />
                </body>
            </div>
        </Root>
    );
}

export default App;
