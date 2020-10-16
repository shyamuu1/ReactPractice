import React from 'react';
import BurgerCard from './BurgerListItem/BurgerCard';
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
                {allFood.map((food:Food) => (
                    <BurgerCard Bkey={food.id} burger={food} />   
                ))}
            </ul>
        </section>

    );
}

export default BurgerList;