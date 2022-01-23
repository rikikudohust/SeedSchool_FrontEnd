import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/Anounn.module.css";
import Announcements from "../../assets/DummyData/General/Anounncements";
import axios from "axios";
import PublicAnnoun from "../general/PublicAnnoun";
import TeacherAnnoun from "./TeacherAnnoun";

const PersonalAnnoun = () => {
  return (
    <>
      <div className={classes.notification}>
        <TeacherAnnoun />
        <PublicAnnoun />
      </div>
    </>
  );
};

export default PersonalAnnoun;
