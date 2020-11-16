import React, {useCallback, useState, useMemo, useEffect, useReducer} from 'react';
import Btn from "../../lib/Button/Button";
import BackDrop from "../../lib/BackDrop/Backdrop";
import Modal from "../../lib/Modal/Modal";
import Login from "../../components/LoginForm/LoginForm";
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
    const [authenticating, setAuthenticating] = useState<Boolean>(false);
    const [guestId, setGuestId] = useState("");
    const [foodList, dispatch] = useReducer(mealReducer, initialState.orders);
    const [currentOrder,orderDispatch] = useReducer(orderReducer, initialState);
    const [isLoading, setLoading] = useState<Boolean>(false);
    const router = useHistory();

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
    },[])


    const refreshList = () => {
        setLoading(true);
            sendGetRequest('http://localhost:8080/customers/')
            .then((resData) => {
                setLoading(false);
                setGuestId(resData.customerId);
                dispatch({type:"SET", meals:resData.myOrder.orders})
                orderDispatch({type:"SET",  id:resData.myOrder.id, orders:resData.myOrder.orders, totalPrice:resData.myOrder.totalPrice});
            });
    }

    
    let total = foodList.map(e => parseFloat(e.price)).reduce((p,c) => p+c, 0);

    const submit = () => {
        try{
            setLoading(true);
            sendPostRequest('http://localhost:8080/orders/submit', currentOrder)
            .then(resData => {
                setLoading(false);
                dispatch({type:"SET", meals:resData.orders});
                orderDispatch({type:"SET", id:resData.id, orders:resData.orders, totalPrice:resData.totalPrice});
            })
        }catch(err){
            console.log(err.message);
        }
        finally{
            if(!isLoading){
                router.push("/", currentOrder);
            }
        }
    }


    const cancelBtnHandler =() => {
        if(!isLoading){
            router.push("/");
        }
    }

    const LoginHandler = () => {
        setAuthenticating(true);
        router.push("/contact-data");
    }

    const LoginCancelHandler = () => {
        setAuthenticating(false);
    }

    //Removes Orders
    const removeOrderHandler = useCallback((FoodId:string)=> {
        try{
            setLoading(true);
            sendPostRequest(`http://localhost:8080/customers/${FoodId}`, guestId)
            .then((resData) => {
                setLoading(false);
                dispatch({type:"SET", meals:resData});
                dispatch({type:"DELETE", id:FoodId});
            }) 
        }catch(err){
            console.log(err.message);
        }
    },[guestId]);

    //rerenders the component when currentOrders change or an order has been removed
    const orderList = useMemo(() => {
            if(foodList.length){
            return (
                <OrderTable allOrders={foodList} onRemoveFoodOrder={removeOrderHandler}/>
            );
                }   
    }, [foodList, removeOrderHandler]);

    const loginForm = <Modal show={authenticating}><Login login={LoginHandler} cancel={LoginCancelHandler}/></Modal>


    return(
        <div>
            <BackDrop isVisible={authenticating} clicked={LoginCancelHandler}/>
            {loginForm}
        <div className="Orders">
            <h2>GoodBurgers</h2>
            {(isLoading)?<Loader />:orderList}
            <p>Total Price: ${total.toFixed(2)} </p>
            </div>       
                <div className="order-btns">
                <Btn clicked={()=>{setAuthenticating(true)}}>Complete Order</Btn>
                <Btn clicked={cancelBtnHandler}>Cancel Order</Btn>
                </div>
        </div>
    );
};

export default Orders;