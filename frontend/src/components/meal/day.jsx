import {React, Fragment, useState, useEffect} from "react";

import RecipeCard from "./recipeCard";

export default function Day({keys,dayNumber, meals, mealType}) {
    
    console.log(dayNumber, meals, mealType);
    
    return(
        <Fragment>
            <div className="" style={{
                backgroundColor: "#white",
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "20px",
                marginBottom: "50px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
            }}>
                <h1 className="mb-4" style={{ textAlign: "center" }}>Day {dayNumber}</h1>
                {mealType.map((type) => (
                    <div key={type} className="meal-section">
                        <h2>{type}</h2>
                        {meals[type] ? (
                            <RecipeCard rec={meals[type]} type={type}/>
                        ) : (
                            <p>No recipe found for {type}</p>
                        )}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}