import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/general/ProfileTeacher.module.css";
// import avatar from '../../assets/Icons/teacher.jpg'

const ProfileTeacher = (props) => {
  const [teacher, setTeacher] = useState({});
  const [classs, setClasss] = useState();
  const [comment, setComment] = useState([]);
  const [avatar, setAvatar] = useState(
    "http://127.0.0.1:8000/static/post_images/default_avatar.png"
  );
  console.log(props.id);
  //Load data ve giao vien
  useEffect(async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/teachers/" + props.id + "/update"
      );
      setTeacher(res.data);
      if (res.data.avatar != null)
        setAvatar("http://127.0.0.1:8000/static" + res.data.avatar);
      console.log(res.data);

      const reRes = await axios.get(
        "http://127.0.0.1:8000/teachers/" + props.id + "/class"
      );
      setClasss(reRes.data.name);
      console.log(reRes.data);
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
                <i className={classes["ti-bolt"]}></i> Là giáo viên trông trẻ
                suất sắc, có kinh nghiệm trông trẻ hơn 30 năm. Là 1 người tâm
                huyết với nghề và được nhiều phụ huynh ưa thích. Đạt thành tích
                giáo viên trông trẻ cấp tỉnh.{" "}
              </p>
              <p className={classes.details_content}>
                <i className={classes["ti-bolt"]}></i> Đạt được 1 số giải thưởng
                lớn cấp thành phố như: ru ngủ trẻ cấp tốc, biếng ăn không đáng
                lo ngại, dỗ trẻ siêu tốc,...
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
                  "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg"
                }
                alt="sdasdgd"
              />
            </div>
            <div className={classes.contact}>
              <h2 className={classes.profile_title}>THÔNG TIN LIÊN HỆ</h2>
              <p className={classes.profile_content}>
                <i className={classes["ti-mobile"]}></i>{" "}
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
            <div className={classes.position}>
              <h2 className={classes.profile_title}>CHỨC VỤ</h2>
              <p className={classes.profile_content}>
                <i className={classes["ti-medall"]}></i> Hiệu phó
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTeacher;
