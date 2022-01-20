import React, { useState } from "react";
import classes from "../../assets/CSS/admin/Menu.module.css";
import Month from "../../assets/DummyData/Admin/Month";
import EditMenu from "./EditMenu";
import Week from "../../assets/DummyData/Admin/Menu";
import Day from "./Day";

const Menu = (props) => {
  const [day, setDay] = useState(6);
  console.log(day);

  return (
    <>
      {day != 6 && <Day id={day} onTurnOnEditMenu={props.onTurnOnEditMenu} />}
      {/* {day == 6 &&
        Week.map((element) => (
          <div className={classes.block1} onClick={() => setDay(element.id)}>
            <img src={element.img} width="1600px" height="250px" alt="" />
            <span className={classes.price}>
              <span className={classes.weekDay}>{element.day}</span>
            </span>
          </div>
        ))} */}
      {day == 6 &&
        <div className={classes.container}>
          {Week.map((element) => (
            <div className={classes.block} onClick={() => setDay(element.id)}>
              <div className={classes.hover} >
                <h1>{element.day}</h1>
              </div>
              <img src={element.img} />
            </div>
          ))}

        </div>
      }
    </>
  );
};

export default Menu;
