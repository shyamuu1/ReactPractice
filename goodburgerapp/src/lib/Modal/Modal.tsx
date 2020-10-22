import React from 'react';

interface Props {
    children:any;
    show:Boolean;
}
const modal:React.FC<Props> = ({children, show}:Props) => {
    show = true;
    return (
        <div className="backdrop">
            <div className="Modal" style={{
                    transform: show ? 'translateY(0)':'translateY(-100vh)',
                    opacity: show ? '1':'0'
                 }}>
                {children}
            </div>
        </div>
    );
} 

export default modal;