import { React, useContext } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { userContext } from '../../context/context';

import './css/hazardButton.css';    

const HazardButton = () => {
    const userValue = useContext(userContext);

    const handleClick = async () => {
        try {
            // Fetch hospital data
            const response = await axios.get('http://localhost:8000/getMail', {
                params: {
                    id: userValue.user.id,           
                    thana: userValue.user.police_station,
                }
            });
            
            const hospData = response.data;
            const hospitalData = hospData.hospitals.map(hospital => ({
                name: hospital.name,
                email: hospital.email
            }));
            
            const resp = await axios.get('http://localhost:8000/sendMail/sendMail', {
                params: {
                    hospitalData: hospitalData,
                    user: userValue.user.name,
                    thana: userValue.user.police_station,
                    age: userValue.user.age,
                    weight: userValue.user.weight,
                    blood_group: userValue.user.blood_group,
                }
            });
            
            // Extract hospital names for the toast message
            const hospitalNames = hospitalData.map(hospital => hospital.name).join(', ');

            toast.success(`Email was sent successfully to: ${hospitalNames}`, {
                position: 'top-center',
                autoClose: 5000,  // Duration to show the toast (5000ms = 5s)
                hideProgressBar: true,  // Hide the progress bar if you don't need it
                closeOnClick: true,  // Allow closing the toast by clicking on it
                pauseOnHover: true,  // Pause the auto-close timer when the mouse is over the toast
                draggable: true,  // Allow dragging the toast
            });

            console.log(resp.data);
        } catch (error) {
            toast.error('Failed to send email.', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            console.error(error);
        }
    };

    return (
        <div className="mt-3 mb-3">
            <button onClick={handleClick} className="button-dsgn">Hazard Button</button>
        </div>
    );
};

export default HazardButton;
