import React, { useState } from "react";
import classes from '../../assets/CSS/admin/AddActivities.module.css'
import noFileChosenYet from '../../assets/Icons/nofilechosenyet.png'

const AddActivities = props => {

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
        <div className={classes.popup} onClick={props.closeAddActivities} />
        <div className={classes.container} >
            <div className={classes.head}>
                <h1>Thêm hoạt động</h1>
                <input className={classes.date} type="date" />
            </div>
            <textarea className={classes.title} placeholder="Tiêu đề" />

            <div className={classes.detail}>
                <textarea placeholder="Nội dung hoạt động"></textarea>
                <div style={{ width: "48%" }}>
                    <div className={classes.img_place}>
                        <img src={avatar} alt="here" />
                    </div>
                    <input type="file" onChange={onChange} />
                </div>
            </div>
            <button>Submit</button>
        </div>
    </>
}

export default AddActivities