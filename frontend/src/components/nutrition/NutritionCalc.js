import React, { useState } from 'react';

const ingredientsData = {
  Grain: [
    { name: 'Rice', kcal: 130, protein: 2.7, fat: 0.3, carbs: 28.2, fiber: 0.4 },
    { name: 'Wheat', kcal: 339, protein: 13.2, fat: 1.9, carbs: 71.2, fiber: 12.2 },
    { name: 'Oats', kcal: 389, protein: 16.9, fat: 6.9, carbs: 66.3, fiber: 10.6 },
    { name: 'Barley', kcal: 354, protein: 12.5, fat: 2.3, carbs: 73.5, fiber: 17.3 },
    { name: 'Quinoa', kcal: 368, protein: 14.1, fat: 6.1, carbs: 64.2, fiber: 7.0 },
    { name: 'Millet', kcal: 378, protein: 11.0, fat: 4.2, carbs: 73.0, fiber: 8.5 },
    { name: 'Rye', kcal: 335, protein: 9.5, fat: 1.5, carbs: 74.0, fiber: 13.0 },
    { name: 'Corn', kcal: 365, protein: 9.4, fat: 4.7, carbs: 74.3, fiber: 7.3 },
    { name: 'Sorghum', kcal: 329, protein: 11.3, fat: 3.3, carbs: 72.2, fiber: 6.5 },
    { name: 'Teff', kcal: 367, protein: 13.3, fat: 2.4, carbs: 73.1, fiber: 8.0 },
  ],
  Vegetable: [
    { name: 'Spinach', kcal: 23, protein: 2.9, fat: 0.4, carbs: 3.6, fiber: 2.2 },
    { name: 'Broccoli', kcal: 34, protein: 2.8, fat: 0.4, carbs: 6.6, fiber: 2.6 },
    { name: 'Carrot', kcal: 41, protein: 0.9, fat: 0.2, carbs: 9.6, fiber: 2.8 },
    { name: 'Kale', kcal: 49, protein: 4.3, fat: 0.9, carbs: 8.8, fiber: 1.3 },
    { name: 'Cauliflower', kcal: 25, protein: 1.9, fat: 0.3, carbs: 4.9, fiber: 2.0 },
    { name: 'Tomato', kcal: 18, protein: 0.9, fat: 0.2, carbs: 3.9, fiber: 1.2 },
    { name: 'Zucchini', kcal: 17, protein: 1.2, fat: 0.3, carbs: 3.1, fiber: 1.0 },
    { name: 'Peas', kcal: 81, protein: 5.4, fat: 0.4, carbs: 14.5, fiber: 5.7 },
    { name: 'Bell Pepper', kcal: 20, protein: 0.9, fat: 0.2, carbs: 4.7, fiber: 1.7 },
    { name: 'Asparagus', kcal: 20, protein: 2.2, fat: 0.2, carbs: 3.7, fiber: 1.8 },
    { name: 'Eggplant', kcal: 25, protein: 1.0, fat: 0.2, carbs: 5.9, fiber: 3.0 },
    { name: 'Brussels Sprouts', kcal: 43, protein: 3.4, fat: 0.3, carbs: 9.0, fiber: 3.8 },
    { name: 'Cucumber', kcal: 16, protein: 0.7, fat: 0.1, carbs: 3.6, fiber: 0.5 },
    { name: 'Cabbage', kcal: 25, protein: 1.3, fat: 0.1, carbs: 5.8, fiber: 2.5 },
    { name: 'Sweet Potato', kcal: 86, protein: 1.6, fat: 0.1, carbs: 20.1, fiber: 3.0 },
    { name: 'Lettuce', kcal: 15, protein: 1.4, fat: 0.2, carbs: 2.9, fiber: 1.0 },
    { name: 'Radish', kcal: 16, protein: 0.7, fat: 0.1, carbs: 3.4, fiber: 1.6 },
    { name: 'Onion', kcal: 40, protein: 1.1, fat: 0.1, carbs: 9.3, fiber: 1.7 },
    { name: 'Garlic', kcal: 149, protein: 6.4, fat: 0.5, carbs: 33.1, fiber: 2.1 },
    { name: 'Pumpkin', kcal: 26, protein: 1.0, fat: 0.1, carbs: 6.5, fiber: 0.5 },
    { name: 'Green Beans', kcal: 31, protein: 1.8, fat: 0.2, carbs: 7.1, fiber: 3.4 },
    { name: 'Celery', kcal: 16, protein: 0.7, fat: 0.2, carbs: 3.0, fiber: 1.6 },
    { name: 'Mushroom', kcal: 22, protein: 3.1, fat: 0.3, carbs: 3.3, fiber: 1.0 },
    { name: 'Beetroot', kcal: 43, protein: 1.6, fat: 0.2, carbs: 9.6, fiber: 2.8 },
    { name: 'Leek', kcal: 61, protein: 1.5, fat: 0.3, carbs: 14.2, fiber: 1.8 },
    { name: 'Artichoke', kcal: 47, protein: 3.5, fat: 0.2, carbs: 11.0, fiber: 5.4 },
    { name: 'Turnip', kcal: 28, protein: 0.9, fat: 0.1, carbs: 6.4, fiber: 1.8 },
    { name: 'Radicchio', kcal: 23, protein: 1.5, fat: 0.3, carbs: 4.5, fiber: 1.0 },
    { name: 'Swiss Chard', kcal: 19, protein: 1.8, fat: 0.2, carbs: 3.7, fiber: 1.6 },
    { name: 'Okra', kcal: 33, protein: 2.0, fat: 0.2, carbs: 7.5, fiber: 3.2 },
    { name: 'Parsnip', kcal: 75, protein: 1.5, fat: 0.3, carbs: 17.5, fiber: 5.0 },
    { name: 'Butternut Squash', kcal: 45, protein: 1.0, fat: 0.1, carbs: 11.0, fiber: 2.0 },
    { name: 'Green Bell Pepper', kcal: 20, protein: 0.9, fat: 0.2, carbs: 4.7, fiber: 1.7 },
    { name: 'Yellow Bell Pepper', kcal: 27, protein: 1.0, fat: 0.3, carbs: 6.6, fiber: 2.1 },
    { name: 'Red Bell Pepper', kcal: 31, protein: 1.0, fat: 0.3, carbs: 6.2, fiber: 2.1 },
    { name: 'Watercress', kcal: 11, protein: 1.3, fat: 0.1, carbs: 1.3, fiber: 0.5 },
    { name: 'Endive', kcal: 17, protein: 1.2, fat: 0.2, carbs: 3.2, fiber: 1.4 },
    { name: 'Kohlrabi', kcal: 27, protein: 1.5, fat: 0.2, carbs: 6.2, fiber: 3.6 },
    { name: 'Arugula', kcal: 25, protein: 2.6, fat: 0.4, carbs: 3.7, fiber: 1.6 },
    { name: 'Chicory', kcal: 24, protein: 1.5, fat: 0.3, carbs: 4.9, fiber: 1.4 },
],
meat : [
  { name: 'Chicken Breast', kcal: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0 },
  { name: 'Beef Sirloin', kcal: 206, protein: 26, fat: 11, carbs: 0, fiber: 0 },
  { name: 'Pork Tenderloin', kcal: 143, protein: 24, fat: 3.5, carbs: 0, fiber: 0 },
  { name: 'Lamb Chop', kcal: 282, protein: 25, fat: 21, carbs: 0, fiber: 0 },
  { name: 'Turkey Breast', kcal: 135, protein: 30, fat: 1, carbs: 0, fiber: 0 },
  { name: 'Duck Breast', kcal: 195, protein: 23, fat: 11, carbs: 0, fiber: 0 },
  { name: 'Veal Cutlet', kcal: 172, protein: 26, fat: 7, carbs: 0, fiber: 0 },
  { name: 'Bison Steak', kcal: 143, protein: 28, fat: 7, carbs: 0, fiber: 0 },
  { name: 'Rabbit', kcal: 173, protein: 33, fat: 7, carbs: 0, fiber: 0 },
  { name: 'Venison', kcal: 157, protein: 30, fat: 7, carbs: 0, fiber: 0 },
  { name: 'Goat Meat', kcal: 143, protein: 25, fat: 5, carbs: 0, fiber: 0 },
  { name: 'Elk Steak', kcal: 137, protein: 29, fat: 5, carbs: 0, fiber: 0 },
  { name: 'Quail', kcal: 134, protein: 25, fat: 8, carbs: 0, fiber: 0 },
  { name: 'Ostrich', kcal: 97, protein: 22, fat: 2, carbs: 0, fiber: 0 },
  { name: 'Pigeon', kcal: 142, protein: 26, fat: 7, carbs: 0, fiber: 0 },
],

fish : [
  { name: 'Salmon', kcal: 206, protein: 22, fat: 13, carbs: 0, fiber: 0 },
  { name: 'Tuna', kcal: 132, protein: 28, fat: 1, carbs: 0, fiber: 0 },
  { name: 'Trout', kcal: 148, protein: 20, fat: 6, carbs: 0, fiber: 0 },
  { name: 'Sardines', kcal: 208, protein: 25, fat: 11, carbs: 0, fiber: 0 },
  { name: 'Mackerel', kcal: 305, protein: 25, fat: 21, carbs: 0, fiber: 0 },
  { name: 'Cod', kcal: 105, protein: 23, fat: 1, carbs: 0, fiber: 0 },
  { name: 'Halibut', kcal: 140, protein: 27, fat: 4, carbs: 0, fiber: 0 },
  { name: 'Herring', kcal: 251, protein: 25, fat: 17, carbs: 0, fiber: 0 },
  { name: 'Snapper', kcal: 128, protein: 26, fat: 2, carbs: 0, fiber: 0 },
  { name: 'Sole', kcal: 91, protein: 18, fat: 1, carbs: 0, fiber: 0 },
  { name: 'Flounder', kcal: 91, protein: 18, fat: 1, carbs: 0, fiber: 0 },
  { name: 'Catfish', kcal: 105, protein: 22, fat: 5, carbs: 0, fiber: 0 },
  { name: 'Bass', kcal: 126, protein: 24, fat: 5, carbs: 0, fiber: 0 },
  { name: 'Swordfish', kcal: 121, protein: 22, fat: 5, carbs: 0, fiber: 0 },
  { name: 'Tilapia', kcal: 128, protein: 26, fat: 2, carbs: 0, fiber: 0 },
],

dairy : [
  { name: 'Whole Milk', kcal: 61, protein: 3.2, fat: 3.25, carbs: 4.8, fiber: 0 },
  { name: 'Skim Milk', kcal: 34, protein: 3.4, fat: 0.1, carbs: 5.1, fiber: 0 },
  { name: 'Greek Yogurt', kcal: 97, protein: 10, fat: 0.4, carbs: 4, fiber: 0 },
  { name: 'Cheddar Cheese', kcal: 402, protein: 25, fat: 33, carbs: 1.3, fiber: 0 },
  { name: 'Mozzarella Cheese', kcal: 280, protein: 22, fat: 17, carbs: 2.2, fiber: 0 },
  { name: 'Cottage Cheese', kcal: 98, protein: 11, fat: 4.3, carbs: 3.4, fiber: 0 },
  { name: 'Cream Cheese', kcal: 342, protein: 6.2, fat: 34.6, carbs: 4.1, fiber: 0 },
  { name: 'Butter', kcal: 717, protein: 0.9, fat: 81, carbs: 0.1, fiber: 0 },
  { name: 'Yogurt', kcal: 59, protein: 3.5, fat: 1.5, carbs: 6.5, fiber: 0 },
  { name: 'Ice Cream', kcal: 207, protein: 3.5, fat: 11, carbs: 24, fiber: 0 },
  { name: 'Sour Cream', kcal: 193, protein: 2.6, fat: 19, carbs: 4.6, fiber: 0 },
  { name: 'Parmesan Cheese', kcal: 431, protein: 38, fat: 29, carbs: 3.2, fiber: 0 },
  { name: 'Ricotta Cheese', kcal: 174, protein: 11, fat: 13, carbs: 6, fiber: 0 },
  { name: 'Evaporated Milk', kcal: 134, protein: 7.7, fat: 7.7, carbs: 10.5, fiber: 0 },
  { name: 'Condensed Milk', kcal: 321, protein: 7.5, fat: 9, carbs: 55, fiber: 0 },
],

fat : [
  { name: 'Olive Oil', kcal: 884, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Butter', kcal: 717, protein: 0.9, fat: 81, carbs: 0.1, fiber: 0 },
  { name: 'Coconut Oil', kcal: 862, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Avocado Oil', kcal: 884, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Canola Oil', kcal: 884, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Ghee', kcal: 900, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Lard', kcal: 900, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Margarine', kcal: 717, protein: 0.2, fat: 81, carbs: 0, fiber: 0 },
  { name: 'Peanut Oil', kcal: 884, protein: 0, fat: 100, carbs: 0, fiber: 0 },
  { name: 'Sesame Oil', kcal: 884, protein: 0, fat: 100, carbs: 0, fiber: 0 },
]
};

export default function NutritionCalc() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totals, setTotals] = useState({ kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 });

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedIngredient(''); // Reset ingredient selection
  };

  const handleIngredientChange = (e) => {
    setSelectedIngredient(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const addIngredient = () => {
    if (selectedIngredient && selectedClass && quantity) {
      const ingredient = ingredientsData[selectedClass].find(ing => ing.name === selectedIngredient);
      if (ingredient) {
        const quantityValue = parseFloat(quantity);
        const newTotals = {
          kcal: totals.kcal + ingredient.kcal * quantityValue,
          protein: totals.protein + ingredient.protein * quantityValue,
          fat: totals.fat + ingredient.fat * quantityValue,
          carbs: totals.carbs + ingredient.carbs * quantityValue,
          fiber: totals.fiber + ingredient.fiber * quantityValue,
        };
        setTotals(newTotals);
        setSelectedIngredient(''); // Reset ingredient selection
        setQuantity(''); // Reset quantity
      }
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    subheading: {
      margin: '20px 0 10px',
      color: '#555',
    },
    select: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    totals: {
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    totalsHeading: {
      margin: '0 0 10px',
      color: '#333',
    },
    totalsItem: {
      margin: '5px 0',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Nutrition Calculator</h1>

      <h2 style={styles.subheading}>Select Ingredient Class:</h2>
      <select value={selectedClass} onChange={handleClassChange} style={styles.select}>
        <option value="">-- Select Class --</option>
        {Object.keys(ingredientsData).map(cls => (
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>

      {selectedClass && (
        <>
          <h2 style={styles.subheading}>Select Ingredient:</h2>
          <select value={selectedIngredient} onChange={handleIngredientChange} style={styles.select}>
            <option value="">-- Select Ingredient --</option>
            {ingredientsData[selectedClass].map(ingredient => (
              <option key={ingredient.name} value={ingredient.name}>{ingredient.name}</option>
            ))}
          </select>
        </>
      )}

      {selectedIngredient && (
        <>
          <h2 style={styles.subheading}>Enter Quantity (grams):</h2>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Quantity in grams"
            style={styles.input}
          />
          <button onClick={addIngredient} style={styles.button}>Add Ingredient</button>
        </>
      )}

      <div style={styles.totals}>
        <h2 style={styles.totalsHeading}>Totals:</h2>
        <p style={styles.totalsItem}>Kcal: {totals.kcal.toFixed(2)}</p>
        <p style={styles.totalsItem}>Protein: {totals.protein.toFixed(2)} g</p>
        <p style={styles.totalsItem}>Fat: {totals.fat.toFixed(2)} g</p>
        <p style={styles.totalsItem}>Carbs: {totals.carbs.toFixed(2)} g</p>
        <p style={styles.totalsItem}>Fiber: {totals.fiber.toFixed(2)} g</p>
      </div>
    </div>
  );
}