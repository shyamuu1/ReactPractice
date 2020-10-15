import React, { ReactNode } from 'react';
import './card.css';

interface Props {
    children:ReactNode;
}

const card:React.FC<Props> = ({children}:Props) => {
    return (
    <div className="card">{children}</div>
    )
}

export default card;

