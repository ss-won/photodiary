import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import Register from '../pages/Register';
import Upload from '../pages/Upload';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/mypage" component={Mypage} />
                <Route path="/upload" component={Upload} />
                <Route
                    render={() => (
                        <div>
                            <b>404</b> 요청하신 페이지를 찾을 수 없습니다.
                        </div>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
