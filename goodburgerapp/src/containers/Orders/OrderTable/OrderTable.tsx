import React, {useState} from 'react';
import { Food } from '../../../util/types';
import TrashBin from "../../../components/Icons/Icon";
import "./OrderTable.css";

interface Props{
    allOrders:Food[];
    onRemoveFoodOrder: (id:string) => void;
}

const OrderTable = React.memo(({allOrders, onRemoveFoodOrder}:Props) => {
    const [currentOrders, setOrders] = useState<Food[]>(allOrders);
    if(allOrders.length !== currentOrders.length){
        setOrders(allOrders);
    }
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
                    {currentOrders && currentOrders.map(row => 
                        <tr className="order-rows" key={row.id}>
                            <td>1</td>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td onClick={() => {
                                onRemoveFoodOrder(row.id);
                            }}><button className="order-delete-btn" ><TrashBin/></button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}
);

export default OrderTable;