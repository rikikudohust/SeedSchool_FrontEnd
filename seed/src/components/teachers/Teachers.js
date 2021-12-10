import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import TeachersActivities from "./TeachersActivities";
import Calendar from "./Calendar";
import ProfileTeacher from '../general/ProfileTeacher'
import avatar from '../../assets/Icons/teacher.jpg'
import { CalendarToday, FoodBank, Payment, Accessibility, Group, Check } from "@mui/icons-material";
import StudentList from "./StudentList";
import AddCheck from './AddCheck'

const Teachers = props => {

    const [check, setCheck] = useState(0)
    const [require, setRequire] = useState(4)

    const onProfile = () => setRequire(4)

    const onCheck = () => setCheck(1)

    const closeAddCheck = () => setCheck(0)

    return <>
        <div className={classes.container}>
            <div className={classes.controller}>
                <h1>Cô gia sư</h1>
                <button style={{ backgroundColor: require == 0 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(0)}>
                    <CalendarToday style={{ color: require == 0 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 0 ? '#FFF' : '#C0C0C0' }}>Thời khóa biểu</h4>
                </button>
                <button style={{ backgroundColor: require == 1 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(1)}>
                    <Check style={{ color: require == 1 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 1 ? '#FFF' : '#C0C0C0' }}>Điểm danh</h4>
                </button>
                <button style={{ backgroundColor: require == 2 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(2)}>
                    <Accessibility style={{ color: require == 2 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 2 ? '#FFF' : '#C0C0C0' }}>Hoạt động chung</h4>
                </button>
                <button style={{ backgroundColor: require == 3 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(3)}>
                    <Group style={{ color: require == 3 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 3 ? '#FFF' : '#C0C0C0' }}>Quản lý lớp học</h4>
                </button>
            </div>

            {check == 1 && <AddCheck closeAddCheck={closeAddCheck} />}

            <div className={classes.additional}>
                <Nav avatar={avatar} onProfile={onProfile} />
                {/* {require == 0 && <Menu />*/}
                {require == 1 && <Calendar onCheck={onCheck} />}
                {require == 2 && <TeachersActivities />}
                {require == 3 && <StudentList />}
                {require == 4 && <ProfileTeacher />}
            </div>
        </div>
    </>
}

export default Teachers