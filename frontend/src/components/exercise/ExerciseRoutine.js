import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { userContext } from '../../context/context';

export default function ExerciseRoutine() {
    const userValue = React.useContext(userContext);
    const location = useLocation();
    const { state } = location;
    const { recommendation, selectedDays } = state || {};
    const [routine, setRoutine] = useState(null);
    const [userID, setUserID] = useState(userValue.user.id);

    useEffect(() => {
        const fetchRoutine = async () => {
            try {
                const response = await fetch('http://localhost:8000/getExerciseRoutine', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userID
                    }),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRoutine(data);
            } catch (error) {
                console.error("Error fetching exercise routine:", error);
            }
        };

        fetchRoutine();
    }, []);

    const styles = {
        routinePage: {
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
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
        },
        th: {
            borderBottom: '2px solid #dee2e6',
            padding: '10px',
            textAlign: 'left',
            color: '#343a40',
        },
        td: {
            borderBottom: '1px solid #dee2e6',
            padding: '10px',
            color: '#495057',
        },
    };

    return (
        <div style={styles.routinePage}>
            <h1 style={styles.title}>Your Exercise Routine</h1>
            {routine ? (
                <>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Day</th>
                                <th style={styles.th}>Exercise Name</th>
                                <th style={styles.th}>Duration/Sets</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routine.map((exercise, index) => (
                                <tr key={index}>
                                    <td style={styles.td}>{exercise.day}</td>
                                    <td style={styles.td}>{exercise.exercise_name}</td>
                                    <td style={styles.td}>{exercise.sets_or_duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <div style={styles.detail}>Loading routine details...</div>
            )}
        </div>
    );
}
