import React from 'react';
import "./ShippingAddressForm.css";

const AddressForm:React.FC = () => {

    return (
        <section className="addressForm-container">
            <div>
            <h2>Delivery Address</h2>
            <form className="addressForm">
                <div className="form-control">
                    <label>Street Name</label>
                    <input type="text"/>
                </div>
                <div className="form-control">
                    <label>City</label>
                    <input type="text"/>
                </div>
                <div className="form-control">
                    <label>Postal Code</label>
                    <input type="Number" />
                </div>
            </form>
            </div>
        </section>
    )
}

export default AddressForm;