import React, {useCallback, useState, useMemo, useEffect, useReducer} from 'react';
import {Food, Order} from '../../util/types';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import Loader from '../../lib/Loader/Loader';
import OrderTable from '../Orders/OrderTable/OrderTable';
import { mealReducer, orderReducer } from '../../reducers/mealReducer';
import {orders} from '../../util/mockdata';
import "./Orders.css";

const initialState:Order = {
    id: "",
    orders: [],
    totalPrice: ""
};
const Orders:React.FC = () => {
    const [foodList, dispatch] = useReducer(mealReducer, initialState.orders);
    const [currentOrder,orderDispatch] = useReducer(orderReducer, initialState);
    const [isLoading, setLoading] = useState<Boolean>(false);
    // const [purchasing, setPurchasing] = useState(false);
    // const [orderId, setOrderID] =  useState(initialState.id);
    //const [totalPrice, setTotalPrice] = useState(0);
    //get current Order
    useEffect(() => {
        try{
            setLoading(true);
            fetch('http://localhost:8080/orders/', {
                method:"GET",
                headers: {"Content-Type":"application/json"}
            })
            .then(res => res.json())
            .then((resData) => {
                setLoading(false);
                dispatch({type:"SET", meals:resData[0].orders})
                orderDispatch({type:"SET",  id:resData[0].id, orders:resData[0].orders, totalPrice:resData[0].totalPrice});
            })
            
            // sendGetRequest('http://localhost:8080/orders/')
            // .then(resData => {
            //     dispatch({type:"SET", meals:resData[0].orders});
            //     orderDispatch({type:"SET",  id:resData[0].id, orders:resData[0].orders, totalPrice:resData[0].totalPrice});
            // });
        }catch(err){
            console.log(err.message);
        }
    }, [])

    
    let total = foodList.map(e => parseFloat(e.price)).reduce((p,c) => p+c, 0);

    //Submit Order
    const submitOrdersHandler = useCallback(() => {
        try{
            sendPostRequest('http://localhost:8080/orders/', currentOrder)
            .then(resData => dispatch({type:"SET", meals:resData.orders}));
        }catch(error){
            console.log(error.message);
        }
    }, [sendPostRequest]);

    

    //Removes Orders
    const removeOrderHandler = useCallback((FoodId:string)=> {
        try{
            setLoading(true);
            fetch(`http://localhost:8080/orders/${FoodId}`, {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(currentOrder)
            })
            .then(res => res.json())
            .then((resData) => {
                setLoading(false);
                dispatch({type:"SET", meals:resData});
                dispatch({type:"DELETE", id:FoodId});
            }) 
        }catch(err){
            console.log(err.message);
        }
    }, [currentOrder,  foodList]);

    let orderTable = null;
    if(foodList.length){
        orderTable = <OrderTable allOrders={foodList} onRemoveFoodOrder={removeOrderHandler}/>;
    }
    if(isLoading){
        orderTable = <Loader />;
    }

    //rerenders the component when currentOrders change or an order has been removed
    const orderList = useMemo(() => {
        if(foodList.length && !isLoading){
            return (
                // <OrderList allorders={currentOrders} onRemoveOrder={removeOrderHandler}/>
                <OrderTable allOrders={foodList} onRemoveFoodOrder={removeOrderHandler}/>
            );
        }
        
    }, [foodList, removeOrderHandler])

    return(
        <div>
        <div className="Orders">
            <h2>GoodBurgers</h2>
            {orderList}
            <p>Total Price: ${total.toFixed(2)} </p>
            </div>       
                <div className="order-btns">
                <button type="submit" onClick={submitOrdersHandler}>Complete Order</button>
                <button>Cancel Order</button>
                </div>
        </div>
    );
};

export default Orders;