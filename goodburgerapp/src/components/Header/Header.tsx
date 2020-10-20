import React, {FC} from 'react';
import './Header.css';

const header:FC = () => {
    return (
        <header className="header">
                <h2>Good Burger</h2>
              
                <ul className="header-container">
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Checkout</a></li>
                </ul>
                
        </header>
    );
}

export default header;