import { AddCircleOutline, AddOutlined, Create, PinDropSharp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import classes from '../../assets/CSS/admin/Classes.module.css'
import button from '../../assets/CSS/general/AddButton.module.css'
// import Class from '../../assets/DummyData/Admin/Classes'
import AddButton from "../general/AddButton";
import AddClass from "./AddClass";

const Classes = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [Class, setClass] = useState([]);
    const [image, setImage] = useState('http://127.0.0.1:8000/static/post_images/default_group.png');

    //Load data tat ca cac lop
    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8000/classes')
        const data = await response.json()
        if (data.image != null) setImage('http://127.0.0.1:8000/static/' + data.image)
        setClass(data)
        setIsLoading(false)
    }, [])

    return <>
        <div className={classes.class_liss}>
            {/* <button className={button.btn} onClick={props.addClass} >
                <Create />
            </button> */}
            <div className={classes.class_list_body}>
                {Class.map(element =>
                    <div className={classes.item}>
                        <img src={image} alt="ảnh lớp" />
                        <div className={classes.content_item}>
                            <h3 className={classes.class_name}>{element.name}</h3>
                            <p className={classes.class_teacher}><span>Giáo viên: </span>{element.teacher_name}</p>
                            <p className={classes.class_number}><span>Sĩ số: </span>{element.amount}</p>
                            <button className={classes.content_item_btn}>Thông tin</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    </>
}

export default Classes