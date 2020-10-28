import React, {useState} from 'react';
import {Food} from "../../../util/types";
import './OrderModal.css';
interface Props {
    currentOrder:Food;
    CloseModal:() => void;
}
const OrderModal:React.FC<Props> = ({currentOrder, CloseModal}:Props) => {
    const [order, setOrder] = useState<Food>(currentOrder);
    const [checkout, addToCheckout] = useState<Food[]>([]);

    console.log(checkout);

    const checkoutClickHandler = (event:any) => {
        event.preventDefault();
        addToCheckout([...checkout, currentOrder]);
        CloseModal();

    }

    return (
      
        <div className="orderModal-container">
                <div className="modal-header">
                <h2>Order Details</h2>
                <span><button type="button" onClick={CloseModal}>&#10005;</button></span>
                </div>
                <div className="image"></div>
                <div className="modal-body">
                    <p><strong>Title:{order.name}</strong></p>
                    <p>Description:{order.decription}</p>
                    <p>Price:{order.price}</p>
                    <p>quantity</p>
                </div>
                <div className="modal-actions">
                    <button type="submit" onClick={checkoutClickHandler}>Add to Checkout</button>
                </div>
        </div>
        
    );
};

export default OrderModal;