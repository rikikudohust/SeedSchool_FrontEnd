// import "./styles.css";
import { ClassNames } from "@emotion/react";
import { useState, useEffect } from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import classes from '../../assets/CSS/parents/Calendar.module.css'
// import Students from '../../assets/DummyData/Teachers/StudentList'


export default function Calendar(props) {


    const [isLoading, setIsLoading] = useState(false);
    const [Students, setStudents] = useState([]);

    const onSelect = (event) => {
        console.log(event)
    }

    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8000/teachers/'+localStorage.getItem('id')+'/students')
        const data = await response.json()
        setStudents(data)
        setIsLoading(false)
    }, [])

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
                    <div className={classes.indie} onClick={props.onCheck}>
                        <img src={element.class_img} />
                        <h2>{element.name}</h2>
                    </div>)}
            </div>
        </div>

    );
}