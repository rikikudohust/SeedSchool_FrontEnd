import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import TeachersActivities from "./TeachersActivities";
import Calendar from "./Calendar";
import ProfileTeacher from '../general/ProfileTeacher'
import avatar from '../../assets/Icons/teacher.jpg'
import { CalendarToday, FoodBank, Payment, Accessibility, Group, Check, Create } from "@mui/icons-material";
import StudentList from "./StudentList";
import AddCheck from './AddCheck'
import AddStudent from "./AddStudent";
import CreateClass from "./CreateClass";
import TimeTable from "./TeachersTimeTable";
import AddTimeTable from "./AddTimeTable"

const Teachers = props => {

    const [check, setCheck] = useState(0)
    const [require, setRequire] = useState(5)
    const [addingStudent, setAddingStudent] = useState(0)
    const [addingTimeTable, setAddingTimeTable]= useState(0)

    const onProfile = () => setRequire(5)

    const onCheck = () => setCheck(1)

    const closeAddCheck = () => setCheck(0)

    const onAddStudent = () => setAddingStudent(1)

    const closeAddStudent = () => setAddingStudent(0)

    const onAddTimeTable=()=> setAddingTimeTable(1)

    const closeAddTimeTable=()=> setAddingTimeTable(0)

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
                    <Create style={{ color: require == 3 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 3 ? '#FFF' : '#C0C0C0' }}>Tạo mới lớp học</h4>
                </button>
                <button style={{ backgroundColor: require == 4 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(4)}>
                    <Group style={{ color: require == 4 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 4 ? '#FFF' : '#C0C0C0' }}>Quản lý lớp học</h4>
                </button>
            </div>

            {check == 1 && <AddCheck closeAddCheck={closeAddCheck} />}
            {addingStudent == 1 && <AddStudent closeAddStudent={closeAddStudent} />}
            {addingTimeTable== 1&& <AddTimeTable closeAddTimeTable={closeAddTimeTable}/>}

            <div className={classes.additional}>
                <Nav avatar={avatar} onProfile={onProfile} />
                {require == 0 && <TimeTable onAddTimeTable={onAddTimeTable}/>}
                {require == 1 && <Calendar onCheck={onCheck} />}
                {require == 2 && <TeachersActivities />}
                {require == 3 && <CreateClass />}
                {require == 4 && <StudentList onAddStudent={onAddStudent} />}
                {require == 5 && <ProfileTeacher />}
            </div>
        </div>
    </>
}

export default Teachers