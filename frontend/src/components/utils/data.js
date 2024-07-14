const surveyData = {
    selectOpt : {
      mealCount : [{val:2, text:"Two"},{val:3, text:"Three"},{val:5, text:"Five"}],
      planType :[{val:1, text:"Daily"}, {val:7, text:"Weekly"}, {val:30, text:"Monthly"}],
    },
    diet : [
        {name: "balanced", text: "Balanced Diet"},
        {name: "low-carb", text: "Low-Carb"},
        {name: "low-fat", text: "Low-Fat"},
        {name: "low-sodium", text: "Low-Sodium"},
        {name: "high-protein", text: "High-Protein"},
    ],
    health : [
      {name: "vegan", text: "Vegan (No meat, poultry, fish, dairy, eggs or honey)"},
      {name: "alcohol-free", text: "Alcohol-free (No alcohol used or contained)"},
      {name: "peanut-free", text: "Peanut Free (No peanuts or products containing peanuts)"},
    ],
    mealTypes : {
      3: ["Breakfast","Lunch","Dinner"],
      5: ["Breakfast Snack","Breakfast","Lunch","Afternoon Snack","Dinner"],
      2: ["Brunch","Dinner"],
    },
    calories : {
      min:1800,
      max:2500,
    },
    cuisineType: [
        { name: "american", text: "American" },
        { name: "british", text: "British" },
        { name: "caribbean", text: "Caribbean" },
        { name: "chinese", text: "Chinese" },
        { name: "french", text: "French" },
        { name: "indian", text: "Indian" },
        { name: "italian", text: "Italian" },
        { name: "japanese", text: "Japanese" },
        { name: "mediterranean", text: "Mediterranean" },
        { name: "mexican", text: "Mexican" },
    ],
    dishType: [
        { name: "main course", text: "Main Course" },
        { name: "dessert", text: "Dessert" },
        { name: "salad", text: "Salad" },
        { name: "soup", text: "Soup" },
        { name: "starter", text: "Starter" },
    ],   
};

export default surveyData;