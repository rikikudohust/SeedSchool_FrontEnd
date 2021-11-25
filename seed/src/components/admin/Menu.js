import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Menu.module.css'
import Week from '../../assets/DummyData/Admin/Week'
import Month from '../../assets/DummyData/Admin/Month'
import Day from "./Day";
import EditMenu from "./EditMenu";

const Menu = props => {
    const [isEditMenu, setIsEditMenu] = useState(0)

    const onTurnOnEditMenu = () => {
        setIsEditMenu(1)
    }

    const onTurnOffEditMenu = () => {
        setIsEditMenu(0)
    }

    return <>
        {isEditMenu == 1 && <EditMenu onTurnOffEditMenu={onTurnOffEditMenu} />}
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>Update by week</h2>
                <button>Apply</button>
            </div>

            <div className={classes.week}>
                {Week.map(element =>
                    <Day onTurnOnEditMenu={onTurnOnEditMenu} day={element}></Day>)}
            </div>

            <div className={classes.title}>
                <h2>Update by month</h2>
                <button>Apply</button>
            </div>

            <div className={classes.month}>
                <div className={classes.week}>
                    {Month.filter(day => 0 <= day.id && day.id < 7).map(element =>
                        <Day onTurnOnEditMenu={onTurnOnEditMenu} day={element}></Day>)}
                </div>
                <div className={classes.week}>
                    {Month.filter(day => 7 <= day.id && day.id < 14).map(element =>
                        <Day onTurnOnEditMenu={onTurnOnEditMenu} day={element}></Day>)}
                </div>
                <div className={classes.week}>
                    {Month.filter(day => 14 <= day.id && day.id < 21).map(element =>
                        <Day onTurnOnEditMenu={onTurnOnEditMenu} day={element}></Day>)}
                </div>
                <div className={classes.week}>
                    {Month.filter(day => 21 <= day.id && day.id < 28).map(element =>
                        <Day onTurnOnEditMenu={onTurnOnEditMenu} day={element}></Day>)}
                </div>
            </div>
        </div>
    </>
}

export default Menu