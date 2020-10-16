import React, { ReactNode } from 'react';
import Header from "../../components/Header/Header";
import "./Layout.css";

interface Props {
    children:ReactNode;
}

const Layout:React.FC<Props> = ({children}:Props) => {
    return (
    <div>
        <Header />
        <main className="content">{children}</main>
    </div>
    );
}

export default Layout;