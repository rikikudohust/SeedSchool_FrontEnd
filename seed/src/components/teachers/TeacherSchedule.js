import React from "react";
import Schedule from "../general/Schedule";
import styles from "../../assets/CSS/general/Schedule.module.css";

const TeacherSchedule = (props) => {
  return (
    <>
      <Schedule />
      <div className={styles.bot}>
        <button className={styles.btnHistory} onClick={props.onShowHistory}>
          {" "}
          Xem lịch sử
        </button>
        <button className={styles.btnUpdate} onClick={props.onAddTimeTable}>
          Cập nhật TKB
        </button>
      </div>
    </>
  );
};

export default TeacherSchedule;
