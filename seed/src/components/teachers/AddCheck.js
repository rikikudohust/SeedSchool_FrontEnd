import { Save } from "@mui/icons-material";
import React, { useState } from "react";
import classes from '../../assets/CSS/teachers/AddCheck.module.css';
import noFileChosenYet from '../../assets/Icons/nofilechosenyet.png'

const AddCheck = props => {

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
        <div className={classes.popup} onClick={props.closeAddCheck} />
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.img_place}>
                    <img src={avatar} />
                </div>
                <input type="file" onChange={onChange} />
            </div>
            <div className={classes.right}>
                <textarea placeholder="Thêm nhận xét"></textarea>
                <button onClick={props.closeAddCheck}>
                    <Save />
                    Save
                </button>
            </div>
        </div>
    </>
}

export default AddCheck