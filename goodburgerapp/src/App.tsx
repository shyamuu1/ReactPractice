import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import CheckoutPage from './containers/Pages/CheckoutPage/chekcoutPage';
import Menu from "./containers/Pages/MenuPage/Menu";
import OrderPage from "./containers/Pages/OrderPage/OrderPage";


function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Menu} exact={true}/>
      <Route path="/myorder" component={OrderPage} />
      <Route path="/checkout" component={CheckoutPage} />
  </Switch>
  );
  return (
    <Layout>
      {routes}
      </Layout>
  );
}

export default App;
