import React, { useState, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../../context/context';

import bg3 from '../img/h3.webp';

const MedicationReminderForm = ({ setShowForm, fetchMedicines }) => {
    const userValue = useContext(userContext);

    const [medicationName, setMedicationName] = useState('');
    const [intakeTime, setIntakeTime] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Creating medication reminder:', medicationName, intakeTime, initialDate, finalDate);
        
        try {
            const response = await axios.post('http://localhost:8000/addMedication', {
                medication_name: medicationName,
                intake_time: intakeTime,
                initial_date: initialDate,
                final_date: finalDate,
                user_id: userValue.user.id,
            });
            console.log('Medication reminder created:', response.data);
            
            setMedicationName('');
            setIntakeTime('');
            setInitialDate('');
            setFinalDate('');
            
            fetchMedicines(); // Fetch reminders to update the list
            setShowForm(false); // Set showForm to false to hide the form

        } catch (error) {
            console.error('Error creating medication reminder:', error);
        }
    };

    const handleCancel = () => {
        setShowForm(false); // Set showForm to false to hide the form
    };

    return (
        <div className="mt-5" 
             style={{
                height: "auto",
                width: "auto",
                backgroundImage: `url(${bg3})`,
                margin: "50px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
             }}>
            <h2 className='mb-3'>Create a New Medication Reminder</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="medicationName" className="form-label">Medication Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="medicationName"
                        placeholder="Enter medication name"
                        value={medicationName}
                        onChange={(e) => setMedicationName(e.target.value)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        }}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="intakeTime" className="form-label">Intake Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="intakeTime"
                        value={intakeTime}
                        onChange={(e) => setIntakeTime(e.target.value)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        }}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="initialDate" className="form-label">Initial Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="initialDate"
                        value={initialDate}
                        onChange={(e) => setInitialDate(e.target.value)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        }}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="finalDate" className="form-label">Final Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="finalDate"
                        value={finalDate}
                        onChange={(e) => setFinalDate(e.target.value)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        }}
                        required
                    />
                </div>
                <div className="mt-5 mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary me-2">Create Reminder</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default MedicationReminderForm;
