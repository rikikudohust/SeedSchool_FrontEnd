import React, { useState } from "react";
import classes from '../../assets/CSS/admin/AddTeacher.module.css'
import noFileChosenYet from '../../assets/Icons/nofilechosenyet.png'

const AddStudent = props => {
    const [avatar, setAvatar] = useState(noFileChosenYet);

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
                <input type="text" placeholder="Họ và tên" />
                <input type="text" placeholder="Gmail" />
                <input type="text" placeholder="Mật khẩu" />
                <input type="number" placeholder="Số điện thoại" />
                <textarea placeholder="Thông tin kèm theo"></textarea>
                <button >Thêm</button>
            </div>
        </div>
    </>
}

export default AddStudent