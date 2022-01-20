import axios from "axios";
import React, { useState } from "react";
import classes from '../../assets/CSS/teachers/AddTimeTable.module.css'

const History = props => {


    return <>
        <div className={classes.popup} onClick={props.closeAddTimeTable} />
        <div className={classes.black2}>
            <div className={classes.history}>
                <div className={classes.title_history}>Lịch sử cập nhật</div>
                <div className={classes.list_history}>
                    <button className={classes.item_history}>
                        1/1/2021
                    </button>
                </div>
                <div onClick={props.onHideHistory} className={classes.btn_out}>Thoát</div>
            </div>
        </div>
    </>
}

export default History