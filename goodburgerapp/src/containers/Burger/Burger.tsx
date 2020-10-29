import React, {useState, useReducer, useEffect, useMemo, useCallback} from 'react';
import {Food, Order} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer, orderReducer } from '../../reducers/mealReducer';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import {data} from '../../util/mockdata';
import Modal from "../../lib/Modal/Modal";
import OrderModal from '../../containers/Orders/OrderModal/OrderModal';
import "./Burger.css";

const DEFUALT_ORDER:Order = {
    id: "",
    orders: [],
    totalPrice: ""
};
const Burger:React.FC = () => {
    // const [error, setError] = useState(null);
    const initalState:Food[]=[];
    const [purchasing, setPurchasing] = useState(false);
    const [orderId, setOrderId] = useState(DEFUALT_ORDER.id);
    const [orders, setOrders] = useState<Food[]>(DEFUALT_ORDER.orders);
    const [currentOrder, setCurrentOrder] = useReducer(orderReducer, DEFUALT_ORDER);
    const [currentBurgers, dispatch] = useReducer(mealReducer, initalState);

    useEffect(() => {
        try{
            sendGetRequest('http://localhost:8080/food/')
            .then(resData =>
                dispatch({type:"SET", meals:resData})
            );
            sendGetRequest('http://localhost:8080/orders/')
            .then(resData => {
                setCurrentOrder({type:"SET", id:resData[0].id, orders:resData[0].orders, totalPrice:resData[0].totalPrice});
            });
        }catch(err){
            console.log(err.message);
        }
    }, []);


    const onAddFoodHandler = useCallback((allOrders:Food) =>{
        try{
            sendPostRequest(`http://localhost:8080/orders/addFood/${currentOrder.id}`, allOrders)
            .then(resData => console.log(resData));
        }catch(err){
            console.log(err.message);
        }finally{
            setPurchasing(true);
        }
        
    }, [currentOrder]);

    const addFoodToListHandler = (food:Food) => {
        setOrders([...orders,food]);
        setPurchasing(true);
    }

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
                <BurgerList allFood={burgers} drinks={drinks} getFood={addFoodToListHandler}/>
                </div>
            );
        }
    }, [currentBurgers]);

    let orderSummary = (orders.length)?<OrderModal order={orders[0]} addOrder={onAddFoodHandler} CloseModal={purchaseCancelHandler} />:null;
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