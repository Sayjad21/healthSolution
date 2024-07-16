import React, { useEffect, useState } from 'react'
import Navbar from '../utils/Navbar';

export default function SearchFilter() {
    const [search, setSearch] = useState('');
    const [Doctor, setDoctor] = useState(null);
    const [Hospital, setHospital] = useState(null);
    const [showDoctor, setShowDoctor] = useState(true);
    const [showHospital, setShowHospital] = useState(true);
    const [searchType, setSearchType] = useState('both');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
        if (event.target.value === 'doctor') {
            setShowDoctor(true);
            setShowHospital(false);
        }
        else if (event.target.value === 'hospital') {
            setShowDoctor(false);
            setShowHospital(true);
        }
        else {
            setShowDoctor(true);
            setShowHospital(true);
        }
    };


    useEffect(() => {
        fetchDoctorsHospitals();
    }
        , [search]);

    useEffect(() => {
        fetchDoctorsHospitals();
    }
        , []);

    const fetchDoctorsHospitals = async () => {
        const body = { search };
        // console.log(body);
        try {
            const response = await fetch('http://localhost:3000/doctorHospital', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setDoctor(data.doctors);
                setHospital(data.hospitals);
            }
            else {
                alert('Error fetching doctors');
            }

        } catch (error) {
            console.error(error.message);

        }



    }
    return (
        <div className="container">
            <Navbar />
        <div class="container text-center my-3">
            <div class="row align-items-start">
                <div class="col-3">
                    <div className="container">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}
                                value={search} />

                            {/* //make 3 radio buttons for doctor, hospital and both */}

                        </form>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="searchType"
                            id="doctorRadio"
                            value="doctor"
                            checked={searchType === 'doctor'}
                            onChange={handleSearchTypeChange}
                        />
                        <label className="form-check-label" htmlFor="doctorRadio">
                            Doctor
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="searchType"
                            id="hospitalRadio"
                            value="hospital"
                            checked={searchType === 'hospital'}
                            onChange={handleSearchTypeChange}
                        />
                        <label className="form-check-label" htmlFor="hospitalRadio">
                            Hospital
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="searchType"
                            id="bothRadio"
                            value="both"
                            checked={searchType === 'both'}
                            onChange={handleSearchTypeChange}
                        />
                        <label className="form-check-label" htmlFor="bothRadio">
                            Both
                        </label>
                    </div>
                </div>
                <div class="col-9" >
                    <div class="container text-center">
                        <div class="row align-items-center">

                            {showDoctor && Doctor !== null && <div class="col" style={{ height: '100vh', overflowY: 'scroll'}}>
                                <h3>Doctors</h3>
                                {Doctor.map((doctor) => (
                                    <div className="card mb-3" key={doctor.doctor_id}>
                                        <div className="card-body">
                                            <h5 className="card-title">{doctor.doctor_name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{doctor.doctor_speciality}</h6>
                                            <p className="card-text">{doctor.degree}</p>
                                            <p className="card-text">{doctor.contact_info}</p>
                                            <p className="card-text"><strong>Hospital:</strong> {doctor.hospital_name}</p>
                                            <p className="card-text">{doctor.street}, {doctor.city}, {doctor.policestation}</p>
                                            <p className="card-text">{doctor.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>}
                        
                        {showHospital && Hospital !== null && <div class="col" style={{ height: '100vh', overflowY: 'scroll'}}>
                            <h3>Hospitals</h3>
                            {Hospital.map((hospital) => (
                                <div className="card mb-3" key={hospital.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{hospital.name}</h5>
                                        <p className="card-text">{hospital.street}, {hospital.city}, {hospital.policestation}</p>
                                        <p className="card-text">{hospital.contact_number}</p>
                                        <p className="card-text">{hospital.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}
