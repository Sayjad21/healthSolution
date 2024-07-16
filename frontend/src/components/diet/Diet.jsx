import {React, Fragment, useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Navbar from "../utils/Navbar";
import BMR from "./BMR";
import BMI from "./BMI";

import "./css/diet.css";

export default function Diet() {
    console.log("Diet");
    
    return (
        <Fragment>
            <Navbar/>
            <div className="header-container">
                <h1 align="center">Transform Your Health: Calculate BMR and BMI</h1>
                <p className="description">
                    Understanding your Basal Metabolic Rate (BMR) and Body Mass Index (BMI) is crucial for achieving your health goals. Your BMR is the number of calories your body needs to maintain basic physiological functions, such as breathing, circulation, and cell production. Knowing this helps tailor your diet to ensure you're consuming the right amount of calories.
                </p>
                <p className="description">
                    The Body Mass Index (BMI) is a key indicator of body fat based on your weight in relation to your height. It helps identify whether you're underweight, normal weight, overweight, or obese, which is vital for assessing potential health risks and maintaining a balanced lifestyle.
                </p>
                <p className="description">
                    Start here to discover how these metrics influence your diet and overall well-being. Use our calculators to get personalized insights and take the first step towards a healthier, more balanced life.
                </p>
            </div>

            <div className="calc-holder mt-3" style={{marginLeft: "35px"}}>
                    <div className="row">
                        <div className="calc-container col-md-6">
                            <BMR />
                        </div>
                        <div className="calc-container col-md-6">
                            <BMI />
                        </div>
                    </div>
            </div>
            
            <div className="header-container">
                <h2 align="center">Why a Balanced Meal According to Your BMI and Calorie Needs is Important</h2>
                <p className="description">
                    Maintaining a balanced diet according to your BMI and calorie needs is essential for optimal health. It ensures that your body gets the right nutrients in the right amounts, helping you maintain a healthy weight, improve energy levels, and reduce the risk of chronic diseases such as heart disease, diabetes, and obesity.
                </p>
                <p className="description">
                    A diet tailored to your BMI and caloric needs helps in regulating body functions, supports mental health, and enhances overall well-being. It allows you to have a varied and balanced intake of proteins, carbohydrates, fats, vitamins, and minerals, which are crucial for bodily functions, growth, and repair.
                </p>
                <p className="description">
                    By understanding your BMI and BMR, you can make informed decisions about your food choices, leading to a more sustainable and healthy lifestyle. Balanced meals provide the necessary energy for daily activities and contribute to better sleep patterns, mood stability, and cognitive function.
                </p>
            </div>

            <div className="button-container" align="center">
                <Link to="/meal">
                    <button className="btn btn-primary">Find Recipes</button>
                </Link>
            </div>

        </Fragment>
    );
}