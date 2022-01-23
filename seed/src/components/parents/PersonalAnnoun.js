import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/Anounn.module.css";
import Announcements from "../../assets/DummyData/General/Anounncements";
import axios from "axios";
import PublicAnnoun from "../general/PublicAnnoun";
import ParentsAnounn from "./ParentsAnounn";
import ClassAnnoun from "./ClassAnnoun";

const PersonalAnnoun = () => {
  const [choice, setChoice] = useState(1);

  return (
    <>
      <div className={classes.btnHolder}>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setChoice(1);
          }}
        >
          Thông báo chung
        </button>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setChoice(2);
          }}
        >
          Dành riêng cho bạn
        </button>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setChoice(3);
          }}
        >
          Thông báo lớp
        </button>
      </div>
      <div className={classes.notification}>
        {choice == 1 && <PublicAnnoun />}
        {choice == 2 && <ParentsAnounn />}
        {choice == 3 && <ClassAnnoun />}
      </div>
    </>
  );
};

export default PersonalAnnoun;
