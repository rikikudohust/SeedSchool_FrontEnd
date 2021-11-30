import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import avatar from '../../assets/Icons/defaultavatar.png'
import Menu from "./Menu";
import AdminActivities from "./AdminActivities";
import AdminAnounn from "./AdminAnounn";
import Classes from "./Classes";
import TeacherList from "./TeacherList";
import { Accessibility, Campaign, FoodBank, Group, PeopleAlt } from "@mui/icons-material";
import EditMenu from "./EditMenu";
import AddTeacher from "./AddTeacher";
import AddClass from "./AddClass";


const Admin = props => {
    const [isEditMenu, setIsEditMenu] = useState(0)
    const [require, setRequire] = useState(0)
    const [addingTeacher, setAddingTeacher] = useState(0)
    const [addingClass, setAddingClass] = useState(0)

    const addClass = () => {
        setAddingClass(1)
    }

    const closeAddClass = () => {
        setAddingClass(0)
    }

    const onTurnOnEditMenu = () => {
        setIsEditMenu(1)
    }

    const onTurnOffEditMenu = () => {
        setIsEditMenu(0)
    }

    const addTeacher = () => {
        setAddingTeacher(1)
    }

    const closeAddTeacher = () => {
        setAddingTeacher(0)
    }


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
            </div>
            {isEditMenu == 1 && <EditMenu onTurnOffEditMenu={onTurnOffEditMenu} />}
            {addingClass == 1 && <AddClass closeAddClass={closeAddClass} />}
            {addingTeacher == 1 && <AddTeacher closeAddTeacher={closeAddTeacher} />}

            <div className={classes.additional}>
                <Nav avatar={avatar} />
                {require == 0 && <Menu onTurnOnEditMenu={onTurnOnEditMenu} />}
                {require == 1 && <AdminActivities />}
                {require == 2 && <AdminAnounn />}
                {require == 3 && <Classes addClass={addClass} />}
                {require == 4 && <TeacherList addTeacher={addTeacher} />}
            </div>
        </div>
    </>
}

export default Admin