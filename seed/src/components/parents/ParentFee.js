import React from "react";
import classes from "../../assets/CSS/parents/ParentFee.module.css";

const ParentFee = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.infor}>
          <div className={classes.infor_title}>Dữ liệu học sinh</div>
          <div className={classes.infor_detail}>
            <div className={classes.col3} className={classes.name_student}>
              <span className={classes.fw600}>Tên học sinh: </span>Đạt Nguyễn
            </div>
            <div className={classes.col3} className={classes.name_parent}>
              <span className={classes.fw600}>Tên phụ huynh:</span> An Đào
            </div>
            <div className={classes.col3} className={classes.name_class}>
              <span className={classes.fw600}>Lớp:</span> IT1-07
            </div>
          </div>
        </div>
        <div className={classes.title}>Chi tiết học phí</div>
        <div className={classes.detail_tuition}>
          <table className={classes.table_tuition}>
            <tr className={classes.tableConfig}>
              <th className={classes.tableConfig}>Tên dịch vụ</th>
              <th className={classes.tableConfig}>Phí dịch vụ(vnd)</th>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Tiền học</td>
              <td className={classes.tableConfig}>100.000</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Tiền ăn</td>
              <td className={classes.tableConfig}>100.000</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Phí phát sinh</td>
              <td className={classes.tableConfig}>100.000</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Tiền giảm</td>
              <td className={classes.tableConfig}>-100.000</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>
                <span className={classes.fw600}>Tổng</span>
              </td>
              <td className={classes.tableConfig}>300.000</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ParentFee;
