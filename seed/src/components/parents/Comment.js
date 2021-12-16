import axios from "axios";
import React, { useState } from "react";
import classes from '../../assets/CSS/admin/AddAnounn.module.css'

const Comment = props => {

    const [comment, setComment] = useState('');

    const onCommentHandle = event => {
        setComment(event.target.value);
    }

    const Submit = async () => {
        const data = {
            "comment": comment,
            "student": localStorage.getItem('id')
        }
        try {
            const res = await axios.post("http://127.0.0.1:8000/teachers/" + props.id + "/thank", data);
            props.closeAddComment();
        } catch {
            console.log('Error')
        }
    }

    return <>
        <div className={classes.popup} onClick={props.closeAddComment} />
        <div className={classes.container}>
            <textarea placeholder="Nhận xét" onChange={onCommentHandle} />
            <button onClick={Submit}>Thêm nhận xét</button>
        </div>
    </>
}

export default Comment;