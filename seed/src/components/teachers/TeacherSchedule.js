import React from "react";
import Schedule from "../general/Schedule";
import styles from "../../assets/CSS/general/Schedule.module.css";

const TeacherSchedule = () => {
  return (
    <>
      <Schedule />
      <div className={styles.bot}>
        <button className={styles.btnHistory}> Xem lịch sử</button>
        <button className={styles.btnUpdate}>Cập nhật TKB</button>
      </div>
    </>
  );
};

export default TeacherSchedule;
