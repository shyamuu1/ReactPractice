import React from 'react';
import { TurnlistProps } from '../../types/types';

const Turnlist:React.FC<TurnlistProps>= (props:TurnlistProps) => {

    return (
        <li key={props.move}>
            <button onClick={() => props.Jump}></button>
        </li>
    );
}

export default Turnlist;