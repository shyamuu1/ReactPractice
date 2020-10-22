import React from 'react';
import Layout from '../../Layout/Layout';
import Burger from '../../Burger/Burger';
import Mainheader from "../../Main/Main Header/mainheader";

import './Menu.css';
const Menu = () => {
    return (
        <Layout>
            <Mainheader>
            <strong>Welcome to Good Burger, home of the Good Burger. Can I take your order?</strong>
            </Mainheader>
            <Burger />
        </Layout>
    );
}

export default Menu;