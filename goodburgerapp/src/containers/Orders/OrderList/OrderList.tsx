import React,{useState} from 'react';
import {Food} from '../../../util/types';
import Card from "../../../lib/Card/card";
import './OrderList.css';
interface Props {
    allorders:Food[];
    onRemoveOrder: (id:string) => void;
}

const OrderList:React.FC<Props> = ({allorders, onRemoveOrder}:Props) => {
    const [currentOrders, setCurrentOrders] = useState(allorders);
    
    return (
        <ul className="order-list">
            {currentOrders.map((order) => (
                <li key={order.id}>
                <Card>
                    <div className="order-quantity">
                       quantity: 1
                    </div>
                    <div className="order-title">
                        {order.name}
                    </div>
                    <div className="order-price">
                        price: ${Number.parseFloat(order.price).toFixed(2)}
                    </div>
                    <div className="order-del">
                        <button onClick={()=>{onRemoveOrder(order.id)}}><i className="fa fa-trash-o"></i></button>
                    </div>
                </Card>
                </li>
            ))}
        </ul>
    );
}

export default OrderList;