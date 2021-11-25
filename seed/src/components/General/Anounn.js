import React from "react";
import classes from '../../assets/CSS/admin/Anounn.module.css'
import Announcements from '../../assets/DummyData/General/Anounncements'

const Anounn = props => {
    return <>
        <ul className={classes.notification_body}>
            {Announcements.map(element =>
                <li className={classes.notification_content}>
                    <div className={classes.item}>
                        <a href="#" className={classes.item_content}><span>[SSL]</span> {element.anounncement}</a>
                        <p className={classes.item_date}>{element.date}</p>
                    </div>
                </li>)}
        </ul>
    </>
}

export default Anounn