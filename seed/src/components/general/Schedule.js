import React from "react";
import styles from "../../assets/CSS/general/Schedule.module.css";

const Schedule = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.class_schedule}>Class Schedule</div>
          <div className={styles.class_name}>Class name: 1A</div>
        </div>
        <div className={styles.list}>
          <table>
            <tr>
              <th></th>
              <th>Thứ 2</th>
              <th>Thứ 3</th>
              <th>Thứ 4</th>
              <th>Thứ 5</th>
              <th>Thứ 6</th>
            </tr>
            <tr>
              <td>7h-9h</td>
              <td>Thể dục</td>
              <td>Thể dục</td>
              <td>Thể dục</td>
              <td>Thể dục</td>
              <td>Thể dục</td>
            </tr>
            <tr>
              <td>9h-11h</td>
              <td>Chơi cát</td>
              <td>Viết chữ</td>
              <td>Vẽ</td>
              <td>Xếp hình</td>
              <td>Uýnh nhau</td>
            </tr>
            <tr>
              <td>11h-14h</td>
              <td>Nghỉ trưa</td>
              <td>Nghỉ trưa</td>
              <td>Nghỉ trưa</td>
              <td>Nghỉ trưa</td>
              <td>Nghỉ trưa</td>
            </tr>
            <tr>
              <td>14h-16h30</td>
              <td>Đọc sách</td>
              <td>Xem phim</td>
              <td>Uống trà</td>
              <td>Chơi game</td>
              <td>Thể dục</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Schedule;
