import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from "../Pages/MenuPage/Menu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import OrderModal from "../Orders/OrderModal/OrderModal";

const Pages:React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Menu} exact={true}/>
                <Route path="/orders" component = {OrderPage} />
                <Route path="/modal" component={OrderModal} />
            </Switch>
        </Router>
    );
}

export default Pages;