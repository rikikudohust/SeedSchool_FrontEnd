import React, { useEffect, useState } from "react";
import classes from '../../assets/CSS/admin/Day.module.css'
import styled from "styled-components";
import { Create } from "@mui/icons-material";
import button from '../../assets/CSS/general/AddButton.module.css'

const day = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]

const Day = props => {
    const [isLoading, setIsLoading] = useState(0)
    const [food, setFood] = useState([]);

    //Lay data cua 1 ngay
    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8000/menus/' + props.id + '/sesion')
        const data = await response.json()
        console.log(data)
        setFood(data)
        setIsLoading(false)
    }, [])


    const breakfast = food.filter(element => element.sesion == 0);
    const lunch = food.filter(element => element.sesion == 1);
    const dinner = food.filter(element => element.sesion == 2);

    return <>
        <button className={button.btn} onClick={props.addStudent} >
            <Create />
        </button>
        <h1>{day[props.id]}</h1>
        <h2>Bữa sáng</h2>
        <div className={classes.container}>
            {breakfast.map(element =>
                <div className={classes.food}>
                    <div className={classes.place}>
                        <img src={`http://127.0.0.1:8000/static/${element.image}`} />
                    </div>
                    <h3>{element.name}</h3>
                </div>)}
        </div>

        <h2>Bữa trưa</h2>
        <div className={classes.container}>
            {lunch.map(element =>
                <div className={classes.food}>
                    <div className={classes.place}>
                        <img src={`http://127.0.0.1:8000/static/${element.image}`} />
                    </div>
                    <h3>{element.name}</h3>
                </div>)}
        </div>

        <h2>Bữa tối</h2>
        <div className={classes.container}>
            {dinner.map(element =>
                <div className={classes.food}>
                    <div className={classes.place}>
                        <img src={`http://127.0.0.1:8000/static/${element.image}`} />
                    </div>
                    <h3>{element.name}</h3>
                </div>)}
        </div>
    </>
}

export default Day