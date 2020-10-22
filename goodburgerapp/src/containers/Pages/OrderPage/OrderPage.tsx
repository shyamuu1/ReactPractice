import React from 'react';
import Order from '../../Orders/Order';
import Layout from '../../Layout/Layout';
import Mainheader from '../../Main/Main Header/mainheader';
import './OrderPage.css';

const OrderPage = () => {
    return (
        <Layout>
            <Mainheader>Your Orders</Mainheader>
            <Order />
        </Layout>
    );
}

export default OrderPage;