import React from 'react';
import Card from '../../../lib/Card/card';
import {Food} from '../../../util/types';
interface Props {
    burger:Food;
    Bkey: string;
}
const BurgerCard:React.FC<Props> = ({Bkey, burger}:Props) => {
    console.log(Bkey)
    return (
        <div key={Bkey}>
            <Card>
                <div className="card-row">
                    <div className="card-col">
                        {burger.name}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BurgerCard;