import React from 'react';
import "./Layout.css";
import Container from '../../HOC/container';

const Layout:React.FC = (props) => {
    return (
    <Container>
        <header><h1>Header</h1></header>
        <main className="content">{props.children}</main>
    </Container>
    );
}

export default Layout;