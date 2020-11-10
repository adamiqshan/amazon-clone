import { Link, userHistory } from "react-router-dom"
import React from 'react'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg" alt="" />
            </Link>
        </div >
    )
}

export default Login