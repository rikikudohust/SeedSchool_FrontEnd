import React, { useState } from "react";
import classes from '../../assets/CSS/admin/Menu.module.css'
import Week from '../../assets/DummyData/Admin/Week'
import Month from '../../assets/DummyData/Admin/Month'
import Day from "./Day";
import EditMenu from "./EditMenu";

const Menu = props => {
    const [updateByWeek, setUpdateByWeek] = useState(1)

    const selectChange = () => {
        var e = document.getElementById("id");
        if (e.options[e.selectedIndex].text === "Update by week") setUpdateByWeek(1)
        if (e.options[e.selectedIndex].text === "Update by month") setUpdateByWeek(0)
    }

    return <>
        <div className={classes.container}>

            <div className={classes.title}>
                <select onChange={selectChange} id="id">
                    <option>Update by week</option>
                    <option>Update by month</option>
                </select>
                <button>Apply</button>
            </div>

            {
                updateByWeek == 1 && <div className={classes.week}>
                    {Week.map(element =>
                        <Day onTurnOnEditMenu={props.onTurnOnEditMenu} day={element}></Day>)}
                </div>
            }

            {
                updateByWeek == 0 &&
                <div className={classes.month}>
                    <div className={classes.week}>
                        {Month.filter(day => 0 <= day.id && day.id < 7).map(element =>
                            <Day onTurnOnEditMenu={props.onTurnOnEditMenu} day={element}></Day>)}
                    </div>
                    <div className={classes.week}>
                        {Month.filter(day => 7 <= day.id && day.id < 14).map(element =>
                            <Day onTurnOnEditMenu={props.onTurnOnEditMenu} day={element}></Day>)}
                    </div>
                    <div className={classes.week}>
                        {Month.filter(day => 14 <= day.id && day.id < 21).map(element =>
                            <Day onTurnOnEditMenu={props.onTurnOnEditMenu} day={element}></Day>)}
                    </div>
                    <div className={classes.week}>
                        {Month.filter(day => 21 <= day.id && day.id < 28).map(element =>
                            <Day onTurnOnEditMenu={props.onTurnOnEditMenu} day={element}></Day>)}
                    </div>
                </div>
            }
        </div >
    </>
}

export default Menu