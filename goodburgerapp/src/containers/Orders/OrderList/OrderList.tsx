import React,{useState} from 'react';
import {Food} from '../../../util/types';
import './OrderList.css';
import TrashBin from '../../../components/Icons/Icon';

interface Props {
    allOrders:Food[];
    onRemoveFoodOrder: (id:string) => void;
}

const OrderList:React.FC<Props> = ({allOrders, onRemoveFoodOrder}:Props) => {
    const [currentOrders, setCurrentOrders] = useState(allOrders);
    console.log(allOrders)
    return (
        <ul className="order-list">
            {currentOrders.map((order) => (
                <li key={order.id}>
                    <div className="order-card">
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
                        <button onClick={()=>{onRemoveFoodOrder(order.id)}}><TrashBin/></button>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default OrderList;