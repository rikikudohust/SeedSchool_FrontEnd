import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "../../assets/CSS/admin/Day.module.css";
import styled from "styled-components";
import AddFood from "./AddFood";
import { Create, FoodBank } from "@mui/icons-material";
import button from "../../assets/CSS/general/AddButton.module.css";
import BrkList from "../../assets/DummyData/Breakfast";
import LunchList from "../../assets/DummyData/Lunch";
import DinnerList from "../../assets/DummyData/Dinner";
import header1 from "../../assets/DummyData/Admin/ImageMenu/header1.jpg";
import header2 from "../../assets/DummyData/Admin/ImageMenu/header2.jpg";
import header3 from "../../assets/DummyData/Admin/ImageMenu/header3.jpg";

const Day = (props) => {
  const [meal, setMeal] = useState("breakfast");
  const [onAddingFood, setOnAddingFood] = useState(false);

  const turnOnAddingFood = () => {
    setOnAddingFood(!onAddingFood);
  };

  return (
    <>
      <button className={button.btn} onClick={() => turnOnAddingFood()}>
        <Create />
      </button>
      <div className={classes.btnHolder}>
        <button
          className={classes.btnMeal}
          onClick={() => setMeal("breakfast")}
        >
          Breakfast
        </button>
        <button className={classes.btnMeal} onClick={() => setMeal("lunch")}>
          Lunch
        </button>
        <button className={classes.btnMeal} onClick={() => setMeal("dinner")}>
          Dinner
        </button>
      </div>

      {/* breakfast */}
      {meal == "breakfast" && <Breakfast />}
      {meal == "lunch" && <Lunch />}
      {meal == "dinner" && <Dinner />}
      {onAddingFood == true && <AddFood turnOnAddingFood={turnOnAddingFood} />}
    </>
  );
};

const Breakfast = () => {
  return (
    <>
      <ul className={classes.foodList}>
        {BrkList.map((food) => {
          const { img, title, id } = food;
          return (
            <li key={id}>
              <div>
                <img className={classes.headerImg} src={header1} alt="" />
              </div>
              <img className={classes.foodImg} src={img} alt="err" />
              <div className={classes.foodContainer}>
                <div className={classes.titleContainer}>
                  <h3 className={classes.title}>{title}</h3>
                </div>
                <div>
                  <h5 className={classes.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis, ipsam!
                  </h5>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Lunch = () => {
  return (
    <>
      <ul className={classes.foodList}>
        {LunchList.map((food) => {
          const { img, title, id } = food;
          return (
            <li key={id}>
              <div>
                <img className={classes.headerImg} src={header2} alt="" />
              </div>
              <img className={classes.foodImg} src={img} alt="err" />
              <div className={classes.foodContainer}>
                <div className={classes.titleContainer}>
                  <h3 className={classes.title}>{title}</h3>
                </div>
                <div>
                  <h5 className={classes.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis, ipsam!
                  </h5>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Dinner = () => {
  return (
    <>
      <ul className={classes.foodList}>
        {DinnerList.map((food) => {
          const { img, title, id } = food;
          return (
            <li key={id}>
              <div>
                <img className={classes.headerImg} src={header3} alt="" />
              </div>
              <img className={classes.foodImg} src={img} alt="err" />
              <div className={classes.foodContainer}>
                <div className={classes.titleContainer}>
                  <h3 className={classes.title}>{title}</h3>
                </div>
                <div>
                  <h5 className={classes.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis, ipsam!
                  </h5>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Day;
