import { AddOutlined, Create } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import classes from '../../assets/CSS/admin/Classes.module.css'
import button from '../../assets/CSS/general/AddButton.module.css'
// import Teachers from '../../assets/DummyData/Admin/Teachers'
import AddButton from "../general/AddButton";
import AddTeacher from "./AddTeacher";

const TeacherList = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [Teachers, setTeachers] = useState([]);
    const [image, setImage] = useState('http://127.0.0.1:8000/static/post_images/default_avatar.png');

    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8000/teachers')
        const data = await response.json()
        if (data.image != null) setImage('http://127.0.0.1:8000/static/' + data.image)
        setTeachers(data)
        setIsLoading(false)
    }, [])

    return <>
        {isLoading == 1 && <h1>Loading...</h1>}
        <div className={classes.class_liss}>
            <button className={button.btn} onClick={props.addTeacher} >
                <Create />
            </button>
            <div className={classes.class_list_body}>
                {Teachers.map(element =>
                    <div className={classes.item}>
                        <img src={image} alt="ảnh giáo viên" />
                        <div className={classes.content_item}>
                            <h3 className={classes.class_name}><span>Giáo viên: </span>{element.name}</h3>
                            <p className={classes.class_teacher}><span>Email: </span>{element.email}</p>
                            <p className={classes.class_number}><span>Giới tính: </span>{element.sex == 0 ? "Nữ" : "Nam"}</p>
                            <button className={classes.content_item_btn} onClick={() => props.onOpenTeacher(element.user)} >Thông tin</button>
                            {/* <button className={classes.content_item_btn} onClick={Delete} >Xóa</button> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default TeacherList