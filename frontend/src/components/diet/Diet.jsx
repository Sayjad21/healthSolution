import { React, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "../utils/Navbar";
import BMR from "./BMR";
import BMI from "./BMI";

import "./css/diet.css";

export default function Diet() {
    return (
        <Fragment>
            <Navbar />

            <div className="header-container" style={{
                backgroundColor: "rgb(0, 0, 255, 0.1)",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                margin: "20px"
            }}>
                <h1 align="center">Transform Your Health: Master BMR and BMI</h1>

                <p className="description">
                    Unlock the secrets to a healthier life by mastering two crucial metrics: **Basal Metabolic Rate (BMR)** and **Body Mass Index (BMI)**. Understanding these concepts will empower you to make informed decisions about your health.
                </p>

                <h2>What is Basal Metabolic Rate (BMR)?</h2>
                <ul className="description">
                    <li>**BMR** is the number of calories your body needs at rest to maintain essential functions like breathing, circulation, and cell production.</li>
                    <li>Think of BMR as the baseline fuel your body needs to keep its engine running smoothly.</li>
                    <li>Knowing your BMR helps tailor your diet to ensure you're consuming the right amount of calories, whether you're aiming to lose, gain, or maintain weight.</li>
                </ul>

                <h2>Why is Body Mass Index (BMI) Important?</h2>
                <ul className="description">
                    <li>**BMI** assesses your body weight in relation to your height, categorizing it into:</li>
                    <ul>
                        <li>Underweight</li>
                        <li>Normal weight</li>
                        <li>Overweight</li>
                        <li>Obese</li>
                    </ul>
                    <li>While BMI doesn’t measure body fat directly, it provides a useful snapshot of your overall body composition.</li>
                    <li>BMI helps identify potential health risks and provides a quick check-in on your body’s weight status.</li>
                </ul>

                <h2>How to Use BMR and BMI for Better Health</h2>
                <ul className="description">
                    <li>**Calculate your BMR** to understand your body's energy needs.</li>
                    <li>**Use BMI** to assess whether you’re in a healthy weight range.</li>
                    <li>Combine these insights to tailor your diet and exercise plans effectively.</li>
                    <li>Empower yourself with knowledge to make healthier food choices and lifestyle adjustments.</li>
                </ul>

                <h2>Why a Balanced Diet Matters</h2>
                <ul className="description">
                    <li>Maintaining a balanced diet according to your BMI and calorie needs is crucial for optimal health.</li>
                    <li>A balanced diet ensures you receive the right nutrients in the right amounts, supporting overall well-being and reducing the risk of chronic diseases.</li>
                    <li>Balanced meals help regulate body functions, support mental health, and enhance energy levels.</li>
                </ul>

                <h2>Take the Next Step!</h2>
                <p className="description">
                    Ready to transform your health? Use our BMR and BMI calculators to get personalized insights and start your journey towards a healthier, more balanced life. Explore our recipe page for meal ideas tailored to your goals and visit our exercise page for workouts that complement your new health strategy.
                </p>
            </div>

            <div className="calc-holder mt-3" style={{ marginLeft: "35px" }}>
                <div className="row">
                    <div className="calc-container col-md-6" style ={{
                        padding: "20px",
                        borderRadius: "20px",
                        backgroundColor: "rgb(0, 0, 255, 0.1)",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                        // margin: "20px"
                    }}>
                        <BMR />
                    </div>
                    <div className="calc-container col-md-6" style ={{
                        padding: "20px",
                        borderRadius: "20px",
                        backgroundColor: "rgb(0, 0, 255, 0.1)",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                        // margin: "20px"
                    }}>
                        <BMI />
                    </div>
                </div>
            </div>

            <div className="header-container" style={{
                backgroundColor: "rgb(0, 0, 255, 0.1)",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                margin: "20px"
            }}>
                <h2 align="center">Why a Balanced Diet According to Your BMI and Caloric Needs is Vital</h2>
                <p className="description">
                    Adapting your diet to meet your BMI and caloric needs isn't just about avoiding excess calories—it's about providing your body with the right nutrients to thrive. Here's why this approach is essential for your well-being:
                </p>
                <ul className="description">
                    <li><strong>Optimal Weight Management:</strong> By aligning your diet with your BMI, you ensure that you're neither overconsuming nor underconsuming calories. This balance helps maintain a healthy weight, reducing the risk of weight-related health issues.</li>
                    <li><strong>Enhanced Energy Levels:</strong> A well-balanced diet fuels your body with the energy it needs to power through daily activities and exercise. Say goodbye to sluggish afternoons and hello to sustained energy!</li>
                    <li><strong>Lowered Health Risks:</strong> Eating according to your caloric needs and BMI can significantly decrease the risk of chronic diseases like heart disease, diabetes, and hypertension. A proactive approach to your diet can be a powerful tool in disease prevention.</li>
                    <li><strong>Support for Mental Well-Being:</strong> Nutrients play a crucial role in brain health. A balanced diet supports mental clarity, emotional stability, and cognitive function, helping you stay focused and positive.</li>
                </ul>
                <p className="description">
                    Here’s a snapshot of how different nutrients contribute to your health:
                </p>
                <table className="description" style={{
                    width: "100%",
                    padding: "10px",
                    borderCollapse: "collapse",
                    border: "1px solid black",
                    textAlign: "left"
                }}>
                    <thead>
                        <tr style={{
                            backgroundColor: "#f4f4f4", // Light grey background for the header
                            borderBottom: "2px solid black"
                        }}>
                            <th style={{
                                padding: "10px",
                                borderRight: "1px solid black"
                            }}>Nutrient</th>
                            <th style={{
                                padding: "10px"
                            }}>Role in Your Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{
                            borderBottom: "1px solid #ddd"
                        }}>
                            <td style={{
                                padding: "10px",
                                borderRight: "1px solid #ddd"
                            }}>Proteins</td>
                            <td style={{
                                padding: "10px"
                            }}>Building blocks for muscle repair, immune function, and hormone production.</td>
                        </tr>
                        <tr style={{
                            borderBottom: "1px solid #ddd"
                        }}>
                            <td style={{
                                padding: "10px",
                                borderRight: "1px solid #ddd"
                            }}>Carbohydrates</td>
                            <td style={{
                                padding: "10px"
                            }}>Primary source of energy, crucial for physical activity and brain function.</td>
                        </tr>
                        <tr style={{
                            borderBottom: "1px solid #ddd"
                        }}>
                            <td style={{
                                padding: "10px",
                                borderRight: "1px solid #ddd"
                            }}>Fats</td>
                            <td style={{
                                padding: "10px"
                            }}>Essential for cell membrane integrity, energy storage, and absorption of fat-soluble vitamins.</td>
                        </tr>
                        <tr style={{
                            borderBottom: "1px solid #ddd"
                        }}>
                            <td style={{
                                padding: "10px",
                                borderRight: "1px solid #ddd"
                            }}>Vitamins</td>
                            <td style={{
                                padding: "10px"
                            }}>Support immune function, bone health, and metabolism. Each vitamin has a unique role in keeping your body in balance.</td>
                        </tr>
                        <tr>
                            <td style={{
                                padding: "10px",
                                borderRight: "1px solid #ddd"
                            }}>Minerals</td>
                            <td style={{
                                padding: "10px"
                            }}>Contribute to bone strength, fluid balance, and nerve function. Vital for overall bodily functions.</td>
                        </tr>
                    </tbody>
                </table>

                <p className="description">
                    By embracing a balanced diet tailored to your BMI and caloric needs, you're not just enhancing your physical health—you're also investing in your mental and emotional well-being.
                </p>

                <div className="button-container" align="center">
                    <Link to="/meal">
                        <button className="btn-modern">Find Recipes</button>
                    </Link>
                </div>
            </div>

            <div className="header-container" style={{
                backgroundColor: "rgb(0, 0, 255, 0.1)",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                margin: "20px"
            }}>
                <h2 align="center">Get Moving: Discover Our Exercise Page</h2>

                <p className="description">
                    Elevate your wellness journey by integrating regular physical activity into your routine. Exercise is a vital component of a healthy lifestyle, offering a multitude of benefits beyond just burning calories. Here’s why staying active is crucial:
                </p>

                <ul className="description" style={{ fontSize: "16px", marginLeft: "20px" }}>
                    <li><strong>Cardiovascular Health:</strong> Regular exercise strengthens your heart, improves circulation, and reduces the risk of heart disease.</li>
                    <li><strong>Muscle Strength:</strong> Resistance and strength training enhance muscle tone, boost metabolism, and increase overall physical endurance.</li>
                    <li><strong>Mood Boost:</strong> Physical activity stimulates the release of endorphins, which help alleviate stress and enhance your mood.</li>
                    <li><strong>Weight Management:</strong> Exercise helps regulate weight by burning calories and building muscle mass, contributing to a balanced metabolism.</li>
                    <li><strong>Improved Sleep:</strong> Engaging in regular physical activity promotes better sleep quality and can help combat insomnia.</li>
                </ul>

                <p className="description">
                    On our Exercise page, you’ll find a wealth of resources tailored to support your fitness journey. Here’s what you can expect:
                </p>

                <ol className="description" style={{ fontSize: "16px", marginLeft: "20px" }}>
                    <li><strong>Customized Workout Plans:</strong> Discover exercise routines designed to meet your specific fitness goals, whether it's weight loss, muscle building, or overall fitness.</li>
                    <li><strong>Expert Tips:</strong> Access advice and strategies from fitness experts to enhance your workout efficiency and prevent injuries.</li>
                    <li><strong>Interactive Resources:</strong> Utilize tools and guides that provide step-by-step instructions and track your progress.</li>
                    <li><strong>Community Support:</strong> Connect with other fitness enthusiasts for motivation, support, and sharing experiences.</li>
                    <li><strong>Varied Workouts:</strong> Explore a range of exercises, from cardio and strength training to flexibility and balance exercises.</li>
                </ol>

                <p className="description">
                    Whether you’re just starting your fitness journey or looking to optimize your current routine, our Exercise page has something for everyone. Get inspired, stay motivated, and achieve your fitness goals with our comprehensive resources.
                </p>

                <div className="button-container" align="center">
                    <Link to="/exercise">
                        <button className="btn-modern">Explore Exercise Plans</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

// import {React, Fragment, useState, useEffect} from "react";
// import {Link} from "react-router-dom";

// import Navbar from "../utils/Navbar";
// import BMR from "./BMR";
// import BMI from "./BMI";

// import "./css/diet.css";

// export default function Diet() {
//     console.log("Diet");
    
//     return (
//         <Fragment>
//             <Navbar/>
//             <div className="header-container">
//                 <h1 align="center">Transform Your Health: Calculate BMR and BMI</h1>
//                 <p className="description">
//                     Understanding your Basal Metabolic Rate (BMR) and Body Mass Index (BMI) is crucial for achieving your health goals. Your BMR is the number of calories your body needs to maintain basic physiological functions, such as breathing, circulation, and cell production. Knowing this helps tailor your diet to ensure you're consuming the right amount of calories.
//                 </p>
//                 <p className="description">
//                     The Body Mass Index (BMI) is a key indicator of body fat based on your weight in relation to your height. It helps identify whether you're underweight, normal weight, overweight, or obese, which is vital for assessing potential health risks and maintaining a balanced lifestyle.
//                 </p>
//                 <p className="description">
//                     Start here to discover how these metrics influence your diet and overall well-being. Use our calculators to get personalized insights and take the first step towards a healthier, more balanced life.
//                 </p>
//             </div>

//             <div className="calc-holder mt-3" style={{marginLeft: "35px"}}>
//                     <div className="row">
//                         <div className="calc-container col-md-6">
//                             <BMR />
//                         </div>
//                         <div className="calc-container col-md-6">
//                             <BMI />
//                         </div>
//                     </div>
//             </div>
            
//             <div className="header-container">
//                 <h2 align="center">Why a Balanced Meal According to Your BMI and Calorie Needs is Important</h2>
//                 <p className="description">
//                     Maintaining a balanced diet according to your BMI and calorie needs is essential for optimal health. It ensures that your body gets the right nutrients in the right amounts, helping you maintain a healthy weight, improve energy levels, and reduce the risk of chronic diseases such as heart disease, diabetes, and obesity.
//                 </p>
//                 <p className="description">
//                     A diet tailored to your BMI and caloric needs helps in regulating body functions, supports mental health, and enhances overall well-being. It allows you to have a varied and balanced intake of proteins, carbohydrates, fats, vitamins, and minerals, which are crucial for bodily functions, growth, and repair.
//                 </p>
//                 <p className="description">
//                     By understanding your BMI and BMR, you can make informed decisions about your food choices, leading to a more sustainable and healthy lifestyle. Balanced meals provide the necessary energy for daily activities and contribute to better sleep patterns, mood stability, and cognitive function.
//                 </p>
//             </div>

//             <div className="button-container" align="center">
//                 <Link to="/meal">
//                     <button className="btn btn-primary">Find Recipes</button>
//                 </Link>
//             </div>

//         </Fragment>
//     );
// }