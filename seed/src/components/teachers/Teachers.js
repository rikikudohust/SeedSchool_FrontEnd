import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import TeachersActivities from "./TeachersActivities";
import avatar from '../../assets/Icons/teacher.jpg'


const Teachers = props => {

    const [require, setRequire] = useState(0)

    return <>
        <Nav />
        <div className={classes.container}>
            <div className={classes.controller}>
                <img src={avatar} />
                <h1>Cô gia sư</h1>
                <button style={{ backgroundColor: require == 0 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(0)}>
                    Thời khóa biểu / Điểm danh / Thực đơn
                </button>
                <button style={{ backgroundColor: require == 1 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(1)}>
                    Hoạt động chung
                </button>
                <button style={{ backgroundColor: require == 2 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(2)}>
                    Quản lý lớp
                </button>
            </div>
            {/* {require == 0 && <Menu />*/}
            {require == 1 && <TeachersActivities />}
            {/* {require == 2 && <ParentsAnounn />} */}

        </div>
    </>
}

export default Teachers