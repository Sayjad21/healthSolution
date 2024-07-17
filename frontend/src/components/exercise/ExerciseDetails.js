import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/context';

export default function ExerciseDetails() {
    const userValue = React.useContext(userContext);
    const location = useLocation();
    const [userID, setUserID] = useState(userValue.user.id);
    const { recommendation } = location.state || {}; // Handle undefined state
    const navigate = useNavigate();

    const [selectedDays, setSelectedDays] = useState([]);

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const handleDayChange = (event) => {
        const day = event.target.value;
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day)
                : [...prevSelectedDays, day]
        );
    };

    const handleAddToRoutine = async () => {
        try {
            const response = await fetch('http://localhost:8000/addToExerciseRoutine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userID, // Replace with actual user ID
                    recommendationId: recommendation.id, // Assuming recommendation has an id property
                    days: selectedDays,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Routine added successfully:", data);

            // Navigate to the routine page or show a success message
            navigate('/ExerciseRoutine', { state: { recommendation, selectedDays } });
        } catch (error) {
            console.error("Error adding to routine:", error);
            // Handle error (e.g., show an error message)
        }
    };

    const handleVideoButtonClick = () => {
        if (recommendation && recommendation.video_url) {
            window.open(recommendation.video_url, '_blank');
        }
    };

    const styles = {
        detailsPage: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
            maxWidth: '800px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            padding: '40px',
            marginLeft: '430px',
        },
        title: {
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#343a40',
        },
        detail: {
            fontSize: '18px',
            marginBottom: '10px',
            color: '#495057',
        },
        backButton: {
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            marginRight: '10px',
            transition: 'background-color 0.3s ease',
        },
        addToRoutineButton: {
            backgroundColor: '#ffc107',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
        },
        videoButton: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
        },
        daySelector: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '20px',
            backgroundColor: '#f1f3f5',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        dayLabel: {
            fontSize: '16px',
            marginBottom: '10px',
            color: '#495057',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Added box shadow for depth
        },
        checkbox: {
            display: 'none', // Hide default checkbox
        },
        checkedBox: {
            backgroundColor: '#007BFF',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
    };

    return (
        <div>
            <div style={styles.detailsPage}>
                <h1 style={styles.title}>Exercise Details</h1>
                {recommendation ? (
                    <>
                        <div style={styles.detail}><strong>Exercise Name:</strong> {recommendation.exercise_name}</div>
                        <div style={styles.detail}><strong>Type:</strong> {recommendation.exercise_type}</div>
                        <div style={styles.detail}><strong>Muscle Group:</strong> {recommendation.exercise_muscle_groups}</div>
                        <div style={styles.detail}><strong>Sets/Duration:</strong> {recommendation.sets_or_duration}</div>
                        <div style={styles.detail}><strong>Required Equipment:</strong> {recommendation.equipment_needed}</div>
                        <div style={styles.detail}><strong>Description:</strong> {recommendation.description}</div>
                        {recommendation.video_url && (
                            <div style={styles.buttonContainer}>
                                <button style={styles.videoButton} onClick={handleVideoButtonClick}>
                                    Watch Video
                                </button>
                            </div>
                        )}
                        <div style={styles.daySelector}>
                            <strong>Select Days:</strong>
                            {daysOfWeek.map((day) => (
                                <label key={day} style={{ ...styles.dayLabel, backgroundColor: selectedDays.includes(day) ? '#cce5ff' : '#f8f9fa' }}>
                                    <input
                                        type="checkbox"
                                        value={day}
                                        onChange={handleDayChange}
                                        checked={selectedDays.includes(day)}
                                        style={styles.checkbox}
                                    />
                                    {day}
                                </label>
                            ))}
                        </div>
                        <div style={styles.buttonContainer}>
                            <button
                                style={styles.addToRoutineButton}
                                onClick={handleAddToRoutine}
                            >
                                Add to Routine
                            </button>
                        </div>
                    </>
                ) : (
                    <div style={styles.detail}>No details available.</div>
                )}
                <div style={styles.buttonContainer}>
                    <button style={styles.backButton} onClick={() => navigate('/')}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
