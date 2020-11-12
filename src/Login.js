import { Link, useHistory } from "react-router-dom"
import React from 'react'
import "./Login.css"
import { useState } from "react"
import { auth } from './firebase'

function Login() {

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(e => {
                alert(e.message)
            })
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then()
            .catch(e => {
                alert(e.message)
            })
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} name="" id="" />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} name="" id="" />
                    <button onClick={login} type="submit">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}>Create your amazon account</button>
            </div>
        </div >
    )
}

export default Login