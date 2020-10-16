import React from 'react';
import Layout from './containers/Layout/Layout';
import Burger from './containers/Burger/Burger';
import Banner from "../src/containers/Banner/Banner";
function App() {
  return (
    <React.Fragment>
      <Layout>
        <Burger />
      </Layout>
    </React.Fragment> 
  );
}

export default App;
