import React from 'react';
import BurgerCard from './BurgerListItem/BurgerCard';
import {Food} from '../../util/types';
import "./BurgerList.css";

interface Props {
    allFood:Food[];
}

const BurgerList = ({allFood}:Props) => {
    let header = (allFood.length && allFood[0].foodType === "Burger")?<h2>GoodBurgers</h2>:<h2>Drinks</h2>;
    return (
        <section className="burger-list">
            {header}
            <ul>
                {allFood.map((food:Food) => (
                    <BurgerCard Bkey={food.id} burger={food} />   
                ))}
            </ul>
        </section>

    );
}

export default BurgerList;