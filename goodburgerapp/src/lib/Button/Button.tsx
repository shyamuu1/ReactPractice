import React from 'react';
import "./Button.css";
interface Props{
    children:any;
    clicked:(event:any)=> void;
}

const Btn:React.FC<Props> = ({clicked, children}:Props) => {

    return(
        <button className="Button" onClick={clicked}>{children}</button>
    )
}

export default Btn;