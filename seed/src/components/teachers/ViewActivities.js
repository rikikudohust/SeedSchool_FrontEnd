import React, { useState, useEffect } from "react";
import classes from '../../assets/CSS/general/ViewActivities.module.css'
import axios from "axios";

const ViewActivities = props => {

    const [activities, setActivities] = useState({});

    useEffect(async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/activities/post");
            const reRes = res.data.filter(element => element.id == props.id);
            setActivities(reRes[0]);
            console.log(res.data);
        } catch {
            console.log("Error")
        }
    }, [])

    const Delete = async () => {
        try {
            const res = await axios.delete("http://127.0.0.1:8000/activities/" + props.id + "/");
            props.onCloseActi();
        } catch {
            console.log("Error")
        }
    }

    return <>
        <div className={classes.popup} onClick={props.onCloseActi} />
        <div className={classes.container} >
            <h1>{activities.title}</h1>
            <p>{activities.description}</p>
        </div>
    </>
}

export default ViewActivities;