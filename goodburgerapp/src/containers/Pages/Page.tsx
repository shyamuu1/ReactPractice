import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
const Pages:React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Layout} exact={true}/>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Pages;