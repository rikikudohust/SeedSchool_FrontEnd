import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import avatar from '../../assets/Icons/defaultavatar.png'
import Menu from "./Menu";
import AdminActivities from "./AdminActivities";
import AdminAnounn from "./AdminAnounn";
import Classes from "./Classes";
import TeacherList from "./TeacherList";
import { Accessibility, Campaign, ChildCare, FoodBank, Group, PeopleAlt } from "@mui/icons-material";
import EditMenu from "./EditMenu";
import AddTeacher from "./AddTeacher";
import AddClass from "./AddClass";
import AddActivities from "./AddActivities";
import AddAnounn from "./AddAnounn";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";


const Admin = props => {
    const [isEditMenu, setIsEditMenu] = useState(0)
    const [require, setRequire] = useState(0)
    const [addingTeacher, setAddingTeacher] = useState(0)
    const [addingClass, setAddingClass] = useState(0)
    const [addingActivities, setAddingActivities] = useState(0)
    const [addingAnounn, setAddingAnounn] = useState(0)
    const [addingStudent, setAddingStudent] = useState(0)

    const addClass = () => setAddingClass(1)

    const closeAddClass = () => setAddingClass(0)

    const onTurnOnEditMenu = () => setIsEditMenu(1)

    const onTurnOffEditMenu = () => setIsEditMenu(0)

    const addAnounn = () => setAddingAnounn(1)

    const closeAddAnounn = () => setAddingAnounn(0)

    const addActivities = () => setAddingActivities(1)

    const closeAddActivities = () => setAddingActivities(0)

    const addTeacher = () => setAddingTeacher(1)

    const closeAddTeacher = () => setAddingTeacher(0)

    const addStudent = () => setAddingStudent(1)

    const closeAddStudent = () => setAddingStudent(0)

    return <>
        <div className={classes.container}>
            <div className={classes.controller}>
                <h1>Admin</h1>
                <button style={{ backgroundColor: require == 0 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(0)}>
                    <FoodBank style={{ color: require == 0 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 0 ? '#FFF' : '#C0C0C0' }} >Thực đơn</h4>
                </button>
                <button style={{ backgroundColor: require == 1 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(1)}>
                    <Accessibility style={{ color: require == 1 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 1 ? '#FFF' : '#C0C0C0' }} >Hoạt động chung</h4>
                </button>
                <button style={{ backgroundColor: require == 2 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(2)}>
                    <Campaign style={{ color: require == 2 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 2 ? '#FFF' : '#C0C0C0' }} >Thông báo</h4>
                </button>
                <button style={{ backgroundColor: require == 3 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(3)}>
                    <Group style={{ color: require == 3 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 3 ? '#FFF' : '#C0C0C0' }} >Quản lý lớp học</h4>
                </button>
                <button style={{ backgroundColor: require == 4 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(4)}>
                    <PeopleAlt style={{ color: require == 4 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 4 ? '#FFF' : '#C0C0C0' }} >Quản lý giáo viên</h4>
                </button>
                <button style={{ backgroundColor: require == 5 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(5)}>
                    <ChildCare style={{ color: require == 5 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 5 ? '#FFF' : '#C0C0C0' }} >Quản lý học sinh</h4>
                </button>
            </div>
            {isEditMenu == 1 && <EditMenu onTurnOffEditMenu={onTurnOffEditMenu} />}
            {addingActivities == 1 && <AddActivities closeAddActivities={closeAddActivities} />}
            {addingAnounn == 1 && <AddAnounn closeAddAnounn={closeAddAnounn} />}
            {addingClass == 1 && <AddClass closeAddClass={closeAddClass} />}
            {addingTeacher == 1 && <AddTeacher closeAddTeacher={closeAddTeacher} />}
            {addingStudent == 1 && <AddStudent closeAddStudent={closeAddStudent} />}

            <div className={classes.additional}>
                <Nav avatar={avatar} />
                {require == 0 && <Menu onTurnOnEditMenu={onTurnOnEditMenu} />}
                {require == 1 && <AdminActivities addActivities={addActivities} />}
                {require == 2 && <AdminAnounn addAnounn={addAnounn} />}
                {require == 3 && <Classes addClass={addClass} />}
                {require == 4 && <TeacherList addTeacher={addTeacher} />}
                {require == 5 && <StudentList addStudent={addStudent} />}
            </div>
        </div>
    </>
}

export default Admin