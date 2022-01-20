import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/Anounn.module.css";
import axios from "axios";

const TeacherAnnoun = () => {
  const [thongbaochung, setthongbaochung] = useState([]);
  const [news2, setNews] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/teachers/person_news");
      // const data = await response.json();
      setthongbaochung(res.data);
    } catch {
      console.log("Error");
    }
  }, []);

  return (
    <>
      <ul className={classes.notification_body}>
        {thongbaochung.map((element) => {
          return (
            <li className={classes.notification_content}>
              <div className={classes.item}>
                <a href="#" className={classes.item_content}>
                  <span>[Title]</span> {element.title}
                  <br />
                  {element.description}
                </a>
                <p className={classes.item_date}>{element.create_at}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TeacherAnnoun;
