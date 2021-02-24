import React from 'react';
import { TurnlistProps } from '../../types/types';

const Turnlist:React.FC<TurnlistProps>= ({move, Jump}:TurnlistProps) => {

    const description:string = move ?
    "Go to move #" +move :
    "Go to game start";

    return (
        <li key={move}>
            <button onClick={() => Jump(move)}>{description}</button>
        </li>
    );
}

export default Turnlist;