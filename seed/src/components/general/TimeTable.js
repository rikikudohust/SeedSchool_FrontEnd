import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import classes from '../../assets/CSS/general/TimeTable.module.css'

const TimeTable = props => {
    return <>
        <div className={classes.box}>
            <a className={classes.button1} href="">
                <span className={classes.btn1}>Thứ 2</span>
            </a>
            <div id="T2" className={classes.content}>
                <div className={classes.card}>
                    <div className={classes.card_heart}><FavoriteBorderIcon /></div>
                    <div className={classes.card_menu}><MenuIcon /></div>
                    <div className={classes.card_img}><img src="https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844230_960_720.png" alt="" /></div>
                    <div className={classes.card_title}>Buổi sáng</div>
                    <div className={classes.card_time}>7h - 11h</div>
                    <div className={classes.content_subjects}>
                        <h4 className={classes.card_content}>Nội dung môn học :</h4>
                        <ul className={classes.card_subjects}>
                            <li>Thể dục buổi sáng</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default TimeTable;