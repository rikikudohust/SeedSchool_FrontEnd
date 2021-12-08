// import "./styles.css";
import { ClassNames } from "@emotion/react";
import { useState } from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import classes from '../../assets/CSS/parents/Calendar.module.css'
import avatar from '../../assets/Icons/momocalendar.jpg'
import noData from '../../assets/Icons/nodata_found.png'


export default function Calendar() {

    const [avatar, setAvatar] = useState(noData);

    const onSelect = (event) => {
        console.log(event)
    }

    return (
        <div className={classes.container}>
            <InfiniteCalendar width="70%" height={640}
                rowHeight={100}
                onSelect={onSelect}
                showHeader={false}
                showOverlay={false}
                showWeekdays={false} />
            <div className={classes.info}>
                <div className={classes.img_place}>
                    <img src={avatar} alt="here" />
                </div>
                <div className={classes.comment}>
                    <h2>Nhận xét của giáo viên</h2>
                </div>
                <button>
                    Xin nghỉ
                </button>
            </div>
        </div>

    );
}