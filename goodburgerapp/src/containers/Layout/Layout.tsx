import React, { FC, ReactNode } from 'react';
import Header from "../../components/Header/Header";
import "./Layout.css";
import Grid from "../Grid/Grid";
import Footer from "../../components/Footer/footer";

interface Props{
    children:ReactNode;
}
const Layout:FC<Props> = ({children}:Props) => {
    return (
        <Grid>
        <Header />
    <main className="main">{children}</main>
        <Footer />
        </Grid>
    );
}

export default Layout;