import React, { useState } from "react";
import classes from '../../assets/CSS/admin/AddTeacher.module.css'
import noFileChosenYet from '../../assets/Icons/nofilechosenyet.png'
import axios from "axios";

const AddStudent = props => {
    const [avatar, setAvatar] = useState(noFileChosenYet);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()

    const onChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = function () {
                const result = reader.result;
                setAvatar(result)
            }
        }
    }

    const onUsernameHandle = event => {
        setUsername(event.target.value)
    }

    const onEmailHandle = event => {
        setEmail(event.target.value)
    }

    const onPasswordHandle = event => {
        setPassword(event.target.value)
    }

    const Register = async () => {
        const data = {
            "email": email,
            "password": password,
            "username": username,
            "role": 2
        }
        try {
            const res = await axios.post("http://127.0.0.1:8000/register/", data);
            console.log("Successful")
            props.closeAddStudent();
        } catch {
            alert("Wrong email or password")
        }

    }

    return <>
        <div className={classes.popup} onClick={props.closeAddStudent} />
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.img_place}>
                    <img src={avatar} />
                </div>
                <input type="file" onChange={onChange} />
            </div>
            <div className={classes.right}>
                <h2>Thêm học sinh</h2>
                <input type="text" placeholder="Họ và tên" onChange={onUsernameHandle} />
                <input type="text" placeholder="Gmail" onChange={onEmailHandle} />
                <input type="text" placeholder="Mật khẩu" onChange={onPasswordHandle} />
                <input type="number" placeholder="Số điện thoại" />
                <textarea placeholder="Thông tin kèm theo"></textarea>
                <button onClick={Register}>Thêm</button>
            </div>
        </div>
    </>
}

export default AddStudent