import React, {useCallback, useState} from 'react';
import {Food} from '../../util/types';
import {sendPostRequest, sendGetRequest} from "../../util/http-service";
import OrderList from './OrderList/OrderList';
import {orders} from '../../util/mockdata';
import "./Orders.css";

const Orders:React.FC = () => {
    const [currentOrders, setCurrentOrders] = useState(orders);
    const [purchasing, setPurchasing] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    
    let total = currentOrders.map(e => parseFloat(e.price)).reduce((p,c) => p+c, 0);
    //update orderHandler
    //remove orderHandler
    const submitOrdersHandler = useCallback(() => {
        try{
            sendPostRequest('http://localhost:8080/orders/', currentOrders)
            .then(resData => console.log(resData));
        }catch(error){
            console.log(error.message);
        }
    }, [currentOrders]);

    return(
        <div className="Orders">
            <h2>GoodBurgers</h2>
            <OrderList allorders={currentOrders} />
            <div className="order-totals">
                <p>Total Price:${total.toFixed(2)} </p>
                <button type="submit" onClick={submitOrdersHandler}>Complete Order</button>
                <button>Cancel Order</button>
            </div>
        </div>
    );
};

export default Orders;