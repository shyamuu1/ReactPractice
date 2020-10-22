import React, {useState} from 'react';
import BurgerCard from './BurgerListItem/BurgerCard';
import {Food} from '../../util/types';
import "./BurgerList.css";

interface Props {
    allFood:Food[];
    drinks:Food[];
    addorders:(allorders:Food[]) => void;
}

const BurgerList = ({allFood, addorders, drinks}:Props) => {
    //let header = (allFood.length && allFood[0].foodType === "Burger")?<h2>GoodBurgers</h2>:<h2>Drinks</h2>;
    const [orders, setOrders] = useState<Food[]>([]);
    const addOrderToList = (order:Food) => {
        setOrders([...orders, order]);
        let currOrders = [...orders, order];
        addorders(currOrders);
    }
    return (
        <section className="burger-list">
            <h2>GoodBurgers</h2>
            <ul>
                {allFood.map((food:Food) => (
                    <BurgerCard Bkey={food.id} burger={food} addOrder={addOrderToList}/>  
                ))}
            </ul>
            <div>
                <h2>Drinks</h2>
                <ul>
                    {drinks.map((drink:Food) => (
                        <BurgerCard Bkey={drink.id} burger={drink} addOrder={addOrderToList} />
                    ))}
                </ul>
            </div>
        </section>

    );
}

export default BurgerList;