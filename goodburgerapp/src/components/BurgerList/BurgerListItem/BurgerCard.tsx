import React from 'react';
import {Food} from '../../../util/types';
import Card from '../../../lib/Card/card';

interface Props {
    burger:Food;
    Bkey: string;
    addOrder(order:Food): void;
}
const BurgerCard:React.FC<Props> = ({Bkey, burger, addOrder}:Props) => {
    const submitHandler= (event:any) => {
        event.preventDefault();
        addOrder(burger);
    }
    return (
        <div key={Bkey}>
            <Card>
                <div className="card-header">
                    <h3>{burger.name}</h3>
                </div>
                <div className="card-body">
                    <p>{burger.decription}</p>
                    <span>Price: <strong>${Number.parseFloat(burger.price).toFixed(2)}</strong></span>
                </div>
                <div className="card__actions">
                    <button type="submit" onClick={submitHandler}>Add to Checkout</button>
                </div>
                </Card>
            </div>
    )
}

export default BurgerCard;