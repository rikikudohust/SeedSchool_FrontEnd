import React from "react";
import classes from '../../assets/CSS/general/Activities.module.css'
import Activities from "../general/Activities";

const TeachersActivities = props => {
    return <>
        <div className={classes.outermost}>
            <Activities />
        </div>
    </>

}

export default TeachersActivities