import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import ParentsAnounn from "./ParentsAnounn";
import avatar from '../../assets/Icons/momo.jpg'
import ParentsActivities from "./ParentsActivities";
import { CalendarToday, FoodBank, Payment, Accessibility, Campaign, CastForEducation } from "@mui/icons-material";


const Parents = props => {
    const [require, setRequire] = useState(0);

    return <>
        <div className={classes.container}>
            <div className={classes.controller}>
                <h1>Momo</h1>
                <button style={{ backgroundColor: require == 0 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(0)}>
                    <FoodBank className={classes.icon} />
                    <h4>Thực đơn</h4>
                </button>
                <button style={{ backgroundColor: require == 1 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(1)}>
                    <CalendarToday className={classes.icon} />
                    <h4>Thời khóa biểu</h4>
                </button>
                <button style={{ backgroundColor: require == 2 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(2)}>
                    <Accessibility className={classes.icon} />
                    <h4>Hoạt động chung</h4>
                </button>
                <button style={{ backgroundColor: require == 3 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(3)}>
                    <Campaign className={classes.icon} />
                    <h4>Thông báo</h4>
                </button>
                <button style={{ backgroundColor: require == 4 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(4)}>
                    <Payment className={classes.icon} />
                    <h4>Học phí</h4>
                </button>
                <button style={{ backgroundColor: require == 5 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(5)}>
                    <CastForEducation className={classes.icon} />
                    <h4>Giáo viên chủ nhiệm</h4>
                </button>
            </div>
            <div className={classes.additional}>
                <Nav avatar={avatar} />
                {/* {require == 0 && <Menu />*/}
                {require == 2 && <ParentsActivities />}
                {require == 3 && <ParentsAnounn />}
                {/* {require == 3 && <Classes />} */}
            </div>

        </div>
    </>
}

export default Parents
