import React from "react";
import classes from '../../assets/CSS/general/Anounn.module.css'
import Anounn from '../general/Anounn'

const ParentsAnounn = props => {
    return <>
        <div className={classes.notification}>
            <Anounn />
        </div>
    </>
}

export default ParentsAnounn