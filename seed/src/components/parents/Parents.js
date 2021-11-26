import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Admin.module.css'
import Nav from "../general/Nav";
import ParentsAnounn from "./ParentsAnounn";
import avatar from '../../assets/Icons/momo.jpg'
import ParentsActivities from "./ParentsActivities";


const Parents = props => {
    const [require, setRequire] = useState(0);

    return <>
        <Nav />
        <div className={classes.container}>
            <div className={classes.controller}>
                <img src={avatar} />
                <h1>Momo</h1>
                <button style={{ backgroundColor: require == 0 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(0)}>
                    Thời khóa biểu / Điểm danh / Thực đơn
                </button>
                <button style={{ backgroundColor: require == 1 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(1)}>
                    Hoạt động chung
                </button>
                <button style={{ backgroundColor: require == 2 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(2)}>
                    Thông báo
                </button>
                <button style={{ backgroundColor: require == 3 ? '#E6E6E6' : '#F0F0F0' }} onClick={() => setRequire(3)}>
                    Học phí
                </button>
            </div>
            {/* {require == 0 && <Menu />*/}
            {require == 1 && <ParentsActivities />}
            {require == 2 && <ParentsAnounn />}
            {/* {require == 3 && <Classes />} */}
        </div>
    </>
}

export default Parents
