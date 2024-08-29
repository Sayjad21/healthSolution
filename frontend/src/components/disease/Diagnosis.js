import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Diagnosis() {
  const [formData, setFormData] = useState({
    bodyPart: '',
    bodySymptom: [],
    duration: [],
  });
  const [diseaseData, setDiseaseData] = useState([]);
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);
  const [filteredDurations, setFilteredDurations] = useState([]);
  const [response, setResponse] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/diseaseData');
        const data = await response.json();
        setDiseaseData(data);
      } catch (error) {
        console.error('Error fetching disease data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'bodySymptom') {
      setFormData(prevData => {
        const newSymptoms = checked
          ? [...prevData.bodySymptom, value]
          : prevData.bodySymptom.filter(symptom => symptom !== value);

        return {
          ...prevData,
          bodySymptom: newSymptoms,
        };
      });
    } else if (name === 'bodyPart') {
      // Filter symptoms and durations based on the selected body part
      const symptoms = diseaseData
        .filter(disease => disease.body_part === value)
        .map(disease => ({
          symptom: disease.body_symptom,
          duration: disease.duration
        }));

      const durations = Array.from(new Set(symptoms.map(s => s.duration))); // Remove duplicate durations

      setFilteredSymptoms(symptoms);
      setFilteredDurations(durations);

      setFormData(prev => ({
        ...prev,
        bodyPart: value,
        bodySymptom: [],
        duration: [],
      }));
    } else if (name === 'duration') {
      setFormData(prevData => {
        const newDurations = checked
          ? [...prevData.duration, value]
          : prevData.duration.filter(duration => duration !== value);

        return {
          ...prevData,
          duration: newDurations,
        };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/diagnosis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setResponse(data); // Store the response data
        console.log(data);
        const { disease } = data; // Extract disease name from the response
        navigate('/doctor-suggestion', { state: { disease } });
      } else {
        console.error('Error submitting data:', response.statusText);
        // Handle error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error (e.g., show an error message to the user)
    }
  };

  // Extract unique body parts for the dropdown
  const bodyParts = Array.from(new Set(diseaseData.map(disease => disease.body_part)));

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Enter Your Symptoms</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="bodyPart" style={styles.label}>Body Part:</label>
          <select
            id="bodyPart"
            name="bodyPart"
            value={formData.bodyPart}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">Select Body Part</option>
            {bodyParts.map((part, index) => (
              <option key={index} value={part}>
                {part}
              </option>
            ))}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Body Symptom:</label>
          <div style={styles.checkboxGroup}>
            {filteredSymptoms.map((item, index) => (
              <div key={index} style={styles.checkboxBox}>
                <label style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="bodySymptom"
                    value={item.symptom}
                    checked={formData.bodySymptom.includes(item.symptom)}
                    onChange={handleChange}
                    style={styles.checkboxInput}
                  />
                  {item.symptom}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Duration:</label>
          <div style={styles.checkboxGroup}>
            {filteredDurations.length > 0 ? (
              filteredDurations.map((duration, index) => (
                <div key={index} style={styles.checkboxBox}>
                  <label style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="duration"
                      value={duration}
                      checked={formData.duration.includes(duration)}
                      onChange={handleChange}
                      style={styles.checkboxInput}
                    />
                    {duration}
                  </label>
                </div>
              ))
            ) : (
              <p style={styles.noData}>No durations available</p>
            )}
          </div>
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxBox: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  checkboxInput: {
    marginRight: '10px',
  },
  noData: {
    color: '#777',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
  }
};
