import React,{useState} from 'react';
import {Food} from '../../../util/types';
import Card from "../../../lib/Card/card";
import './OrderList.css';
interface Props {
    allorders:Food[];
}

const OrderList:React.FC<Props> = ({allorders}:Props) => {
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
                </Card>
                </li>
            ))}
        </ul>
    );
}

export default OrderList;