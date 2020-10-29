import React, {useState} from 'react';
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
                    <BurgerCard Bkey={food.id} burger={food} 
                    addFood={() => {getFood(food)}}/>  
                ))}
            </ul>
            <div>
                <h2>Drinks</h2>
                <ul>
                    {drinks.map((drink:Food) => (
                        <BurgerCard Bkey={drink.id} burger={drink} addFood={() => {getFood(drink)}}/>
                    ))}
                </ul>
            </div>
        </section>

    );
}

export default BurgerList;