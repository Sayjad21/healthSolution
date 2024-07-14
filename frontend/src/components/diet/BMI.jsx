import React, { useState } from "react";

export default function BMI() {
    const [weight, setWeight] = useState(0.0);
    const [height, setHeight] = useState(0.0); 
    const [bmi, setBMI] = useState(0.0);
    const [bmiCategory, setBMICategory] = useState('');

    const calculateBMI = () => {
        if (weight > 0 && height > 0) {
            const bmi = (weight * 10000) / (height * height);
            setBMI(bmi);

            if (bmi <= 18.5) {
                setBMICategory('Underweight');
            } else if (bmi <= 24.9) {
                setBMICategory('Normal weight');
            } else if (bmi <= 29.9) {
                setBMICategory('Overweight');
            } else {
                setBMICategory('Obesity');
            }
        } else {
            setBMI(0.0);
        }
    };

    return (
        <div className="bmi-calculator" style={styles.container}>
            <h2 style={styles.heading}>BMI Calculator</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Weight (kg):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Height (cm):</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={styles.input}
                />
            </div>
            <button onClick={calculateBMI} style={styles.button}>Calculate BMI</button>
            {bmi > 0 && (
                <div style={styles.result}>
                    <p>Your Body Mass Index (BMI) is: {bmi.toFixed(2)}</p>
                    <p>You are classified as: {bmiCategory}</p>
                    <h3>BMI Categories</h3>
                    <ul style={styles.categories}>
                        <li>Underweight: BMI less than 18.5</li>
                        <li>Normal weight: BMI 18.5 - 24.9</li>
                        <li>Overweight: BMI 25 - 29.9</li>
                        <li>Obesity: BMI 30 or greater</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        marginBottom: "1.5rem",
        color: "#333",
    },
    inputGroup: {
        marginBottom: "1rem",
    },
    label: {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: "bold",
        color: "#555",
    },
    input: {
        width: "100%",
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ddd",
    },
    button: {
        display: "block",
        width: "100%",
        padding: "0.75rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold",
    },
    result: {
        marginTop: "2rem",
    },
    categories: {
        listStyleType: "none",
        paddingLeft: "0",
    },
};


// import {React, Fragment, useState} from "react";

// export default function BMI() {
//     console.log("BMI");

//     const [weight, setWeight] = useState(0.0);
//     const [height, setHeight] = useState(0.0); 

//     const [bmi, setBMI] = useState(0.0);
//     const [bmiCategory, setBMICategory] = useState('');

//     const calculateBMI = () => {
//         if(weight > 0 && height > 0){
//             const bmi = (weight * 10000) / (height * height);
//             setBMI(bmi);

//             if (bmi <= 18.5) {
//                 setBMICategory('Underweight');
//             } 
//             else if (18.5 < bmi && bmi <= 24.9) {
//                 setBMICategory('Normal weight');
//             } 
//             else if (24.9 < bmi && bmi <= 29.9) {
//                 setBMICategory('Overweight');
//             } 
//             else {
//                 setBMICategory('Obesity');
//             }
//         }
//         else{
//             setBMI(0.0);
//         }
//     };

//     return(
//         <div className="bmi-calculator">
//             <h2 align="center">BMI Calculator</h2>
//             <div>
//                 <label>Weight (kg):</label>
//                 <input
//                 type="number"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Height (cm):</label>
//                 <input
//                 type="number"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//                 />
//             </div>
//             <button onClick={calculateBMI}>Calculate BMI</button>
//             {bmi > 0 && (
//                 <div>
//                 <p>Your Body Mass Index (BMI) is: {bmi.toFixed(2)}</p>
//                 <p>You are classified as: {bmiCategory}</p>
//                 <h3>BMI Categories</h3>
//                 <ul>
//                     <li>Underweight: BMI less than 18.5</li>
//                     <li>Normal weight: BMI 18.5 - 24.9</li>
//                     <li>Overweight: BMI 25 - 29.9</li>
//                     <li>Obesity: BMI 30 or greater</li>
//                 </ul>
//                 </div>
//             )}

//         </div>
//     );
// }
