import React from 'react';
import './Backdrop.css';

interface Props{
    isVisible:Boolean;
    clicked:() => void;
}

const BackDrop:React.FC<Props> = ({isVisible, clicked}:Props) => {
    return (
        (isVisible)?<div className="backdrop" onClick={clicked}></div>:null
    );
}

export default BackDrop;