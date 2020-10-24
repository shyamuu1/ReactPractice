import React from 'react';
import {Food} from '../../../util/types';
import Card from "../../../lib/Card/card";
import './OrderList.css';
interface Props {
    allorders:Food[];
}

const OrderList:React.FC<Props> = ({allorders}:Props) => {
    const orders = [1,2,3,4];
    console.log(allorders);
    return (
        <ul className="order-list">
            {orders.map((idx, e) => (
                <li key={idx}>
                <Card>{e}</Card>
                </li>
            ))}
        </ul>
    );
}

export default OrderList;