import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import CheckoutPage from './containers/Pages/CheckoutPage/chekcoutPage';
import ContactDataPage from './containers/Pages/ContactDataPage/ContactDataPage';
import Menu from "./containers/Pages/MenuPage/Menu";
import OrderPage from "./containers/Pages/OrderPage/OrderPage";


function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Menu} exact={true}/>
      <Route path="/myorder" component={OrderPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/contact-data" component={ContactDataPage} />
  </Switch>
  );
  return (
    <Layout>
      {routes}
      </Layout>
  );
}

export default App;
