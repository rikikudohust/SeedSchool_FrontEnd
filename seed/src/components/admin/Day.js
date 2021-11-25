import React from "react";
import classes from '../../assets/CSS/admin/Day.module.css'
import styled from "styled-components";
import { Create } from "@mui/icons-material";

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
                <Create className={classes.icon} onClick={props.onTurnOnEditMenu} />
            </Back>
            <div>
                <h3 className={classes.scrips}>{props.day.day}</h3>
                <h5 className={classes.scrips}>Breakfast: {props.day.breakfast}</h5>
                <h5 className={classes.scrips}>Lunch: {props.day.lunch}</h5>
                <h5 className={classes.scrips}>Dinner: {props.day.dinner}</h5>
            </div>

        </div>
    </>
}

export default Day