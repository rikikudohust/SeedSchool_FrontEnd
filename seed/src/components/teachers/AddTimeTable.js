import axios from "axios";
import React, { useState } from "react";
import classes from '../../assets/CSS/teachers/AddTimeTable.module.css'

const AddTimeTable = props => {
    const [day, setDay] = useState();
    const [start, setStart] = useState(0);
    const [finish, setFinish] = useState(0);
    const [title, setTitle] = useState('');

    const getDay = event => {
        var e = document.getElementById("id");
        if (e.options[e.selectedIndex].text === "Thứ 2") setDay(0)
        if (e.options[e.selectedIndex].text === "Thứ 3") setDay(1)
        if (e.options[e.selectedIndex].text === "Thứ 4") setDay(2)
        if (e.options[e.selectedIndex].text === "Thứ 5") setDay(3)
        if (e.options[e.selectedIndex].text === "Thứ 6") setDay(4)
        if (e.options[e.selectedIndex].text === "Thứ 7") setDay(5)
    }

    const startHandle = event => {
        setStart(event.target.value)
    }

    const finishHandle = event => {
        setFinish(event.target.value)
    }

    const titleHandle = event => {
        setTitle(event.target.value)
    }

    //Them 1 hoat dong
    const Submit = async () => {
        const data = {
            "time_start": start,
            "time_finish": finish,
            "title": title
        }
        try {
            const res = await axios.post("http://127.0.0.1:8000/teachers/" + localStorage.getItem('id') + "/schedules/" + day, data)
            props.closeAddTimeTable();
            console.log(data);
            console.log(day);
        } catch {
            console.log('Error')
        }

    }

    return <>
        <div className={classes.popup} onClick={props.closeAddTimeTable} />
        {/* <div className={classes.add_class}>
            <h1 className={classes.content_cls}>Thêm thời khóa biểu</h1>
            <div className={classes.pick}>
                <h3> Chọn ngày</h3>
                <select id="id" onChange={getDay}>
                    <option />
                    <option>Thứ 2</option>
                    <option>Thứ 3</option>
                    <option>Thứ 4</option>
                    <option>Thứ 5</option>
                    <option>Thứ 6</option>
                    <option>Thứ 7</option>
                </select>
            </div>

            <div className={classes.body_cls}>
                <div className={classes.time}>
                    <h4 >Bắt đầu</h4>
                    <input type="number" onChange={startHandle} />
                    <h4>Kết thúc</h4>
                    <input type="number" onChange={finishHandle} />
                </div>

                <p className={classes.title_cls}>Nội dung môn học</p>
                <textarea type="text" onChange={titleHandle} />

                <button className={classes.btn_cls} onClick={Submit}>Thêm</button>
            </div>
        </div> */}
        <div className={classes.black2}>
            <div className={classes.update}>
                <div className={classes.title_update}>Cập nhật thời khóa biểu</div>

                <form action="" className={classes.form_update}>
                    <div className={classes.date}>
                        <div className={classes.date}>Thứ 2</div>
                        <div className={classes.date}>Thứ 3</div>
                        <div className={classes.date}>Thứ 4</div>
                        <div className={classes.date}>Thứ 5</div>
                        <div className={classes.date}>Thứ 6</div>
                    </div>
                    <input className={classes.ip_update} placeholder="Thể dục" type="text" />
                    <input className={classes.ip_update} placeholder="Thể dục" type="text" />
                    <input className={classes.ip_update} placeholder="Thể dục" type="text" />
                    <input className={classes.ip_update} placeholder="Thể dục" type="text" />
                    <input className={classes.ip_update} placeholder="Chơi cát" type="text" />
                    <input className={classes.ip_update} placeholder="Thể dục" type="text" />
                    <input className={classes.ip_update} placeholder="Viết chữ" type="text" />
                    <input className={classes.ip_update} placeholder="Vẽ" type="text" />
                    <input className={classes.ip_update} placeholder="Xếp hình" type="text" />
                    <input className={classes.ip_update} placeholder="Uýnh nhau" type="text" />
                    <input className={classes.ip_update} placeholder="Nghỉ trưa" type="text" />
                    <input className={classes.ip_update} placeholder="Nghỉ trưa" type="text" />
                    <input className={classes.ip_update} placeholder="Nghỉ trưa" type="text" />
                    <input className={classes.ip_update} placeholder="Nghỉ trưa" type="text" />
                    <input className={classes.ip_update} placeholder="Nghỉ trưa" type="text" />
                    <input className={classes.ip_update} placeholder="Đọc sách" type="text" />
                    <input className={classes.ip_update} placeholder="Xem phim" type="text" />
                    <input className={classes.ip_update} placeholder="Uống trà" type="text" />
                    <input className={classes.ip_update} placeholder="Chơi game" type="text" />
                    <input className={classes.ip_update} placeholder="Thể dục" type="text" />
                    <div className={classes.btn_update}>Cập nhật</div>
                    <div className={classes.btn_out} onClick={props.closeAddTimeTable} >Thoát</div>
                </form>
            </div>
        </div>
    </>
}

export default AddTimeTable