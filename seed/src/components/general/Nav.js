import { ChatBubbleOutline, Search } from "@mui/icons-material";
import React from "react";
import classes from '../../assets/CSS/general/Nav.module.css'

const Nav = props => {
    return <>
        <div className={classes.container}>
            {/* <h2 className={classes.title}>
                SEED SCHOOL
            </h2> */}
            <div className={classes.search}>
                <Search className={classes.icon} />
                <input placeholder="Search" />
            </div>
            <img src={props.avatar} />
        </div>
    </>
}

export default Nav