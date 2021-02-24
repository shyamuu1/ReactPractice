import React from 'react';
import { SquareProps } from '../../types/types';

const Square:React.FC<SquareProps> = (props:SquareProps) => {
    return (
        <button className="square" onClick={() => props.clicked(props.current)}> 
        {props.value}
        </button>
        
    );
}

export default Square;