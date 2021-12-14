import React, { useState, useEffect } from "react";
import activities from '../../assets/DummyData/Admin/Activities'
import classes from '../../assets/CSS/general/Activities.module.css'
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Wrapper = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    transition: all 0.75s ease;
    transform: translateX(${props => props.sliderIndex * -80}vw);
    z-index: 0;
`;

const Activities = props => {
    const [sliderIndex, setSliderIndex] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setSliderIndex((sliderIndex + 1) % activities.length);
    //     }, 3000);
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [sliderIndex])

    const clickHandler = type => {
        if (type === "left") {
            setSliderIndex(sliderIndex === 0 ? activities.length - 1 : sliderIndex - 1);
        } else {
            setSliderIndex(sliderIndex === activities.length - 1 ? 0 : sliderIndex + 1);
        }
    }

    return <>
        <div className={classes.container}>

            <div className={classes['arrow-left']}>
                <ArrowLeft onClick={() => clickHandler("left")} />
            </div>
            <Wrapper sliderIndex={sliderIndex}>
                {activities.map(element =>
                    <div className={classes.activity}>
                        <img src={element.img} />
                        <button>{element.date}</button>
                    </div>
                )}
            </Wrapper>
            <div className={classes['arrow-right']}>
                <ArrowRight onClick={() => clickHandler("right")} />
            </div>
        </div>
    </>

}

export default Activities


