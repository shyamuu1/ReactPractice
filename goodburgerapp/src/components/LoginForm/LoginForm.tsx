import React from 'react';
import './LoginForm.css';
import Btn from "../../lib/Button/Button";


interface Props{
    login:() => void;
    cancel:() => void;
}

const Login:React.FC<Props> = ({login, cancel}:Props) => {
    return (
        <div className="login-container">
            <div className="login-header">
            <button  type="button" onClick={cancel}>&#10005;</button>
            </div>
            <div className="form-container">
                <form>
                <div className="form-control">
                    <label>Email</label>
                    <input placeholder="Enter Email"/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input placeholder="Enter Password"/>
                </div>
                <div className="form-actions">
                    <Btn clicked={login}>Login</Btn>
                    <Btn clicked={cancel}>SignUp</Btn>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login;