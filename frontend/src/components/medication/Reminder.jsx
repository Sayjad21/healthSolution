import {React, useState, useEffect, Fragment, useContext} from 'react';
import axios from 'axios';
import { IoAddCircleOutline } from "react-icons/io5";

import { userContext } from '../../context/context';

import Navbar from "../utils/Navbar";
import PageFooter from "../utils/PageFooter";
import MedicationReminderForm from './Form';
import Medicine from './Medicine';

import bg3 from '../img/h3.webp';

export default function Reminder() {
    const userValue = useContext(userContext);

    const [showForm, setShowForm] = useState(false);
    const [reminders, setReminders] = useState([]);

    const toggleForm = () => {
        setShowForm(!showForm); // Toggle showForm state
    };

    const fetchMedicines = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getMedication',
                {
                    params: {
                        userId: userValue.user.id,
                    }
                }   
            );

            console.log(response.data);
            setReminders(response.data);
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