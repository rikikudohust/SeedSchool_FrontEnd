import React from "react";
import classes from '../../assets/CSS/admin/Classes.module.css'
import Class from '../../assets/DummyData/Admin/Classes'

const Classes = () => {
    return <>
        <div className={classes.class_liss}>
            <button>Thêm lớp</button>
            <div className={classes.class_list_body}>
                {Class.map(element =>
                    <div className={classes.item}>
                        <img src={element.class_img} alt="ảnh lớp" />
                        <div className={classes.content_item}>
                            <h3 className={classes.class_name}>{element.class_name}</h3>
                            <p className={classes.class_teacher}><span>Giáo viên: </span>{element.class_teacher}</p>
                            <p className={classes.class_number}><span>Sĩ số: </span>{element.class_number}</p>
                            <a href="" className={classes.content_item_btn}>{element.class_info}</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default Classes