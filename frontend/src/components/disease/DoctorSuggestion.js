import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const cityPoliceStationMap = {
  Dhaka: [
    'Shahjahanpur',
    'Mirpur',
    'Lalbagh',
    'Mugdha',
    'Motijheel',
    'Ramna',
    'Shahbag',
    'Tejgaon',
    'Gulshan',
    'Badda',
    'Dhanmondi',
    'Sher-e-Bangla Nagar',
    'Cantonment'
  ],
  Chittagong: [
    'Panchlaish'
  ],
  Sylhet: [
    'Kotwali'
  ],
  Rajshahi: [
    'Rajpara'
  ],
  Khulna: [
    'Khalishpur'
  ],
  Barisal: [
    'Kotwali'
  ],
  Rangpur: [
    'Sadar'
  ],
  Comilla: [
    'Kotwali'
  ],
  Mymensingh: [
    'Sadar'
  ],
  Bogra: [
    'Sadar'
  ],
  Faridpur: [
    'Sadar'
  ]
};

export default function DoctorSuggestion() {
  const location = useLocation();
  const { disease } = location.state;
  const [specialization, setSpecialization] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('');
  const [policeStations, setPoliceStations] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchSpecialization = async () => {
      try {
        const response = await fetch('http://localhost:8000/get-specialization', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ disease }),
        });

        if (!response.ok) {
          throw new Error('Disease not found');
        }

        const data = await response.json();
        setSpecialization(data.specialization);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSpecialization();
  }, [disease]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setPoliceStations(cityPoliceStationMap[city] || []);
    setSelectedPoliceStation(''); // Reset police station
  };

  const handlePoliceStationChange = (event) => {
    setSelectedPoliceStation(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedCity || !selectedPoliceStation) {
      alert("Please select both city and police station.");
      return;
    }

    const requestBody = {
      city: selectedCity,
      policeStation: selectedPoliceStation,
      specialization: specialization
    };

    try {
      const response = await fetch('http://localhost:8000/get-doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }

      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching doctors. Please try again.');
    }
  };

  const handleBookAppointment = async (doctor) => {
    if (!doctor.doctor_name || !doctor.email) {
      alert('Doctor information is incomplete.');
      return;
    }

    const requestBody = {
      doctorName: doctor.doctor_name,
      email: doctor.email,
    };

    try {
      const response = await fetch('http://localhost:8000/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to book the appointment');
      }

      const data = await response.json();
      alert(`Appointment booked successfully with Dr. ${doctor.doctor_name}.`);
    } catch (error) {
      console.error('Error:', error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Doctor Suggestion</h1>
      <div style={styles.resultBox}>
        <p style={styles.resultText}><strong>Diagnosis:</strong> {disease}</p>
        {specialization ? (
          <p style={styles.resultText}><strong>Specialization:</strong> {specialization}</p>
        ) : error ? (
          <p style={styles.resultText}><strong>Error:</strong> {error}</p>
        ) : (
          <p style={styles.resultText}>Loading specialization...</p>
        )}
      </div>

      <div style={styles.dropdownContainer}>
        <label style={styles.label}>
          City:
          <select value={selectedCity} onChange={handleCityChange} style={styles.dropdown}>
            <option value="">Select a city</option>
            {Object.keys(cityPoliceStationMap).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
      </div>

      <div style={styles.dropdownContainer}>
        <label style={styles.label}>
          Police Station:
          <select value={selectedPoliceStation} onChange={handlePoliceStationChange} style={styles.dropdown} disabled={!selectedCity}>
            <option value="">Select a police station</option>
            {policeStations.map(station => (
              <option key={station} value={station}>{station}</option>
            ))}
          </select>
        </label>
      </div>

      <button style={styles.button} onClick={handleSubmit}>
        Submit
      </button>

      {doctors.length > 0 && (
        <div style={styles.doctorList}>
          {doctors.map((doctor, index) => (
            <div key={index} style={styles.doctorCard}>
              <img src={doctor.picture || 'https://www.freeiconspng.com/uploads/doctors-transparent-icon-10.png'} alt={`Dr. ${doctor.doctor_name}`} style={styles.doctorImage} />
              <div style={styles.doctorDetails}>
                <h2 style={styles.doctorName}>{doctor.doctor_name}</h2>
                <p><strong>Specialization:</strong> {doctor.doctor_speciality}</p>
                <p><strong>Contact:</strong> {doctor.contact_info}</p>
                <p><strong>Hospital:</strong> {doctor.hospital_name}</p>
                <p><strong>City:</strong> {selectedCity}</p>
                <p><strong>Police Station:</strong> {selectedPoliceStation}</p>
                <button style={styles.bookButton} onClick={() => handleBookAppointment(doctor)}>
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
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
  resultBox: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    marginBottom: '20px'
  },
  resultText: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  dropdownContainer: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
    color: '#333'
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  doctorList: {
    marginTop: '20px',
  },
  doctorCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  doctorImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  bookButton: {
    marginTop: '10px',
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
