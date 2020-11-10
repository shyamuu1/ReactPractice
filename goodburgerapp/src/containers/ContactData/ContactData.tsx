import React from 'react';
import CCForm from "../../components/CreditCardForm/creditcardform";

const ContactData:React.FC = () => {

    return (
        <div className="contact-data">
            
            <CCForm />
            <h2>Delivery Address</h2>
        </div>
    );
}

export default ContactData;