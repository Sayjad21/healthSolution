import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // if needed for dynamic routing
import { userContext } from '../../context/context';

export default function ViewDonor() {
  const userValue = React.useContext(userContext);
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState(userValue.user.email);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:3000/donors');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error("Error fetching donors:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const sendEmail = async (donor) => {
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donorEmail: donor.email,
          recipientEmail: userEmail, // Use the passed userEmail prop
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      alert(`Emails sent to ${donor.email} and ${userEmail}`);
    } catch (error) {
      console.error("Error sending email:", error);
      alert('Error sending email: ' + error.message);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
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
    card: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '15px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '10%',
      marginRight: '15px',
    },
    info: {
      flexGrow: 1,
    },
    error: {
      color: 'red',
      textAlign: 'center',
    },
    button: {
      marginTop: '10px',
      padding: '10px 15px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  if (loading) {
    return <div style={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div style={{ ...styles.container, ...styles.error }}>Error: {error.message}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Blood Donors</h1>
      {donors.map(donor => {
        const genderImage = donor.gender === 'Male' 
          ? 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg' 
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPRQ6LprnPzvvP-_vVO_nhSokwda8CMsnwQ&s';
        return (
          <div key={donor.id} style={styles.card}>
            <img 
              src={genderImage}
              alt={donor.gender}
              style={styles.image}
            />
            <div style={styles.info}>
              <h2>{donor.name}</h2>
              <p>Age: {donor.age}</p>
              <p>Gender: {donor.gender}</p>
              <p>Blood Group: {donor.blood_group}</p>
              <p>Last Donated: {donor.last_donated_blood}</p>
              <p>Phone Number: {donor.phone_number}</p>
              <p>Email: {donor.email}</p>
              <button style={styles.button} onClick={() => sendEmail(donor)}>
                Send Email
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
