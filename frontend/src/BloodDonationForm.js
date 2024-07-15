import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BloodDonationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodType: '',
    lastDonation: '',
    contactNumber: '',
    email: '',
    diseaseHistory: {
      hepatitisB: false,
      cancer: false,
      HIV: false,
      other: ''
    }
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        diseaseHistory: { ...formData.diseaseHistory, [name]: checked }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { hepatitisB, cancer, HIV } = formData.diseaseHistory;
    if (hepatitisB || cancer || HIV) {
      alert('You cannot donate blood due to your disease history.');
    } else {
      try {
        const response = await fetch('http://localhost:3000/donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Form submitted:', formData);
          console.log('Response:', result);
          setSuccessMessage('Your form has been successfully submitted. Thank you for your donation!');
        } else {
          console.error('Failed to submit form:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleNavigateToDonors = () => {
    navigate('/donors');
  };

  const styles = {
    formContainer: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputField: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      marginTop: '10px',
    },
    navigateButton: {
      backgroundColor: '#007BFF',
    },
    fieldset: {
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
    },
    legend: {
      fontWeight: 'bold',
    },
    checkboxLabel: {
      display: 'block',
      marginBottom: '10px',
    },
    successMessage: {
      color: 'green',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.formContainer}>
      <h1 style={styles.title}>Blood Donation Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.inputField}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          style={styles.inputField}
          required
          min="18"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={styles.inputField}
          required
        >
          <option value="" disabled>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          style={styles.inputField}
          required
        >
          <option value="" disabled>Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input
          type="date"
          name="lastDonation"
          placeholder="Last Donated"
          value={formData.lastDonation}
          onChange={handleChange}
          style={styles.inputField}
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          style={styles.inputField}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.inputField}
          required
        />
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Disease History</legend>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="hepatitisB"
              checked={formData.diseaseHistory.hepatitisB}
              onChange={handleChange}
            />
            Hepatitis B
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="cancer"
              checked={formData.diseaseHistory.cancer}
              onChange={handleChange}
            />
            Cancer
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="HIV"
              checked={formData.diseaseHistory.HIV}
              onChange={handleChange}
            />
            HIV
          </label>
          <input
            type="text"
            name="other"
            placeholder="Other"
            value={formData.diseaseHistory.other}
            onChange={handleChange}
            style={styles.inputField}
          />
        </fieldset>
        <button
          type="submit"
          style={styles.button}
        >
          Submit
        </button>
      </form>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      <button
        onClick={handleNavigateToDonors}
        style={{ ...styles.button, ...styles.navigateButton }} // Use same button style
      >
        View Donors
      </button>
    </div>
  );
}
