import React, { Fragment, useState } from "react";

export default function BMR() {
    console.log("BMR");

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
        <div className="bmr-calculator" style={styles.container}>
            <h2 style={styles.heading}>BMR Calculator</h2>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Age (years):</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={styles.input}
                />
            </div>
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
            <div style={styles.inputGroup}>
                <label style={styles.label}>Gender:</label>
                <div style={styles.radioGroup}>
                    <div style={styles.radioItem}>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={gender === true}
                            onChange={() => setGender(true)}
                            style={styles.radio}
                        />
                        <label htmlFor="male" style={styles.radioLabel}>Male</label>
                    </div>
                    <div style={styles.radioItem}>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === false}
                            onChange={() => setGender(false)}
                            style={styles.radio}
                        />
                        <label htmlFor="female" style={styles.radioLabel}>Female</label>
                    </div>
                </div>
            </div>
            <button onClick={calculateBMR} style={styles.button}>Calculate BMR</button>
            {bmr && <p style={styles.result}>Your Basal Metabolic Rate (BMR) is: {bmr.toFixed(2)} calories/day</p>}

            {bmr > 0 && (
                <div style={styles.calorieContainer}>
                    <h3 style={styles.calorieHeading}>Daily Calorie Requirements</h3>
                    <ul style={styles.calorieList}>
                        <li style={styles.calorieItem}>Little to no exercise: {calories.sedentary.toFixed(2)} calories/day</li>
                        <li style={styles.calorieItem}>Light exercise (1-3 times per week): {calories.lightlyActive.toFixed(2)} calories/day</li>
                        <li style={styles.calorieItem}>Moderate exercise (3-5 times per week): {calories.moderatelyActive.toFixed(2)} calories/day</li>
                        <li style={styles.calorieItem}>Heavy exercise (5-6 times per week): {calories.veryActive.toFixed(2)} calories/day</li>
                        <li style={styles.calorieItem}>Heavy exercise (6-7 times per week): {calories.superActive.toFixed(2)} calories/day</li>
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
    radioGroup: {
        display: "flex",
        justifyContent: "space-around",
    },
    radioItem: {
        display: "flex",
        alignItems: "center",
    },
    radio: {
        marginRight: "0.5rem",
    },
    radioLabel: {
        color: "#555",
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
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    result: {
        textAlign: "center",
        marginTop: "1rem",
        fontSize: "1.25rem",
        color: "#333",
    },
    calorieContainer: {
        marginTop: "2rem",
    },
    calorieHeading: {
        fontSize: "1.5rem",
        marginBottom: "1rem",
        color: "#333",
    },
    calorieList: {
        listStyleType: "none",
        paddingLeft: "0",
    },
    calorieItem: {
        marginBottom: "0.5rem",
        fontSize: "1rem",
        color: "#555",
    },
};






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