import React, {FC} from 'react';
import Headerlink from "./NavLinks/Headerlink";
import './Header.css';

const header:FC = () => {
    return (
        <header className="header">
                <h2>Good Burger</h2>
              
                <ul className="header-container">
                    <Headerlink link="/" >Menu</Headerlink>
                    <Headerlink link="/myorder">Checkout</Headerlink>
                </ul>
                
        </header>
    );
}

export default header;