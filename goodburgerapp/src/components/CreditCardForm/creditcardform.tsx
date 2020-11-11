import React from 'react';
import './creditcardform.css';

const CCForm:React.FC = () => {

    return (
        <section className="ccform-container">
            <div>
            <h2>Card Information</h2>
            <form className="ccform">
                <div className="form-control">
                    <label>Card Number</label>
                    <input type="number"/>
                </div>
                <div className="form-control">
                    <label>Security Code</label>
                    <input type="number"/>
                </div>
            </form>
            </div>
        </section>
    );

}

export default CCForm;