import React, { useState } from "react"
import classes from '../../assets/CSS/general/Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const role = ['teachers', 'parents', 'admin'];

const Login = prosp => {

    const navigate = new useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    //Login
    const Login = async () => {
        const data = {
            "email": email,
            "password": password
        }
        try {
            const res = await axios.post("http://127.0.0.1:8000/login/", data);
            localStorage.setItem('jwt', res.data.jwt);
            localStorage.setItem('id', res.data.id);
            navigate('/' + role[res.data.role - 1] + '/' + res.data.id);
        } catch {
            alert("Wrong email or password")
        }
    }

    //Xu ly input thay doi
    const onEmailHandle = event => {
        setEmail(event.target.value)
    }

    const onPasswordHandle = event => {
        setPassword(event.target.value)
    }

    return <>
        <div className={classes.container}>
            <div className={classes.info}>
                {/* <img src={icon} /> */}
                <h2>Seed School</h2>
                <h3>Best place for our children</h3>
                <div className={classes.team}>
                    <h4>Made by</h4>
                    <h1>Seed Team</h1>
                </div>
            </div>

            <div className={classes.table}>
                <h1>Welcome</h1>
                <input type="text" placeholder="User Name" onChange={onEmailHandle} />
                <input type="password" placeholder="Password" onChange={onPasswordHandle} />
                <button onClick={Login}>Login</button>
                <h4>forgot password?</h4>
                <div className={classes.line} />
            </div>
        </div>
    </>
}

export default Login