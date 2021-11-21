import React from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../UI/Nav";
import avatar from '../../assets/Icons/defaultavatar.png'
import Menu from "./Menu";


const Admin = props => {
    return <>
        <Nav />
        <div className={classes.container}>
            <div className={classes.controller}>
                <img src={avatar} />
                <h1>Admin</h1>
                <button>Thực đơn</button>
                <button>Hoạt động chung</button>
                <button>Thông báo học phí</button>
                <button>Quản lý học phí</button>
                <button>Quản lý giáo viên</button>
            </div>
            <Menu />
        </div>
    </>
}

export default Admin