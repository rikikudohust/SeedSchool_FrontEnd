import { AddOutlined, Create } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import classes from '../../assets/CSS/admin/Classes.module.css'
import button from '../../assets/CSS/general/AddButton.module.css'
// import Students from '../../assets/DummyData/Teachers/StudentList'

const StudentList = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [Students, setStudents] = useState([]);
    const [image, setImage] = useState('http://127.0.0.1:8000/static/post_images/default_avatar.png');

    //Lay thong tin hoc sinh thuoc quan ly cua giao vien
    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8000/teachers/' + localStorage.getItem('id') + '/students')
        const data = await response.json()
        setStudents(data)
        setIsLoading(false)
    }, [])

    return <>
        <div className={classes.class_liss}>
            <button className={button.btn} onClick={props.onAddStudent} >
                <Create />
            </button>
            <div className={classes.class_list_body}>
                {Students.map(element =>
                    <div className={classes.item}>
                        <img src={element.avatar == null ? image : "http://127.0.0.1:8000/static" + element.avatar} alt="ảnh bé" />
                        <div className={classes.content_item}>
                            <h3 className={classes.class_name}><span>Bé: </span>{element.name}</h3>
                            <p className={classes.class_teacher}><span>Email: </span>{element.email}</p>
                            <p className={classes.class_number}><span>Giới tính: </span>{element.sex}</p>
                            <button className={classes.content_item_btn} onClick={() => props.onOpenStudent(element.user)}>Thông tin</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default StudentList