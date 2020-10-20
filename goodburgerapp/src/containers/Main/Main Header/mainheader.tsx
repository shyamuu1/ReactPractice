import { url } from 'inspector';
import React, {FC} from 'react';
import "./mainheader.css";

const mainheader:FC = () => {
    return (
        <div className="main-header">
            <div className="main-header-wrapper">
                <div className="main-header-quote">
                <strong>Welcome to Good Burger, home of the Good Burger. Can I take your order?</strong>
                </div>
            </div>
        </div>
    );
}

export default mainheader;