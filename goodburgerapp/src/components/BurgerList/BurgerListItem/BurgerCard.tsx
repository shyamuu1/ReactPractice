import React from 'react';
import logo from '../../../assets/images/logo5121.png';
import {Food} from '../../../util/types';
import Card from '../../../lib/Card/card';
interface Props {
    burger:Food;
    Bkey: string;
}
const BurgerCard:React.FC<Props> = ({Bkey, burger}:Props) => {
    console.log(burger);
    return (
        <div className="burger-card" key={Bkey}>
            <Card>
                <div className="card__content">
                    <h3>{burger.name}</h3>
                    <p>{burger.decription}</p>
                </div>
                <div className="card-footer">
                    <span><strong>{`price: $${burger.price}.00`}</strong></span>
                </div>
                </Card>
            </div>
    )
}

export default BurgerCard;