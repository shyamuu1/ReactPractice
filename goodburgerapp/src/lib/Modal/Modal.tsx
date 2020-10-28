import React, {useState} from 'react';
import "./Modal.css";

interface Props {
    children:any;
    show:Boolean;
}
const modal:React.FC<Props> = ({children, show}:Props) => {

    return (
        <React.Fragment>
            <div className="backdropz">
            <div className="Modal" style={{
                    transform: show ? 'translateY(0)':'translateY(-100vh)',
                    opacity: show ? '1':'0'
                 }}>
                {children}
            </div>
            </div>
            </React.Fragment>
        
    );
} 

export default modal;