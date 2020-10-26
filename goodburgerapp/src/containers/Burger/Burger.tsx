import React, {useState, useReducer, useEffect, useMemo, useCallback} from 'react';
import {Food} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer } from '../../reducers/mealReducer';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import {data} from '../../util/mockdata';
import Modal from "../../lib/Modal/Modal";
import OrderModal from '../../containers/Orders/OrderModal/OrderModal';
import "./Burger.css";


const Burger:React.FC = () => {
    const [error, setError] = useState(null);
    const [purchasing, setPurchasing] = useState(false);
    const initialState:Food[] = [];
    const [orders, setOrders] = useState<Food[]>(initialState);
    const [currentBurgers, dispatch] = useReducer(mealReducer, data);
    console.log(orders, purchasing);

    // useEffect(() => {
    //     try{
    //         sendGetRequest('http://localhost:8080/food/')
    //         .then(resData =>
    //             dispatch({type:"SET", meals:resData})
    //         );
    //     }catch(err){
    //         console.log(err.message);
    //     }
    // }, []);

    const onAddFoodHandler = (allOrders:Food) =>{
        setOrders([...orders, allOrders]);
        setPurchasing(true);
    };

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }
    

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

    let orderSummary = (orders.length)?<OrderModal currentOrder={orders[0]} CloseModal={purchaseCancelHandler} />:null;
    return(
            <div className="Burger">
                <Modal show={purchasing}>
                {orderSummary}
                </Modal>
            {foods}
            </div>
    );
}

export default Burger;