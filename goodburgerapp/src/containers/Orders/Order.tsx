import React, {useCallback, useState, useMemo, useEffect, useReducer} from 'react';
import {Food, Order} from '../../util/types';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import OrderList from './OrderList/OrderList';
import { mealReducer, orderReducer } from '../../reducers/mealReducer';
import {orders} from '../../util/mockdata';
import "./Orders.css";

const initialState:Order = {
    id: "",
    orders: [],
    totalPrice: ""
};
const Orders:React.FC = () => {
    const [currentOrders, dispatch] = useReducer(mealReducer, initialState.orders);
    const [order,orderDispatch] = useReducer(orderReducer, initialState);
    const [purchasing, setPurchasing] = useState(false);
    const [orderId, setOrderID] =  useState(initialState.id);
    //const [totalPrice, setTotalPrice] = useState(0);
    //get current Order
    useEffect(() => {
        try{
            sendGetRequest('http://localhost:8080/orders/')
            .then(resData => {
                dispatch({type:"SET", meals:resData[0].orders});
                orderDispatch({type:"SET",  id:resData[0].id, orders:resData[0].orders, totalPrice:resData[0].totalPrice});
            });
        }catch(err){
            console.log(err.message);
        }
    }, [])

    
    let total = currentOrders.map(e => parseFloat(e.price)).reduce((p,c) => p+c, 0);

    //Submit Order
    const submitOrdersHandler = useCallback(() => {
        try{
            sendPostRequest('http://localhost:8080/orders/', orders)
            .then(resData => console.log(resData));
        }catch(error){
            console.log(error.message);
        }
    }, [sendPostRequest]);

    

    //Removes Orders
    const removeOrderHandler = useCallback((FoodId:string)=> {
        try{
            sendPostRequest(`http://localhost:8080/orders/${FoodId}`, order)
            .then(resData => dispatch({type:"SET", meals:resData.orders}));
        }catch(err){
            console.log(err.message);
        }
        dispatch({type:"DELETE", id:FoodId});
    }, [order,  sendPostRequest]);

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
                <button type="submit" onClick={submitOrdersHandler}>Complete Order</button>
                <button>Cancel Order</button>
            </div>
        </div>
    );
};

export default Orders;