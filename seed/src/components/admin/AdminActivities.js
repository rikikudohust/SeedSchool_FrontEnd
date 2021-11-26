import React from "react";
import classes from '../../assets/CSS/general/Activities.module.css'
import Activities from "../general/Activities";

const AdminActivities = props => {


    return <>
        <div className={classes.outermost}>
            <button>Thêm hoạt động</button>
            <Activities />
        </div>
    </>

}

export default AdminActivities