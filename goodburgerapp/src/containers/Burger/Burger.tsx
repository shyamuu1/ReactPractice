import React, {useState, useReducer, useEffect, useMemo, useCallback} from 'react';
import {Food} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer } from '../../reducers/mealReducer';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import OrderModal from '../../containers/Orders/OrderModal/OrderModal';
import "./Burger.css";


const Burger:React.FC = () => {
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const initialState:Food[] = [];
    const [orders, setOrders] = useState<Food[]>(initialState);
    const [currentBurgers, dispatch] = useReducer(mealReducer, initialState);
    console.log(orders, show);

    useEffect(() => {
        try{
            sendGetRequest('http://localhost:8080/food/')
            .then(resData =>
                dispatch({type:"SET", meals:resData})
            );
        }catch(err){
            console.log(err.message);
        }
    }, []);

    const onAddFoodHandler = (allOrders:Food) =>{
        setOrders([...orders, allOrders]);
        setShow(true);
    };
    
    let orderSummary = (show)?<OrderModal show={show} currentOrder={orders[0]} />:null;

    const foods = useMemo(() => {
        if(currentBurgers.length){
            const drinks = currentBurgers.filter(f => f.foodType === "Beverage");
            const burgers = currentBurgers.filter(f => f.foodType === "Burger");
            return (
                <div>
                <BurgerList allFood={burgers} drinks={drinks} addOrder={onAddFoodHandler}/>
                </div>
            );
        }
        
    }, [currentBurgers]);

    return(
            <div className="Burger">
                {orderSummary}
            {foods}
            </div>
    );
}

export default Burger;