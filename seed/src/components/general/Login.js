import React from "react"
import classes from '../../assets/CSS/general/Login.module.css'

const Login = prosp => {
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
                <input placeholder="User Name" />
                <input placeholder="Password" />
                <button >Login</button>
                <h4>forgot password?</h4>
                <div className={classes.line} />

            </div>

        </div>
    </>
}

export default Login