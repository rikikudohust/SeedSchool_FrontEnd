import React from "react";
import classes from '../../assets/CSS/admin/AddAnounn.module.css'

const AddAnounn = props => {
    return <>
        <div className={classes.popup} onClick={props.closeAddAnounn} />
        <div className={classes.container}>
            <textarea placeholder="Thông báo" />
            <button>Thêm thông báo</button>
        </div>
    </>
}

export default AddAnounn