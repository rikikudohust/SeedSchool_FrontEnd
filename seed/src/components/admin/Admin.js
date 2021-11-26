import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import avatar from '../../assets/Icons/defaultavatar.png'
import Menu from "./Menu";
import AdminActivities from "./AdminActivities";
import AdminAnounn from "./AdminAnounn";
import Classes from "./Classes";
import TeacherList from "./TeacherList";


const Admin = props => {
    const [require, setRequire] = useState(0);

    return <>
        <Nav />
        <div className={classes.container}>
            <div className={classes.controller}>
                <img src={avatar} />
                <h1>Admin</h1>
                <button style={{ backgroundColor: require == 0 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(0)}>
                    Thực đơn
                </button>
                <button style={{ backgroundColor: require == 1 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(1)}>
                    Hoạt động chung
                </button>
                <button style={{ backgroundColor: require == 2 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(2)}>
                    Thông báo
                </button>
                <button style={{ backgroundColor: require == 3 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(3)}>
                    Quản lý lớp học
                </button>
                <button style={{ backgroundColor: require == 4 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(4)}>
                    Quản lý giáo viên
                </button>
            </div>
            {require == 0 && <Menu />}
            {require == 1 && <AdminActivities />}
            {require == 2 && <AdminAnounn />}
            {require == 3 && <Classes />}
            {require == 4 && <TeacherList />}
        </div>
    </>
}

export default Admin