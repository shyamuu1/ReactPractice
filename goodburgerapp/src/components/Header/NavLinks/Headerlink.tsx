import React , {FC} from 'react';
import {NavLink} from 'react-router-dom';
import './Headerlink.css';

interface Props{
    link:string;
    children: string;
}

const Headerlink:FC<Props> = ({link, children}:Props) => {
    return (
        <li className="navlink">
            <NavLink activeClassName="active" to={link} exact>{children}</NavLink>
        </li>
    );
}

export default Headerlink;