import React, {useCallback, useState, useMemo, useEffect, useReducer} from 'react';
import {Food, Order} from '../../util/types';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import OrderList from './OrderList/OrderList';
import { mealReducer } from '../../reducers/mealReducer';
import {orders} from '../../util/mockdata';
import "./Orders.css";

const Orders:React.FC = () => {
    const initialState:Order = {
        id: "",
        orders: [],
        totalPrice: ""
    };
    const [currentOrders, dispatch] = useReducer(mealReducer, initialState.orders);
    const [purchasing, setPurchasing] = useState(false);
    const [orderId, setOrderID] =  useState(initialState.id);
    const [totalPrice, setTotalPrice] = useState(0);

    //get current Order
    useEffect(() => {
        try{
            sendGetRequest('http://localhost:8080/orders/')
            .then(resData => {
                setOrderID(resData[0].id);
                dispatch({type:"SET", meals:resData[0].orders});
            });
        }catch(err){
            console.log(err.message);
        }
    }, [])

    
    let total = currentOrders.map(e => parseFloat(e.price)).reduce((p,c) => p+c, 0);

    //Submit Order
    const submitOrdersHandler = useCallback(() => {
        try{
            sendPostRequest('http://localhost:8080/orders/', currentOrders)
            .then(resData => console.log(resData));
        }catch(error){
            console.log(error.message);
        }
    }, [sendPostRequest]);

    

    //Removes Orders
    const removeOrderHandler = useCallback((FoodId:string)=> {
        console.log(orderId);
        dispatch({type:"DELETE", id:FoodId});
    }, [currentOrders]);

    //rerenders the component when currentOrders change or an order has been removed
    const orderList = useMemo(() => {
        if(currentOrders.length){
            return (
                <OrderList allorders={currentOrders} onRemoveOrder={removeOrderHandler}/>
            );
        }
        
    }, [currentOrders, removeOrderHandler])

    return(
        <div className="Orders">
            <h2>GoodBurgers</h2>
            {orderList}
            <div className="order-totals">
                <p>Total Price:${total.toFixed(2)} </p>
                <button type="submit" onClick={submitOrdersHandler} disabled>Complete Order</button>
                <button>Cancel Order</button>
            </div>
        </div>
    );
};

export default Orders;