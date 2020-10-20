import React, { ReactNode } from 'react';
import Header from "../../components/Header/Header";
import "./Layout.css";
import Grid from "../Grid/Grid";
import Footer from "../../components/Footer/footer";
import Main from "../Main/main";


const Layout:React.FC = () => {
    return (
        <Grid>
        <Header />
        <Main />
        <Footer />
        </Grid>
    );
}

export default Layout;