import React, { FC} from 'react';
import "./Banner.css";

interface Props {
    children:any;
}
const banner:FC<Props> = ({children}:Props) => {
    return (
        <div className="Banner">
            <div className="banner-container">
                <div className="banner-text">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default banner;