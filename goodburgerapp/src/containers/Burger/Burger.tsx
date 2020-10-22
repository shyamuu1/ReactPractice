import React, {useState, useReducer, useEffect, useMemo} from 'react';
import {Food} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer } from '../../reducers/mealReducer';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import "./Burger.css";


const Burger:React.FC = () => {
    const [error, setError] = useState(null);
    const initialState:Food[] = [];
    const [currentOrders, setOrders] = useState<Food[]>(initialState);
    const [currentBurgers, dispatch] = useReducer(mealReducer, initialState);
    useEffect(() => {
        const fetchData = async() => {
            fetch('http://localhost:8080/food/', {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            })
            .then(res => res.json())
            .then(resData => dispatch({type:"SET", meals:resData}))
            .catch(err => {
                setError(err.message);
            })
        };
        fetchData();
    }, []);

    const onAddFoodHandler = (orders:Food[]) => {
        setOrders(orders);
        if(currentOrders.length){
            console.log(currentOrders)
        }
    }

    const foods = useMemo(() => {
        if(currentBurgers.length){
            const drinks = currentBurgers.filter(f => f.foodType === "Beverage");
            const burgers = currentBurgers.filter(f => f.foodType === "Burger");
            return (
                <div>
                <BurgerList addorders={onAddFoodHandler} allFood={burgers} drinks={drinks}/>
                </div>
            );
        }
        
    }, [currentBurgers]);

    return(
            <div className="Burger">
            {foods}
            </div>
    );
}

export default Burger;