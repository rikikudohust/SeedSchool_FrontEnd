import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/general/ProfileTeacher.module.css";
// import avatar from '../../assets/Icons/teacher.jpg'

const ProfileTeacher = (props) => {
  const [teacher, setTeacher] = useState({});
  const [classs, setClasss] = useState();
  const [comment, setComment] = useState([]);
  const [avatar1, setAvatar] = useState(
    "https://www.steam-ed.ie/wp-content/uploads/2021/08/Female-Avatar.jpeg"
  );
  //Load data ve giao vien
  useEffect(async () => {
    try {
      const res1 = await axios.get(
        "http://127.0.0.1:8000/teachers/" + props.id
      );
      setTeacher(res1.data);
    } catch {
      console.log("Error");
    }
  }, []);

  //Load data ve loi nhan xet
  useEffect(async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/teachers/" + props.id + "/thank"
      );
      setComment(res.data);
    } catch {
      console.log("Error");
    }
  }, []);

  return (
    <>
      <div className={classes.profile}>
        <div className={classes.profile_body}>
          <div className={classes.details_profile}>
            <div className={classes.background_name}>
              <div className={classes.name}>
                <h1 className={classes.name_teacher}>{teacher.name}</h1>
                {/* <p>Hiệu phó</p> */}
              </div>
            </div>
            <div className={classes.information}>
              <h2 className="profile_title details_title">THÔNG TIN CƠ BẢN</h2>
              <p className={classes.details_content}>
                <i className={classes["ti-bolt"]}></i>
                <p>Giới tính: {teacher.sex == 1 ? "Nam" : "Nữ"}</p>{" "}
              </p>
              <p className={classes.details_content}>
                <i className={classes["ti-bolt"]}></i>{" "}
                <p>Thành tích: {teacher.achievement}</p>
                <p>Tuổi : {teacher.age}</p>
              </p>
              <div className={classes.class_master}>
                <p className={classes.class_master_title}>Lớp phụ trách</p>
                <p>
                  <i className={classes["ti-control-play"]}></i> {classs}
                </p>
              </div>
            </div>
            <div className={classes.comment}>
              <p className={classes.comment_title}>Nhận xét</p>
              <ul className={classes.comment_content}>
                {comment.map((element) => (
                  <li className={classes.comment_item}>
                    <div className={classes.item_content}>
                      <h3 className={classes.commentator}>Đào Xuân An</h3>
                      <p className={classes.content}>{element.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={classes.introduce_profile}>
            <div className={classes.body_img}>
              <img
                src={
                  teacher.avatar == null
                    ? avatar1
                    : "http://127.0.0.1:8000/static" + teacher.avatar
                }
                alt="sdasdgd"
                className={classes.profileImage}
              />
            </div>
            <div className={classes.contact}>
              <h2 className={classes.profile_title}>THÔNG TIN LIÊN HỆ</h2>
              <p className={classes.profile_content}>
                <i className={classes["ti-mobile"]}></i>{" "}
                <p>Số điện thoại: {teacher.phone}</p>
              </p>
              <p className={classes.profile_content}>
                <i className={classes["ti-email"]}></i> {teacher.email}
              </p>
            </div>
            <div className={classes.education}>
              <h2 className={classes.profile_title}>HỌC VẤN</h2>
              <p className={classes.profile_content}>
                <i className={classes["ti-star"]}></i> Tốt nghiệp loại giỏi đại
                học sư phạm Hà Nội
              </p>
            </div>
            <div className={classes.position}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTeacher;
