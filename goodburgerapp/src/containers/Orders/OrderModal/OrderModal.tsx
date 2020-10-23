import React, {useState} from 'react';
import Modal from "../../../lib/Modal/Modal";
import {Food} from "../../../util/types";
import './OrderModal.css';
interface Props {
    show:Boolean;
    currentOrder:Food;
}
const OrderModal:React.FC<Props> = ({show, currentOrder}:Props) => {
    const [open, setOpen] = useState<Boolean>(show);
    const [order, setOrder] = useState<Food>(currentOrder);
    const [bag, fillBag] = useState<Food[]>([]);

    console.log(bag);

    const handleClick = (event:any) => {
        event.preventDefault();
        fillBag([...bag, currentOrder]);
        setOpen(false);

    }

    return (
        <Modal show={open}>
        <div className="orderModal-container">
                <div className="modal-header">
                <h2>Order Details</h2>
                <span><button type="button" onClick={() => {setOpen(false)}}>&#10005;</button></span>
                </div>
                <div className="image"></div>
                <div className="card-body">
                    <p><strong>Title:{order.name}</strong></p>
                    <p>Description:{order.decription}</p>
                    <p>Price:{order.price}</p>
                </div>
                <div className="card-actions">
                    <button type="submit" onClick={handleClick}>Add to Checkout</button>
                </div>
        </div>
        </Modal>
    )
}

export default OrderModal;