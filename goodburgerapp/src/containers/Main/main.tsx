import React, {FC} from 'react';
import Burger from '../Burger/Burger';
import Mainheader from './Main Header/mainheader';
import './main.css';

const main = () => {
    return (
        <main className="main">
            <Mainheader />
            <Burger />
        </main>
    );
}
export default main;