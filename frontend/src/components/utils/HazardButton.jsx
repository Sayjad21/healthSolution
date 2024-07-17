import { React, useContext } from 'react';
import axios from 'axios';

import { userContext } from '../../context/context';

import './css/hazardButton.css';    

const HazardButton = () => {
    const userValue = useContext(userContext);

    const handleClick = async () => {
        const response = await axios.get('http://localhost:8000/getMail', {
            params: {
                id : userValue.user.id,           
                thana: userValue.user.police_station,
            }
        })
        
        const hospData = response.data;
        const hospitalData = hospData.hospitals.map(hospital => ({name : hospital.name, email : hospital.email}));
        
        const resp = await axios.get('http://localhost:8000/sendMail/sendMail', {
            params: {
                hospitalData: hospitalData,
                user: userValue.user.name,
                thana: userValue.user.police_station,
                age : userValue.user.age,
                weight : userValue.user.weight,
                blood_group : userValue.user.blood_group,
            }
        });

        console.log(resp.data);
    };

    return (
        <div className="mt-3 mb-3">
            <button onClick={handleClick} className="button-dsgn">Hazard Button</button>
        </div>
    );
};

export default HazardButton;
