import { ClassOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddFood.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";

const AddFood = (props) => {
  const [avatar, setAvatar] = useState(noFileChosenYet);
  console.log("fdsdasgd");

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
    }
  };

  return (
    <>
      <div className={classes.popup}>
        <div className={classes.popup_content}>
          <h2 id="popup_title">Chỉnh sửa thực đơn</h2>
          <div className={classes.flex_container}>
            <form action="#">
              <div className={classes.radioPick}>
                <div id="radioWrapper">
                  <input
                    type="checkbox"
                    id="breakfast1"
                    name="breakfast1"
                    value=""
                  />
                  <label className={classes.lblRadio} for="breakfast1">
                    {" "}
                    Breakfast{" "}
                  </label>
                  <input type="checkbox" id="lunch1" name="lunch1" value="" />
                  <label className={classes.lblRadio} for="lunch1">
                    {" "}
                    Lunch{" "}
                  </label>
                  <input type="checkbox" id="dinner1" name="dinner1" value="" />
                  <label className={classes.lblRadio} for="dinner1">
                    {" "}
                    Dinner{" "}
                  </label>
                </div>
              </div>
              <div className={classes.inputInfor}>
                <input
                  type="text"
                  className={classes.inputControl}
                  placeholder="Tên món ăn"
                />
              </div>
              <div className={classes.inputInfor}>
                <textarea
                  name=""
                  className={classes.txtDescription}
                  rows={6}
                  placeholder="Thông tin về món ăn"
                ></textarea>
              </div>
            </form>
            <div className={classes.inputFile}>
              <div className={classes.img_place}>
                <img src={avatar} />
              </div>
              <input
                className={ClassOutlined.fileInput}
                type="file"
                onChange={onChange}
              />
            </div>
          </div>
          <div className={classes.btn_container}>
            <button className={classes.addBtn}>Thêm</button>
            <button
              className={classes.cancel__Btn}
              onClick={props.turnOnAddingFood}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFood;
