import {React, Fragment, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../utils/Navbar";
import Day from "./day";

import surveyData from "../utils/data";

export default function Recipe() {
    console.log("recipe");

    const location = useLocation();
    const formData = location.state.formData || {}; // get form data from location state
    const recipes = location.state.recipes || {}; // get recipes from location state
    
    const plantype = surveyData.selectOpt.planType[formData.planType].val; // daily or weekly? 1 or 7
    const mealtype = surveyData.mealTypes[surveyData.selectOpt.mealCount[formData.mealCount].val]; // 2,3,5  // contains a list
    const meals = mealtype.length; // 2,3,5

    // console.log(plantype,mealtype,meals);
    // console.log(formData);
    // console.log(recipes);

    function getRandomNumber(start, end) {
        return Math.floor(Math.random() * (end - start)) + start;
    }

    const generateDayMeals = () => {
        let days = [];
        for (let day = 0; day < plantype; day++) {
            let dayMeals = {};
            for (let meal = 0; meal < meals; meal++) {
                const randomIndex = getRandomNumber(0, recipes[mealtype[meal]].length);
                dayMeals[mealtype[meal]] = recipes[mealtype[meal]][randomIndex];
            }
            days.push(
                <Day key={day} dayNumber={day + 1} meals={dayMeals} mealType={mealtype}/>
            );
        }
        return days;
    };

    return(
        <Fragment>
            <Navbar />
            <div className="" style={{margin: "10px 90px 10px 90px"}}>
                {
                    generateDayMeals()
                }
            </div>
        </Fragment>
    );
}
