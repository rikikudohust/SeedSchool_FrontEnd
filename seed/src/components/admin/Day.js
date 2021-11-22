import React from "react";
import classes from '../../assets/CSS/admin/Day.module.css'
import styled from "styled-components";
import { Create, Settings, SettingsAccessibilityOutlined } from "@mui/icons-material";

const Back = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(63, 63, 63, 0.7);
    z-index: 2;
    position: absolute;
`;

const Day = props => {
    return <>
        <div className={classes.container}>
            <Back>
                <Create className={classes.icon} />
            </Back>
            <div>
                <h4 className={classes.scrips}>{props.day.day}</h4>
                <h6 className={classes.scrips}>Breakfast: {props.day.breakfast}</h6>
                <h6 className={classes.scrips}>Lunch: {props.day.lunch}</h6>
                <h6 className={classes.scrips}>Dinner: {props.day.dinner}</h6>
            </div>

        </div>
    </>
}

export default Day