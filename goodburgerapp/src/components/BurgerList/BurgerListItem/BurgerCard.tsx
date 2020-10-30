import React, {useState} from 'react';
import {Food} from '../../../util/types';
import Card from '../../../lib/Card/card';
import OrderModal from "../../../containers/Orders/OrderModal/OrderModal";

interface Props {
    burger:Food;
    
    
}
const BurgerCard:React.FC<Props> = ({burger}:Props) => {
    return (
            <Card>
                <div className="card-header">
                    <h3>{burger.name}</h3>
                </div>
                <div className="card-body">
                    <p>{burger.decription}</p>
                    <span>Price: <strong>${Number.parseFloat(burger.price).toFixed(2)}</strong></span>
                </div>
                </Card>
    )
}

export default BurgerCard;