import React from "react";
import classes from '../../assets/CSS/admin/Classes.module.css'
import Teachers from '../../assets/DummyData/Admin/Teachers'

const TeacherList = () => {
    return <>
        <div className={classes.class_liss}>
            <button>Thêm giáo viên</button>
            <div className={classes.class_list_body}>
                {Teachers.map(element =>
                    <div className={classes.item}>
                        <img src={element.class_img} alt="ảnh lớp" />
                        <div className={classes.content_item}>
                            <h3 className={classes.class_name}><span>Mã số: </span>{element.class_name}</h3>
                            <p className={classes.class_teacher}><span>Giáo viên: </span>{element.class_teacher}</p>
                            <p className={classes.class_number}><span>Chức vụ: </span>{element.class_number}</p>
                            <a href="" className={classes.content_item_btn}>{element.class_info}</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default TeacherList