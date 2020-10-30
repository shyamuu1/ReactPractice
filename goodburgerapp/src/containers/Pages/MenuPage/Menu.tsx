import React from 'react';
import Burger from '../../Burger/Burger';
import Mainheader from "../../Main/Main Header/mainheader";
import './Menu.css';

const Menu = () => {
    return (
        <div>
            <Mainheader>
            <strong>Welcome to Good Burger, home of the Good Burger. Can I take your order?</strong>
            </Mainheader>
            <Burger />
        </div>
    );
}

export default Menu;