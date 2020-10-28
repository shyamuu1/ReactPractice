import React, {useState} from 'react';
import {orders} from '../../../util/mockdata';
import { Food } from '../../../util/types';
import TrashBin from "../../../components/Icons/Icon";
import "./OrderTable.css";

interface Props{
    allOrders:Food[];
    onRemoveFoodOrder: (id:string) => void;
}

const OrderTable = ({allOrders, onRemoveFoodOrder}:Props) => {
    const [currentOrders, setOrders] = useState<Food[]>(orders);

    

    return (
        <div className="table-container">
            <table className="order-table">
                <thead>
                <tr className="order-header-rows">
                <td>Quantity</td>
                <td>Order Name</td>
                <td>Price</td>
                <td>&nbsp;</td>
                </tr>
                </thead>
                <tbody>
                    {currentOrders.map(row => 
                        <tr className="order-rows" key={row.id}>
                            <td>1</td>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td onClick={()=>{onRemoveFoodOrder(row.id)}}><TrashBin/></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;