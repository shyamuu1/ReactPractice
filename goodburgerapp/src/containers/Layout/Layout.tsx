import React from 'react';
import "./Layout.css";


const Layout:React.FC = (props) => {
    return (
    <div>
        <header><h1>Header</h1></header>
        <main className="content">{props.children}</main>
    </div>
    );
}

export default Layout;