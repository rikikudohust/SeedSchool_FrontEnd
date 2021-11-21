import { ChatBubbleOutline, Search } from "@mui/icons-material";
import React from "react";
import classes from '../../assets/CSS/UI/Nav.module.css'

const Nav = props => {
    return <>
        <div className={classes.container}>
            <div className={classes.search}>
                <Search />
                <input placeholder="Search" />
            </div>
            <h2 className={classes.title}>
                SEED SCHOOL
            </h2>
            <ChatBubbleOutline className={classes.chaticon} />
        </div>
    </>
}

export default Nav