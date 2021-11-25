import React from "react";
import classes from '../../assets/CSS/admin/EditMenu.module.css'
import icon from '../../assets/Icons/menu.jpg'

const EditMenu = props => {
    return <>
        <div className={classes.popup} onClick={props.onTurnOffEditMenu} />
        <div className={classes['popup-content']}>
            <div className={classes.closeMenu} onClick={props.onTurnOffEditMenu}>+</div>
            <img src={icon} width="100px" height="100px" />
            <h2 className={classes.menuTitle}>Thêm thực đơn</h2>
            <label> Thực đơn buổi sáng </label>
            <input type="text" name="morningMenu" placeholder="bữa sáng" /><br />
            <label> Thực đơn buổi trưa </label>
            <input type="text" name="noonMenu" placeholder="bữa trưa" /><br />
            <label> Thực đơn buổi chiều </label>
            <input type="text" name="lateMenu" placeholder="bữa chiều" /><br />
            <button>Thêm</button>
        </div>
    </>
}

export default EditMenu