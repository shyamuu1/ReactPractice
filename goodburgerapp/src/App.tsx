import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Menu from "./containers/Pages/MenuPage/Menu";
import OrderPage from "./containers/Pages/OrderPage/OrderPage";


function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Menu} exact={true}/>
      <Route path="/checkout" component={OrderPage} />
  </Switch>
  );
  return (
    <Layout>
      {routes}
      </Layout>
  );
}

export default App;
