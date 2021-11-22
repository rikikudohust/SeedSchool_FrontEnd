import React from "react";
import classes from '../../assets/CSS/admin/Menu.module.css'
import Week from '../../assets/DummyData/Admin/Week'
import Month from '../../assets/DummyData/Admin/Month'
import Day from "./Day";

const Menu = props => {

    return <>
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>Update by week</h2>
                <button>Apply</button>
            </div>

            <div className={classes.week}>
                {Week.map(element =>
                    <Day day={element}></Day>)}
            </div>

            <div className={classes.title}>
                <h2>Update by month</h2>
                <button>Apply</button>
            </div>

            <div className={classes.month}>
                <div className={classes.week}>
                    {Week.map(element =>
                        <Day day={element}></Day>)}
                </div>
                <div className={classes.week}>
                    {Week.map(element =>
                        <Day day={element}></Day>)}
                </div>
                <div className={classes.week}>
                    {Week.map(element =>
                        <Day day={element}></Day>)}
                </div>
                <div className={classes.week}>
                    {Week.map(element =>
                        <Day day={element}></Day>)}
                </div>
            </div>
        </div>
    </>
}

export default Menu