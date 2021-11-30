import React from "react";
import classes from '../../assets/CSS/general/Activities.module.css'
import Activities from "../general/Activities";
import AddButton from "../general/AddButton";

const AdminActivities = props => {


    return <>
        <div className={classes.outermost}>
            <Activities />
        </div>
        <AddButton />
    </>

}

export default AdminActivities