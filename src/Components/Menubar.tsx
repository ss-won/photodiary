import * as React from 'react';
import { Link } from 'react-router-dom';

const Menubar: React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mypage">Mypage</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/upload">upload</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menubar;
