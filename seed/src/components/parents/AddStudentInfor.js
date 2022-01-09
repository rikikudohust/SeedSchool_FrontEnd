import React, { useState } from "react";
import styles from "../../assets/CSS/parents/AddStudentInfor.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";

const AddStudentInfor = (props) => {
  const [avatar, setAvatar] = useState(noFileChosenYet);
  const onChange = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const result = reader.result;
        setAvatar(result);
      };
    }
  };

  return (
    <>
      <div className={styles.popup_content}>
        <h2 id="popup_title">Thêm thông tin học sinh</h2>
        <div className={styles.flex_container}>
          <form action="#" className={styles.formStyle}>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Họ và tên"
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Lớp"
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Tuổi"
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Giáo viên chủ nhiệm"
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Địa chỉ"
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Họ tên phụ huynh"
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Số điện thoại"
              />
            </div>
          </form>
          <div className={styles.left}>
            <div className={styles.img_place}>
              <img src={avatar} />
            </div>
            <input type="file" onChange={onChange} />
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.addBtn}>Thêm</button>
        </div>
      </div>
    </>
  );
};

export default AddStudentInfor;
