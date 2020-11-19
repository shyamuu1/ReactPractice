import React from 'react';
import Btn from "../../lib/Button/Button";
import "./register.css";

interface Props{
closeModal:() => void;
}

const Register:React.FC<Props> =({closeModal}:Props) => {
   

    
    return (
        <div className="register-container">
            <div className="register-header">
                <button type="button" onClick={closeModal}>&#10005;</button>
            </div>
            <div className="register-body">
                <form className="register-form">
                    <div className="registerform-group">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="registerform-group">
                        <label>First Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="registerform-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="registerform-group">
                        <label>Phone Number</label>
                        <input type="phone" className="form-control"/>
                    </div>
                    <div className="register-actions">
                        <Btn clicked={closeModal}>Continue to Checkout</Btn>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;