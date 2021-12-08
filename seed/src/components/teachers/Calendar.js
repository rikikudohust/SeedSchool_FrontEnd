// import "./styles.css";
import { ClassNames } from "@emotion/react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import classes from '../../assets/CSS/parents/Calendar.module.css'
import Students from '../../assets/DummyData/Teachers/StudentList'


export default function Calendar() {

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

            <div className={classes.list}>
                {Students.map(element =>
                    <div className={classes.indie}>
                        <img src={element.class_img} />
                        <h2>{element.class_teacher}</h2>
                    </div>)}
            </div>
        </div>

    );
}