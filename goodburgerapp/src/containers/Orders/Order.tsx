import React, {useCallback, useState, useMemo} from 'react';
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

    //Adds Orders
    const submitOrdersHandler = useCallback(() => {
        try{
            sendPostRequest('http://localhost:8080/orders/', currentOrders)
            .then(resData => console.log(resData));
        }catch(error){
            console.log(error.message);
        }
    }, [sendPostRequest]);

    //get all Orders
    
    //Removes Orders
    const removeOrderHandler = useCallback((id:string)=> {
        setCurrentOrders(currentOrders.filter(order => order.id !== id));
    }, []);

    //rerenders the component when currentOrders change or an order has been removed
    const orderList = useMemo(() => {
        return (
            <OrderList allorders={currentOrders} onRemoveOrder={removeOrderHandler}/>
        );
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