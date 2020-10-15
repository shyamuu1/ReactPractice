import React from 'react';
import {Food} from '../../util/types';
import "./BurgerList.css";

const BurgerList = (props:any) => {
    
    return (
        <section className="burger-list">
            <h2>GoodBurgers</h2>
            <ul>
                {props.allFood.map((burger:Food) => (
                    <li key={burger._id}>
                        <span>{burger.name}</span>
                        <span><p>{burger.description}</p></span>
                    </li>
                ))}

            </ul>
        </section>

    );
}

export default BurgerList;