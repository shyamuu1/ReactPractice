import React from 'react';
import './ContactDataPage.css';
import Mainheader from '../../Main/Main Header/mainheader';
import ContactData from "../../ContactData/ContactData";

const ContactDataPage:React.FC = () => {

    return(
        <div>
        <Mainheader>Contact Information</Mainheader>
        <ContactData />
        </div>
    )
}

export default ContactDataPage;