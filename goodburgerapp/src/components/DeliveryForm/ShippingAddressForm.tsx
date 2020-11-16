import React from 'react';
import "./ShippingAddressForm.css";

const AddressForm:React.FC = () => {

    return (
        <section className="addressForm-container">
            <div>
            <h2>Delivery Address</h2>
            <form className="addressForm">
                <div className="form-group">
                    <label>Street Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Postal Code</label>
                    <div className="state-select">
                    <input type="Number" className="form-control" maxLength={5} />
                    <label>State </label>
                    <select>
                        <option value="Florida">FL</option>
                        <option value="Georgia">GA</option>
                        <option value="New Mexico">NM</option>
                    </select>
                    </div>
                </div>
            </form>
            </div>
        </section>
    )
}

export default AddressForm;