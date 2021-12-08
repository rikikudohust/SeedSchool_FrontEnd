import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import ParentsAnounn from "./ParentsAnounn";
import avatar from '../../assets/Icons/momo.jpg'
import ParentsActivities from "./ParentsActivities";
import { CalendarToday, FoodBank, Payment, Accessibility, Campaign, CastForEducation } from "@mui/icons-material";
import Calendar from "./Calendar";
import ProfileTeacher from "../general/ProfileTeacher";


const Parents = props => {
    const [require, setRequire] = useState(0);

    return <>
        <div className={classes.container}>
            <div className={classes.controller}>
                <h1>Momo</h1>
                <button style={{ backgroundColor: require == 0 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(0)}>
                    <FoodBank style={{ color: require == 0 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 0 ? '#FFF' : '#C0C0C0' }}>Thực đơn</h4>
                </button>
                <button style={{ backgroundColor: require == 1 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(1)}>
                    <CalendarToday style={{ color: require == 1 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 1 ? '#FFF' : '#C0C0C0' }}>Điểm danh</h4>
                </button>
                <button style={{ backgroundColor: require == 2 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(2)}>
                    <Accessibility style={{ color: require == 2 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 2 ? '#FFF' : '#C0C0C0' }}>Hoạt động chung</h4>
                </button>
                <button style={{ backgroundColor: require == 3 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(3)}>
                    <Campaign style={{ color: require == 3 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 3 ? '#FFF' : '#C0C0C0' }}>Thông báo</h4>
                </button>
                <button style={{ backgroundColor: require == 4 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(4)}>
                    <Payment style={{ color: require == 4 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 4 ? '#FFF' : '#C0C0C0' }}>Học phí</h4>
                </button>
                <button style={{ backgroundColor: require == 5 ? '#1877f2' : '#FFF' }} onClick={() => setRequire(5)}>
                    <CastForEducation style={{ color: require == 5 ? '#FFF' : '#1877f2' }} className={classes.icon} />
                    <h4 style={{ color: require == 5 ? '#FFF' : '#C0C0C0' }}>Giáo viên chủ nhiệm</h4>
                </button>
            </div>
            <div className={classes.additional}>
                <Nav avatar={avatar} />
                {/* {require == 0 && <Menu />*/}
                {require == 1 && <Calendar />}
                {require == 2 && <ParentsActivities />}
                {require == 3 && <ParentsAnounn />}
                {/* {require == 3 && <Classes />} */}
                {require == 5 && <ProfileTeacher />}
            </div>

        </div>
    </>
}

export default Parents
