import React, { useState } from 'react';

export default function ExercisePage() {
  const [exerciseType, setExerciseType] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');

  const handleExerciseTypeChange = (event) => {
    setExerciseType(event.target.value);
  };

  const handleMuscleGroupChange = (event) => {
    setMuscleGroup(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the submission logic here
    console.log('Preferred Exercise Type:', exerciseType);
    console.log('Preferred Muscle Group:', muscleGroup);
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
    </div>
  );
}
