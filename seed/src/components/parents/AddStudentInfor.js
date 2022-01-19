import axios from "axios";
import React, { useState } from "react";
import styles from "../../assets/CSS/parents/AddStudentInfor.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";

const AddStudentInfor = (props) => {
  const [name, setName] = useState();
  const [parentName, setParentName] = useState();
  const [parentNumber, setParentNumber] = useState();
  const [sex, setSex] = useState(0);
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [file, setFile] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleParentName = (event) => {
    setParentName(event.target.value);
  };
  const handleParentNumber = (event) => {
    setParentNumber(event.target.value);
  };
  const handleSex = (event) => {
    setSex(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };

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
      setFile(event.target.files[0]);
    }
  };

  const Update = async () => {
    let data = new FormData();
    data.append("user", localStorage.getItem("id"));
    data.append("avatar", file, file.name);
    console.log(file.name);
    data.append("name", name);
    data.append("sex", sex);
    data.append("nameparent", parentName);
    data.append("phoneparent", parentNumber);
    data.append("address", address);
    data.append("age", age);
    data.append("email", email);
    console.log(data);
    console.log();
    try {
      const res = await axios.put(
        "http://127.0.0.1:8000/students/" + localStorage.getItem("id"),
        data
      );
    } catch {
      alert("wrong input");
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
                onChange={handleName}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Họ và tên bố hoặc mẹ"
                onChange={handleParentName}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Số điện thoại phụ huynh"
                onChange={handleParentNumber}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Giới tính"
                onChange={handleSex}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Địa chỉ"
                onChange={handleAddress}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Email"
                onChange={handleEmail}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Tuổi"
                onChange={handleAge}
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
          <button className={styles.addBtn} onClick={Update}>
            Thêm
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStudentInfor;
