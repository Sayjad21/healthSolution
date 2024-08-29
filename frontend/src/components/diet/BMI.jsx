import React, { useState } from "react";

import './css/diet.css'

const BMI = () => {
    const [weight, setWeight] = useState(0.0);
    const [height, setHeight] = useState(0.0);
    const [bmi, setBMI] = useState(0.0);
    const [bmiCategory, setBMICategory] = useState('');

    const calculateBMI = () => {
        if (weight > 0 && height > 0) {
            const calculatedBMI = (weight * 10000) / (height * height);
            setBMI(calculatedBMI);

            if (calculatedBMI <= 18.5) {
                setBMICategory('Underweight');
            } else if (calculatedBMI <= 24.9) {
                setBMICategory('Normal weight');
            } else if (calculatedBMI <= 29.9) {
                setBMICategory('Overweight');
            } else {
                setBMICategory('Obesity');
            }
        } else {
            setBMI(0.0);
            setBMICategory('');
        }
    };

    return (
        <div className="bmi-calculator">
            <h2 className="mb-4">BMI Calculator</h2>
            <div className="mb-3">
                <label className="form-label">Weight (kg):</label>
                <input
                    type="number"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Height (cm):</label>
                <input
                    type="number"
                    className="form-control"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div >

            <div className="button-container" align="center">
                <button className="btn-modern mt-3 mb-5" onClick={calculateBMI}>Calculate BMI</button>
            </div>
            
            {bmi > 0 && (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Result</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Your Body Mass Index (BMI)</td>
                                <td>{bmi.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>You are classified as</td>
                                <td>{bmiCategory}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="mt-4">BMI Categories</h3>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Underweight</td>
                                <td>BMI less than 18.5</td>
                            </tr>
                            <tr>
                                <td>Normal weight</td>
                                <td>BMI 18.5 - 24.9</td>
                            </tr>
                            <tr>
                                <td>Overweight</td>
                                <td>BMI 25 - 29.9</td>
                            </tr>
                            <tr>
                                <td>Obesity</td>
                                <td>BMI 30 or greater</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BMI;


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
