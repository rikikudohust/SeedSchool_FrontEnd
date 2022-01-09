import React from "react";
import styles from "../../assets/CSS/admin/AddClass.module.css";

const AddClass = (props) => {
  return (
    <>
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
            />
            <span className={styles.shadow_input1}></span>
          </div>
          <div className={styles.wrap_input1} className={styles.validate_input}>
            <input className={styles.input1} type="text" placeholder="Lớp" />
            <span className={styles.shadow_input1}></span>
          </div>
          <div className={styles.wrap_input1} className={styles.validate_input}>
            <input
              className={styles.input1}
              type="number"
              placeholder="Sỹ số"
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
            <button className={styles.contact1_form_btn}>
              <span> Thêm </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
