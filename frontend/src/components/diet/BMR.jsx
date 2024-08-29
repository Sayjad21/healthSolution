import React, { useState } from "react";

const BMR = () => {
    const [weight, setWeight] = useState(0.0);
    const [height, setHeight] = useState(0.0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(true); // true = male, false = female

    const [bmr, setBMR] = useState('');

    const [calories, setCalories] = useState({
        sedentary: 0,
        lightlyActive: 0,
        moderatelyActive: 0,
        veryActive: 0,
        superActive: 0,
    });

    const calculateBMR = () => {
        if (weight > 0 && height > 0 && age > 0) {
            let calculatedBMR;
            if (gender) {
                calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            setBMR(calculatedBMR);

            setCalories({
                sedentary: calculatedBMR * 1.2,
                lightlyActive: calculatedBMR * 1.375,
                moderatelyActive: calculatedBMR * 1.55,
                veryActive: calculatedBMR * 1.725,
                superActive: calculatedBMR * 1.9,
            });
        } else {
            setBMR(0.0);
        }
    };

    return (
        <div className="bmr-calculator">
            <h2 className="mb-4">BMR Calculator</h2>
            <div className="mb-3">
                <label className="form-label">Age (years):</label>
                <input
                    type="number"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
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
            </div>
            <div className="mb-3">
                <label className="form-label">Gender:</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={gender === true}
                            onChange={() => setGender(true)}
                            className="form-check-input"
                        />
                        <label htmlFor="male" className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === false}
                            onChange={() => setGender(false)}
                            className="form-check-input"
                        />
                        <label htmlFor="female" className="form-check-label">Female</label>
                    </div>
                </div>
            </div>
            
            <div className="button-container" align="center">
                <button className="btn-modern mt-3 mb-5" onClick={calculateBMR}>Calculate BMR</button>
            </div>

            {bmr && <p className="mb-4">Your Basal Metabolic Rate (BMR) is: {bmr.toFixed(2)} calories/day</p>}

            {bmr > 0 && (
                <div>
                    <h3 className="mb-3">Daily Calorie Requirements</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Activity Level</th>
                                <th>Calories/day</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Little to no exercise</td>
                                <td>{calories.sedentary.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Light exercise (1-3 times per week)</td>
                                <td>{calories.lightlyActive.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Moderate exercise (3-5 times per week)</td>
                                <td>{calories.moderatelyActive.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Heavy exercise (5-6 times per week)</td>
                                <td>{calories.veryActive.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Very heavy exercise (6-7 times per week)</td>
                                <td>{calories.superActive.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BMR;



// import {React, Fragment, useState} from "react";

// export default function BMR() {
//     console.log("BMR");

//     const [weight, setWeight] = useState(0.0);
//     const [height, setHeight] = useState(0.0);
//     const [age, setAge] = useState(0);
//     const [gender,setGender] = useState(true); // true = male, false = female

//     const [bmr, setBMR] = useState('');

//     const [calories, setCalories] = useState({
//         sedentary: 0,
//         lightlyActive: 0,
//         moderatelyActive: 0,
//         veryActive: 0,
//         superActive: 0,
//     });

//     const calculateBMR = () => {
//         if(weight > 0 && height > 0 && age > 0){
//             if(gender)
//             {
//                 const bmr = 10*weight + 6.25*height - 5*age + 5;
//                 setBMR(bmr);
//             }
//             else
//             {
//                 const bmr = 10*weight + 6.25*height - 5*age - 161;
//                 setBMR(bmr);
//             }

//             setCalories({
//                 sedentary: bmr * 1.2,
//                 lightlyActive: bmr * 1.375,
//                 moderatelyActive: bmr * 1.55,
//                 veryActive: bmr * 1.725,
//                 superActive: bmr * 1.9,
//             });
//         }
//         else{
//             setBMR(0.0);
//         }
//     };

//     return(
//         <div className="bmr-calculator">
//             <h2 align = "center">BMR Calculator</h2>
//             <div>
//                 <label>Age (years):</label>
//                 <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//             </div>
//             <div>
//                 <label>Weight (kg):</label>
//                 <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//             </div>
//             <div>
//                 <label>Height (cm):</label>
//                 <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
//             </div>
//             <div>
//                 <label>Gender:</label>
//                 <div>
//                 <input
//                     type="radio"
//                     id="male"
//                     name="gender"
//                     value="male"
//                     checked={gender === true}
//                     onChange={() => setGender(true)}
//                 />
//                 <label htmlFor="male">Male</label>
//                 </div>
//                 <div>
//                 <input
//                     type="radio"
//                     id="female"
//                     name="gender"
//                     value="female"
//                     checked={gender === false}
//                     onChange={() => setGender(false)}
//                 />
//                 <label htmlFor="female">Female</label>
//                 </div>
//             </div>
//             <button onClick={calculateBMR}>Calculate BMR</button>
//             {bmr && <p>Your Basal Metabolic Rate (BMR) is: {bmr.toFixed(2)} calories/day</p>}

//             {bmr > 0 && (
//                 <div>
//                 <h3>Daily Calorie Requirements</h3>
//                 <ul>
//                     <li>Little to no exercise: {calories.sedentary.toFixed(2)} calories/day</li>
//                     <li>Light exercise (1-3 times per week): {calories.lightlyActive.toFixed(2)} calories/day</li>
//                     <li>Moderate exercise (3-5 times per week): {calories.moderatelyActive.toFixed(2)} calories/day</li>
//                     <li>Heavy exercise (5-6 times per week): {calories.veryActive.toFixed(2)} calories/day</li>
//                     <li>Heavy exercise (6-7 times per week): {calories.superActive.toFixed(2)} calories/day</li>
//                 </ul>
//                 </div>
//             )}
//         </div>
//     );
// }