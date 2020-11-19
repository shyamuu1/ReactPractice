import React from 'react';
import "./register.css";

const Register:React.FC =() => {
    return (
        <div className="register-container">
            <div className="register-header">
                <a type="button">&#10005;</a>
            </div>
            <div className="register-body">
                <form className="register-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="register-actions">
                        <button type="button">Continue to Checkout</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;