import React, {FC} from 'react';
import Banner from '../../containers/Banner/Banner';
import './Header.css';

const header:FC = () => {
    return (
        <header className="Header">
            <nav>
                <h2>Good Burger</h2>
            </nav>
        </header>
    );
}

export default header;