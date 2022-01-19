import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddAnounn.module.css";

const AddAnounn = (props) => {
  const [actor, setActor] = useState(3);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor(value);
  };

  return (
    <>
      <div className={classes.turnOff} onClick={props.closeAddAnounn}></div>
      <div className={classes.popup_content}>
        <h2 className={classes.popup_title}>Thêm thông báo</h2>
        <form>
          <p className={classes.actor}>Đối tượng :</p>
          <input
            type="radio"
            id="ph"
            className={classes.actor}
            name="actorPick"
            value="1"
            onChange={handleChange}
          />
          <label for="ph">Phụ huynh</label>
          <input
            type="radio"
            id="gv"
            className={classes.actor}
            name="actorPick"
            value="2"
            onChange={handleChange}
          />
          <label for="gv">Giáo viên</label>
          <input
            type="radio"
            id="all"
            className={classes.actor}
            name="actorPick"
            value="3"
            onChange={handleChange}
          />
          <label for="all">Toàn trường</label>
          <div className={classes.description}>
            <input
              type="text"
              className={classes.tieuDeTB}
              name="headName"
              placeholder=" Tiêu đề"
            />
            {actor == 1 && (
              <input
                type="text"
                placeholder=" Email"
                className={classes.emailTB}
              />
            )}
            {actor == 2 && (
              <input
                type="text"
                placeholder=" Email"
                className={classes.emailTB}
              />
            )}
            <br />
            <textarea
              className={classes.noiDungTB}
              placeholder="Nội dung"
            ></textarea>
          </div>
        </form>
        <button className={classes.them_btn99}>Thêm</button>
      </div>
    </>
  );
};

export default AddAnounn;
