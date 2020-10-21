import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Menu from "../Pages/MenuPage/Menu";
const Pages:React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Menu} exact={true}/>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Pages;