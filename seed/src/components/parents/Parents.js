import React from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../UI/Nav";
import avatar from '../../assets/Icons/shang-chi.jpg'


const Parents = props => {
    return <>
        <Nav />
        <div className={classes.container}>
            <div className={classes.controller}>
                <img className={classes.img} src={avatar} />
                <h1>Shang-chi</h1>
                <button>Thời khóa biểu/ Điểm danh/ Thực đơn</button>
                <button>Hoạt động chung</button>
                <button>Thông báo</button>
                <button>Học phí</button>
            </div>
        </div>
    </>
}

export default Parents