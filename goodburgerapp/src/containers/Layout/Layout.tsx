import React, { ReactNode } from 'react';
import Header from "../../components/Header/Header";
import "./Layout.css";
import Banner from "../Banner/Banner";
interface Props {
    children:ReactNode;
}

const Layout:React.FC<Props> = ({children}:Props) => {
    return (
    <div className="main-wrapper">
        <Header />
        {/* <Banner>
            <p>Welcome to Good Burger, home of the Good Burger. Can I take your order?</p>
        </Banner> */}
        <main className="content">{children}</main>
    </div>
    );
}

export default Layout;