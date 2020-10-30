import React, {FC} from 'react';
import "./mainheader.css";

interface Props{
    children:any;
}

const mainheader:FC<Props> = ({children}:Props) => {
    return (
        <div className="main-header">
            <div className="main-header-wrapper">
                <div className="main-header-quote">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default mainheader;