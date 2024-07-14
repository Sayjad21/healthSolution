import {React, Fragment, useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import Navbar from "../utils/Navbar";

import surveyData from "../utils/data"; // data for survey

import getPlan from "../utils/getPlan"; // function to get meal plan

export default function MealPlanner() {
    console.log("meal planner");

    const data = surveyData;
    const navigate = useNavigate();

    // radio or select
    const [mealCount, setMealCount] = useState(0); // index  // 2,3,5
    const [planType, setPlanType] = useState(0); // index // daily,weekly,monthly
    const [diet, setDiet] = useState(0); // index 
    const [cuisineType, setCuisineType] = useState(0); // index
    const [dishType, setDishType] = useState(0); // index

    // checkbox
    const [health, setHealth] = useState({}); // name

    // range
    const [calories, setCalories] = useState({min:1800, max:2200});

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form data to send to API or further processing
        const formData = {
            mealCount: mealCount,
            planType: planType,
            diet: diet,
            cuisineType: cuisineType,
            dishType: dishType,
            health: health,
            calories: calories,
        };

        console.log("Form submitted with data:", formData);

        try {
            const recipes = await getPlan(formData);
            console.log("Recipes received:", recipes);
            navigate("/recipe", { state: { formData, recipes } });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }

      };

    return(
        <Fragment>
            <Navbar />
                <div className="container mt-4">
                <h1 className="mb-4">Meal Planner</h1>
                <form onSubmit={handleSubmit}>
                
                {/* Meal Count */}
                <div className="form-group" style={{marginBottom: "30px"}}>
                    <label htmlFor="mealCount"><b>Meal Count</b></label>
                    <select
                    className="form-control"
                    id="mealCount"
                    value={mealCount}
                    onChange={(e) => setMealCount(e.target.value)}
                    >
                    {data.selectOpt.mealCount.map((option,index) => (
                        <option key={option.val} value={index}>
                        {option.text}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Plan Type */}
                <div className="form-group" style={{marginBottom: "30px"}}>
                    <label htmlFor="planType">Plan Type</label>
                    <select
                    className="form-control"
                    id="planType"
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    >

                    {data.selectOpt.planType.map((option,index) => (
                        <option key={option.val} value={index}>
                        {option.text}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Diet */}
                <div className="form-group" style={{marginBottom: "30px"}}>
                    <label htmlFor="diet">Diet</label>
                    <select
                    className="form-control"
                    id="diet"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    >
                    {data.diet.map((option, index) => (
                        <option key={index} value={index}>
                        {option.text}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Cuisine Type */}
                <div className="form-group" style={{marginBottom: "30px"}}>
                    <label>Cuisine Type</label>
                    <select
                    className="form-control"
                    value={cuisineType}
                    onChange={(e) => setCuisineType(e.target.value)}
                    >
                        
                    {data.cuisineType.map((option, index) => (
                        <option key={index} value={index}>
                        {option.text}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Dish Type */}
                <div className="form-group" style={{marginBottom: "30px"}}>
                    <label>Dish Type</label>
                    <select
                    className="form-control"
                    value={dishType}
                    onChange={(e) => setDishType(e.target.value)}
                    >

                    {data.dishType.map((option, index) => (
                        <option key={index} value={index}>
                        {option.text}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Health */}
                <div className="form-group" style={{marginBottom: "30px"}}>
                    <label>Health</label>
                    <div>
                    {data.health.map((option) => (
                        <div key={option.name} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={option.name}
                            checked={health[option.name] || false}
                            onChange={(e) =>
                            setHealth({
                                ...health,
                                [option.name]: e.target.checked,
                            })
                            }
                        />
                        <label className="form-check-label" htmlFor={option.name}>
                            {option.text}
                        </label>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Calories Range */}
                <div className="form-row" style={{marginBottom: "30px", display: "flex", justifyContent: "space-between"}}>
                    <div className="form-group col-md-6" style={{paddingRight: "20px"}}>
                        <label htmlFor="caloriesMin">Calories (Min)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="caloriesMin"
                            value={calories.min}
                            onChange={(e) => {
                                let minValue = Math.max(0, e.target.value);
                                minValue = Math.min(minValue, calories.max);

                                setCalories({ ...calories, min: minValue });
                            }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="caloriesMax">Calories (Max)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="caloriesMax"
                            value={calories.max}
                            onChange={(e) =>
                                setCalories({ ...calories, max: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary" style={{marginBottom: "30px"}}>
                    Submit
                </button>
                </form>
            </div>
    </Fragment>
    );
}