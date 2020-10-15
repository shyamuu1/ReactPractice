import React from 'react';
import {Food} from '../../util/types';
import "./BurgerList.css";

interface Props {
    allFood:Food[];
}

const BurgerList = ({allFood}:Props) => {
    return (
        <section className="burger-list">
            <h2>GoodBurgers</h2>
            <ul>
                {allFood.map((burger:Food) => (
                    <li key={burger.id}>
                        <span>{burger.name}</span>
                        <span><p>{burger.description}</p></span>
                    </li>
                ))}

            </ul>
        </section>

    );
}

export default BurgerList;