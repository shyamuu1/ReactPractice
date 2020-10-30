import React from 'react';
import BurgerCard from './BurgerListItem/BurgerCard';
import {Food} from '../../util/types';
import "./BurgerList.css";


interface Props {
    allFood:Food[];
    drinks:Food[];
    getFood: (orders:Food) => void;
}

const BurgerList = ({allFood, drinks, getFood}:Props) => {
    return (
        <section className="burger-list">
            <h2>GoodBurgers</h2>
            <ul>
                {allFood.map((food:Food) => (
                    <li key={food.id} onClick={()=>{getFood(food)}}>
                    <BurgerCard burger={food} />
                    </li>  
                ))}
            </ul>
            <div>
                <h2>Drinks</h2>
                <ul>
                    {drinks.map((drink:Food) => (
                        <li key={drink.id} onClick={()=>{getFood(drink)}}>
                        <BurgerCard  burger={drink} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}

export default BurgerList;