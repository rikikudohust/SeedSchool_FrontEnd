import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/ProfileStudent.module.css";

const ProfileStudent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Student, setStudent] = useState([]);
  const [teacherId, setTeacherId] = useState();
  const [teacher, setTeacher] = useState();
  const [classs, setClasss] = useState();
  const [image, setImage] = useState(
    "http://127.0.0.1:8000/static/post_images/nodata_found.png"
  );

  //Lay thong tin hoc sinh
  useEffect(async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:8000/students/" + props.id + "/update"
    );
    const data = await response.json();
    if (data.avatar != null)
      setImage("http://127.0.0.1:8000/static" + data.avatar);
    setStudent(data);
    setIsLoading(false);
  }, []);

  //Lay thong tin giao vien cua hoc sinh do
  useEffect(async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:8000/students/" + props.id + "/teachers"
    );
    const data = await response.json();
    setTeacher(data.name);
    setTeacherId(data.user);
    setIsLoading(false);
  }, [Student]);

  //Lay thong tin ve lop cua hoc sinh thong qua giao vien
  useEffect(async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:8000/teachers/" + teacherId + "/class"
    );
    const data = await response.json();
    setClasss(data.name);
    setIsLoading(false);
  }, [teacherId]);

  return (
    <>
      <div className={classes.popup} onClick={props.closeStudent} />
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.heart_icon}>
            <i class={classes["ti-heart"]}></i>
          </div>
          <div className={classes.profile_img}>
            <img src={image} alt="ảnh bé" />
          </div>
          <div className={classes.profile_name}>{Student.name}</div>
        </div>
        <div className={classes.right}>
          <div className={classes.close_icon}>
            <i class={classes["ti-close"]}></i>
          </div>
          <div className={classes.profile_title}>Thông tin chi tiết</div>
          <div className={classes.infor}>
            <div className={classes.profile_class}>Lớp: {classs}</div>
            <div className={classes.profile_age}>Tuổi: {Student.age}</div>
            <div className={classes.homeroom_teacher}>
              Giáo viên chủ nhiệm: {teacher}
            </div>
            <div className={classes.address}>Địa chỉ: Chưa cập nhật</div>
            <div className={classes.name_parent}>
              Họ tên phụ huynh: Chưa cập nhật
            </div>
            <div className={classes.phone}>
              <i class={classes["ti-mobile"]}></i> Số điện thoại: Chưa cập nhật
            </div>
            <div className={classes.gmail}>
              <i class={classes["ti-email"]}></i> Email: {Student.email}
            </div>
          </div>
          <button type="button">Edit</button>
        </div>
      </div>
    </>
  );
};

export default ProfileStudent;
