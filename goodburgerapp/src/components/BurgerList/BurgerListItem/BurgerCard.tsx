import React from 'react';
import {Food} from '../../../util/types';
import Card from '../../../lib/Card/card';
interface Props {
    burger:Food;
    Bkey: string;
}
const BurgerCard:React.FC<Props> = ({Bkey, burger}:Props) => {
    return (
        <div key={Bkey}>
            <Card>
                <div className="card-header">
                    <h3>{burger.name}</h3>
                </div>
                <div className="card-body">
                    <p>{burger.decription}</p>
                    <span><strong>{`price: $${burger.price}.00`}</strong></span>
                </div>
                </Card>
            </div>
    )
}

export default BurgerCard;