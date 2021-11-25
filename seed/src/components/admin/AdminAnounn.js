import React from "react";
import classes from '../../assets/CSS/admin/Anounn.module.css'
import Anounn from '../General/Anounn'

const AdminAnounn = props => {
    return <>
        <div className={classes.notification}>
            <p className={classes.add_notification}><i className="ti-plus"></i> + Thêm thông báo</p>
            <Anounn />
        </div>
    </>
}

export default AdminAnounn