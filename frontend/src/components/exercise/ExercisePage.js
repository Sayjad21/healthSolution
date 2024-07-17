import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/context';


export default function ExercisePage() {
    const userValue=React.useContext(userContext);
    const [userID,setUserID]=useState(userValue.user.id);
    const [height, setHeight] = useState(userValue.user.height);
    const [weight, setWeight] = useState(userValue.user.weight);
    const [age, setAge] = useState(userValue.user.age);
    const [gender, setGender] = useState(userValue);
    const [bmi, setBmi] = useState(userValue.user.bmi);
    const [exerciseType, setExerciseType] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [recommendations, setRecommendations] = useState(null);
    const navigate = useNavigate();

    const handleExerciseTypeChange = (event) => {
        setExerciseType(event.target.value);
    };

    const handleMuscleGroupChange = (event) => {
        setMuscleGroup(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            userID,
            height,
            weight,
            age,
            gender,
            bmi,
            exerciseType,
            muscleGroup
        };
        console.log(data);

        try {
            const response = await fetch('http://localhost:3000/userpreference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                const recommendations = result.recommendations;
                console.log('Recommendations:', recommendations);
                setRecommendations(recommendations);
            } else {
                const errorText = await response.text(); 
                console.error('Error:', response.status, response.statusText, errorText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleViewDetails = (recommendation) => {
        navigate('/ExerciseDetails', { state: { recommendation } });
    };


    const styles = {
        exercisePage: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
        },
        title: {
            fontSize: '24px',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        fieldset: {
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
        },
        legend: {
            fontWeight: 'bold',
        },
        radioLabel: {
            display: 'block',
            marginBottom: '10px',
        },
        submitButton: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '20px',
        },
        card: {
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            width: '200px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        cardTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        cardDetail: {
            fontSize: '16px',
            marginBottom: '5px',
        },
        viewDetailsButton: {
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
        }
    };

    return (
        <div style={styles.exercisePage}>
            <h1 style={styles.title}>Choose Your Preferences</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <fieldset style={styles.fieldset}>
                    <legend style={styles.legend}>Preferred Exercise Type</legend>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Cardio"
                            checked={exerciseType === 'Cardio'}
                            onChange={handleExerciseTypeChange}
                        />
                        Cardio
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Strength"
                            checked={exerciseType === 'Strength'}
                            onChange={handleExerciseTypeChange}
                        />
                        Strength
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Flexibility"
                            checked={exerciseType === 'Flexibility'}
                            onChange={handleExerciseTypeChange}
                        />
                        Flexibility
                    </label>
                </fieldset>
                <fieldset style={styles.fieldset}>
                    <legend style={styles.legend}>Preferred Muscle Group</legend>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Chest"
                            checked={muscleGroup === 'Chest'}
                            onChange={handleMuscleGroupChange}
                        />
                        Chest
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Back"
                            checked={muscleGroup === 'Back'}
                            onChange={handleMuscleGroupChange}
                        />
                        Back
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Legs"
                            checked={muscleGroup === 'Legs'}
                            onChange={handleMuscleGroupChange}
                        />
                        Legs
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Arms"
                            checked={muscleGroup === 'Arms'}
                            onChange={handleMuscleGroupChange}
                        />
                        Arms
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Shoulders"
                            checked={muscleGroup === 'Shoulders'}
                            onChange={handleMuscleGroupChange}
                        />
                        Shoulders
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="Core"
                            checked={muscleGroup === 'Core'}
                            onChange={handleMuscleGroupChange}
                        />
                        Core
                    </label>
                </fieldset>
                <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
            
            {recommendations !== null && recommendations.length > 0 ? (
                <div style={styles.cardContainer}>
                    {recommendations.map((recommendation, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.cardTitle}>{recommendation.exercise_name}</div>
                            <div style={styles.cardDetail}>Sets/Duration: {recommendation.sets_or_duration}</div>
                            <button
                                style={styles.viewDetailsButton}
                                onClick={() => handleViewDetails(recommendation)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : recommendations !== null && recommendations.length === 0 ? (
                <div style={styles.emptyMessage}>No recommendations available based on your preferences.</div>
            ) : null}
        </div>
    );
}
