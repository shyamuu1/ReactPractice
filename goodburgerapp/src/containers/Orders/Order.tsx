import React, {useCallback, useState, useMemo, useEffect, useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import {Order} from '../../util/types';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import Loader from '../../lib/Loader/Loader';
import OrderTable from '../Orders/OrderTable/OrderTable';
import { mealReducer, orderReducer } from '../../reducers/mealReducer';
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
    const router = useHistory();
    // const [purchasing, setPurchasing] = useState(false);
    // const [orderId, setOrderID] =  useState(initialState.id);
    //const [totalPrice, setTotalPrice] = useState(0);
    //get current Order
    useEffect(() => {
        let isMounted = true;
        try{
            if(isMounted){
                refreshList();
            }
            return () => {isMounted = false}
        }catch(err){
            console.log(err.message);
        }
    }, [])

    const refreshList = () => {
        setLoading(true);
            sendGetRequest('http://localhost:8080/orders/')
            .then((resData) => {
                setLoading(false);
                dispatch({type:"SET", meals:resData[0].orders})
                orderDispatch({type:"SET",  id:resData[0].id, orders:resData[0].orders, totalPrice:resData[0].totalPrice});
            });
    }

    
    let total = foodList.map(e => parseFloat(e.price)).reduce((p,c) => p+c, 0);

    //Submit Order
    const submitOrdersHandler = useCallback(() => {
        try{
            setLoading(true);
            sendPostRequest('http://localhost:8080/orders/', foodList)
            .then(resData => {
                setLoading(false);
                dispatch({type:"SET", meals:resData.orders});
            });
        }catch(error){
            console.log(error.message);
        }
        finally{
            if(!isLoading){
                router.push("/");
            }
        }
    }, [sendPostRequest]);

    

    //Removes Orders
    const removeOrderHandler = (FoodId:string)=> {
        try{
            setLoading(true);
            sendPostRequest(`http://localhost:8080/orders/${FoodId}`, currentOrder)
            .then((resData) => {
                setLoading(false);
                dispatch({type:"SET", meals:resData});
                dispatch({type:"DELETE", id:FoodId});
            }) 
        }catch(err){
            console.log(err.message);
        }
    };

    //rerenders the component when currentOrders change or an order has been removed
    const orderList = useMemo(() => {
            console.log(foodList, currentOrder)
            if(foodList.length){
            return (
                <OrderTable allOrders={foodList} onRemoveFoodOrder={removeOrderHandler}/>
            );
                }   
    }, [foodList, removeOrderHandler]);

    return(
        <div>
        <div className="Orders">
            <h2>GoodBurgers</h2>
            {(isLoading)?<Loader />:orderList}
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