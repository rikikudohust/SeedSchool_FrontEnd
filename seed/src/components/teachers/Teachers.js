import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import TeachersActivities from "./TeachersActivities";
import avatar from '../../assets/Icons/teacher.jpg'
import { CalendarToday, FoodBank, Payment, Accessibility, Group } from "@mui/icons-material";

const Teachers = props => {

    const [require, setRequire] = useState(0)

    return <>
        <div className={classes.container}>
            <div className={classes.controller}>
                <h1>Cô gia sư</h1>
                <button style={{ backgroundColor: require == 0 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(0)}>
                    <CalendarToday className={classes.icon} />
                    <h4>Thời khóa biểu/ Điểm danh</h4>
                </button>
                <button style={{ backgroundColor: require == 1 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(1)}>
                    <Accessibility className={classes.icon} />
                    <h4>Hoạt động chung</h4>
                </button>
                <button style={{ backgroundColor: require == 2 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(2)}>
                    <Group className={classes.icon} />
                    <h4>Quản lý lớp học</h4>
                </button>
            </div>

            <div className={classes.additional}>
                <Nav avatar={avatar} />
                {/* {require == 0 && <Menu />*/}
                {require == 1 && <TeachersActivities />}
                {/* {require == 2 && <ParentsAnounn />} */}
            </div>
        </div>
    </>
}

export default Teachers