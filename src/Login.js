import { Link, userHistory } from "react-router-dom"
import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" name="" id="" />
                    <h5>Password</h5>
                    <input type="password" name="" id="" />
                    <button type="submit">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button>Create your amazon account</button>
            </div>
        </div >
    )
}

export default Login