import React from 'react';
import axios from 'axios';

const HazardButton = () => {
    
    const handleClick = () => {
        axios.post('/send-hazard', {
            thana: 'YOUR_THANA_NAME'
        })
        .then(response => {
            alert(response.data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the hazard signal.');
        });
    };

    return (
        <div className="mt-5">
            <h1>Emergency Hazard Button</h1>
            <button onClick={handleClick} className="btn btn-danger btn-lg">Send Hazard Signal</button>
        </div>
    );
};

export default HazardButton;
