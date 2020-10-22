import React from 'react';
import {Food} from '../../../util/types';
import Card from "../../../lib/Card/card";

interface Props {
    allorders:Food[];
}

const orderList:React.FC<Props> = ({allorders}:Props) => {
    const orders = [1,2,3,4];
    console.log(allorders);
    return (
        <ul className="order-list">
            {orders.map((e) => (
                <Card>{e}</Card>
            ))}
        </ul>
    );
}

export default orderList;