import React, {FC} from 'react';
import './Grid.css';

interface Props {
    children:any;
}

const grid:FC<Props> = ({children}:Props) => {
    return (
        <div className="grid-container">
            {children}
        </div>
    );
}

export default grid;