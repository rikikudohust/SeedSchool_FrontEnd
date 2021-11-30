import React from "react";
import classes from '../../assets/CSS/admin/AddClass.module.css'

const AddClass = props => {
    return <>
        <div className={classes.popup} onClick={props.closeAddClass} />
        <div className={classes.add_class}>
            <div className={classes.avatar_cls}>
                <img src="/img/themLop.png" alt="" />
            </div>
            <h1 className={classes.content_cls}>Thêm lớp</h1>
            <div className={classes.body_cls}>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Tên lớp</p>
                    <input className={classes.ip_cls} type="text" name="" id="" />
                </div>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Tên giáo viên chủ nhiệm</p>
                    <input className={classes.ip_cls} type="text" name="" id="" />
                </div>
                <button className={classes.btn_cls}>Thêm</button>
            </div>
        </div>
    </>
}

export default AddClass