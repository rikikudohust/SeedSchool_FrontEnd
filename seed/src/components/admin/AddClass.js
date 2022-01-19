import React, { useState } from "react";
import styles from "../../assets/CSS/admin/AddClass.module.css";
import axios from "axios";

const AddClass = (props) => {
  const [total, setTotal] = useState(0);
  const [nameClass, setNameClass] = useState();
  const [gvName, setGVName] = useState();

  const handleClassName = (event) => {
    setNameClass(event.target.value);
  };

  const handleTeacher = (event) => {
    setGVName(event.target.value);
  };

  const handleTotal = (event) => {
    setTotal(event.target.value);
  };

  const Register = async () => {
    const data = {
      name: nameClass,
      amount: total,
      teacher: gvName,
    };
    try {
      const res = await axios.post("http://127.0.0.1:8000/classes/", data);
    } catch {
      alert("wrong input");
    }
  };

  return (
    <>
      <div className={styles.turnOff} onClick={props.closeAddClass}></div>
      <div className={styles.container_contact1}>
        <div
          className={styles.contact1_pic}
          className={styles.js_tilt}
          data-tilt=""
        >
          <img
            src="https://institutlm.com/wp-content/uploads/2016/06/training-icon.png"
            alt="IMG"
            width={200}
            height={200}
          />
        </div>
        <form className={styles.contact1_form} className={styles.validate_form}>
          <span className={styles.contact1_form_title}> Thêm lớp </span>
          <div className={styles.wrap_input1} className={styles.validate_input}>
            <input
              className={styles.input1}
              type="text"
              placeholder="Tên giáo viên"
              onChange={handleTeacher}
            />
            <span className={styles.shadow_input1}></span>
          </div>
          <div className={styles.wrap_input1} className={styles.validate_input}>
            <input
              className={styles.input1}
              type="text"
              placeholder="Lớp"
              onChange={handleClassName}
            />
            <span className={styles.shadow_input1}></span>
          </div>
          <div className={styles.wrap_input1} className={styles.validate_input}>
            <input
              className={styles.input1}
              type="number"
              placeholder="Sỹ số"
              onChange={handleTotal}
            />
            <span className={styles.shadow_input1}></span>
          </div>
          <div className={styles.wrap_input1} className={styles.validate_input}>
            <textarea
              className={styles.input1}
              placeholder="Ghi chú thông tin"
            ></textarea>
            <span className={styles.shadow_input1}></span>
          </div>
          <div className={styles.container_contact1_form_btn}>
            <button className={styles.contact1_form_btn} onClick={Register}>
              Thêm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
