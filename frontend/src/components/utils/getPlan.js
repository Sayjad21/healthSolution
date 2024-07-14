import axios from "axios";

import surveyData from "./data";
import RECIPE_API from "./edamam";

const getPlan = async (formData) => {
    // Build URL
    console.log("I am getPlan");
    console.log(formData);

    const ID = RECIPE_API.ID;
    const KEY = RECIPE_API.KEY;
    const URL = RECIPE_API.URL;

    const params = buildparams(formData, ID, KEY);
    // console.log(params);
    
    let recipes = {};
    for(let key in params){
        const Api_Adr = encodeURI(URL + params[key]);

        try {
           const response = await axios.get(Api_Adr);

            recipes[key] = response.data.hits;
        } catch (error) {
            console.error(`Error fetching data from ${params[key]}:`, error);
        }
    }

    console.log(recipes);
    return recipes;
};

const buildparams = (formData, ID, KEY) => {
    const data = surveyData;

    const { mealCount, planType, diet, cuisineType, dishType, health, calories } = formData;
    
    const mealTypes = data.mealTypes[data.selectOpt.mealCount[mealCount].val];
    
    const min = Math.round((calories.min) / mealTypes.length);
    const max = Math.round((calories.max) / mealTypes.length);

    const healthLabels = Object.keys(health).filter((label) => health[label] === true);

    let healthLabel = "";
    healthLabels.forEach((label) => {
        healthLabel += `&health=${label}`;
    });

    let queries = {};
    for(let i = 0; i < mealTypes.length; i++) {
        let mealType = mealTypes[i];

        let query = `q=${mealType}&app_id=${ID}&app_key=${KEY}&to=${data.selectOpt.planType[planType].val}&diet=${data.diet[diet].name}${healthLabel}&dishType=${data.dishType[dishType].name}&cuisineType=${data.cuisineType[cuisineType].name}&calories=${min}-${max}`;

        queries[mealType] = query;
    }

    return queries; 
};

export default getPlan;

// https://api.edamam.com/search?q=breakfast&app_id=3220e174&app_key=679534880af89d227038b67d365b1d18&dishType=main course&to=1

/*
    queries is a object, which stores plantype amount urls for every meal type

    selectOpt : {
      mealCount : [{val:2, text:"Two"},{val:3, text:"Three"},{val:5, text:"Five"}],
      planType :[{val:1, text:"Daily"}, {val:7, text:"Weekly"}, {val:30, text:"Monthly"}],
    }

    internal structure example: (for weakly 3 meals)
        breakfast: {7 recipes}
        lunch: {7 recipes}
        dinner: {7 recipes}

    number of total recipe = mealCount * planType

    calorie count in automaically fixed according to serving size
*/