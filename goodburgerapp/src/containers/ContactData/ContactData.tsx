import React from 'react';
import CCForm from "../../components/CreditCardForm/creditcardform";
import AddressForm from '../../components/DeliveryForm/ShippingAddressForm';

const ContactData:React.FC = () => {

    return (
        <div className="contact-data">
            
            <CCForm />
          
            
            <AddressForm />
            
        </div>
    );
}

export default ContactData;