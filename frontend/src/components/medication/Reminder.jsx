import {React, useState, useEffect, Fragment, useContext} from 'react';
import axios from 'axios';

import { IoAddCircleOutline } from "react-icons/io5";
import { FaTimes } from 'react-icons/fa';

import { userContext } from '../../context/context';

import Navbar from "../utils/Navbar";
import PageFooter from "../utils/PageFooter";
import MedicationReminderForm from './Form';
import Medicine from './Medicine';

import bg3 from '../img/h3.webp';

export default function Reminder() {
    const userValue = useContext(userContext);

    const [showForm, setShowForm] = useState(false);
    const [showNotification, setShowNotification] = useState(false); 
    const [pastMedicationsCount, setPastMedicationsCount] = useState(0);   
    const [reminders, setReminders] = useState([]);

    const toggleForm = () => {
        setShowForm(!showForm); // Toggle showForm state
    };

    const handleCancelNotification = () => {
        setShowNotification(false);
    }

    const fetchMedicines = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getMedication',
                {
                    params: {
                        userId: userValue.user.id,
                    }
                }   
            );

            const currentTime = new Date();
            let pastMedications = 0;

            const updatedReminders = response.data.map(med => {
                const intakeTime = new Date(`${new Date().toDateString()} ${med.intake_time}`);
                
                const isPastTime = intakeTime < currentTime;
    
                if (isPastTime) {
                    pastMedications += 1;
                }
                return {
                    ...med,
                    red_border: isPastTime,  // Add the 'red_border' key
                };
            });

            setReminders(updatedReminders);
            if (pastMedications > 0) {
                setShowNotification(true);
                setPastMedicationsCount(pastMedications);
            }
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    };

    const deleteExpiredMedications = async () => {
        try {
            const currentDate = new Date().toISOString().slice(0, 10);

            await axios.delete(`http://localhost:8000/deleteExpiredMedications/deleteExpiredMedications`, {
                data: { currentDate, userId: userValue.user.id }
            });
        } catch (error) {
            console.error('Error deleting expired medications:', error);
        }
    };

    useEffect(() => {
        const updateMedications = async () => {
            await deleteExpiredMedications();
            fetchMedicines();
        };

        updateMedications();
    }, []);

    return(
        <Fragment>
            <Navbar/>

            {/* MEDICATION REMINDER FORM */}
            { showForm ? (
                <MedicationReminderForm setShowForm={setShowForm} fetchMedicines={fetchMedicines}/>
            ) : (
                <div
                    className="mt-5"
                    style={{
                        height: "auto",
                        width: "auto",
                        backgroundImage: `url(${bg3})`,
                        display: "flex", // Enable Flexbox
                        alignItems: "center", // Align items vertically in the center
                        margin: "50px",
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                    }}
                    onClick={toggleForm}
                >
                    <IoAddCircleOutline size={60} />
                    <h2 className='mt-2 ms-2'>Click here to add a Medication Reminder</h2>
                </div>
            )
            }

            {/* NOTIFICATION */}
            {showNotification && (
                <div
                    style={{
                        margin: "0px 200px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        
                        // backgroundColor: "#ffcccc",
                        // border: "2px solid red",

                        backgroundColor: "beige",
                        border: "2px solid brown",

                        borderRadius: "10px",
                        textAlign: "center",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                    }}
                >
                    <h5 style={{
                        color: "brown",
                        alignContent: "center",
                        marginLeft: "280px",
                        padding: "0",
                    }}>
                        You have {pastMedicationsCount} medications with past intake times. Please take action.
                    </h5>

                    <div>
                        <button 
                            onClick={handleCancelNotification} 
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                padding: '3px',
                                color: 'brown',
                                cursor: 'pointer'
                            }}>
                            <FaTimes size={20} />
                        </button>
                    </div>

                </div>
            )}

            {/* MEDICATION REMINDER LIST */}
            <div style = {{
                        height: "auto",
                        width: "auto",  
                        backgroundImage: `url(${bg3})`, 
                        // backgroundColor: "rgb(0, 0, 255, 0.2)",
                        alignItems: "center",  // Align items vertically in the center
                        margin: "50px",
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                            }}>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "20px"
                }}>
                    Medication List
                </h2>
                
                {/* Display list of blogs */}  
                {
                    reminders.map((med) => (
                        <Medicine key={med.id} medicine={med} fetchMedicines={fetchMedicines} />
                    ))
                }  
            </div>

            <PageFooter/>
        </Fragment>
    );   
}