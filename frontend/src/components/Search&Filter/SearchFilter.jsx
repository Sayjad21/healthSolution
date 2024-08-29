import React, { useEffect, useState } from 'react'
import Navbar from '../utils/Navbar';

export default function SearchFilter() {
    const [search, setSearch] = useState('');
    const [Doctor, setDoctor] = useState(null);
    const [Hospital, setHospital] = useState(null);
    const [showDoctor, setShowDoctor] = useState(true);
    const [showHospital, setShowHospital] = useState(true);
    const [searchType, setSearchType] = useState('both');
    const [doctorSpeciality, setDoctorSpeciality] = useState('');
    const [treatmentType, setTreatmentType] = useState('');
    const [degree, setDegree] = useState('');
    const [policestation, setPolicestation] = useState('');

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
        , [search, doctorSpeciality, treatmentType, degree, policestation]);

    useEffect(() => {
        fetchDoctorsHospitals();
    }
        , []);

    const fetchDoctorsHospitals = async () => {
        const body = { search, doctorSpeciality, treatmentType, degree, policestation };
        // console.log(body);
        try {
            const response = await fetch('http://localhost:8000/doctorHospital', {
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
                // setShowDoctor(true);
                // setShowHospital(true);
            }
            else {
                alert('Error fetching doctors');
            }

        } catch (error) {
            console.error(error.message);

        }



    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="search1.jpg" class="d-block w-100" alt="search1" />
                            <div class="carousel-caption d-none d-md-block">


                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="search2.jpg" class="d-block w-100" alt="search2 " />
                            <div class="carousel-caption d-none d-md-block">


                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="search3.jpg" class="d-block w-100" alt="search3" />
                            <div class="carousel-caption d-none d-md-block">


                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="container text-center my-1">
                    <div class="row align-items-start">
                        <div class="col-3">
                            <div className="container">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}
                                        value={search} />

                                    {/* //make 3 radio buttons for doctor, hospital and both */}</form>
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
                            <label style={{ alignItems: 'start' }} htmlFor="doctorSpeciality">
                                Doctors's Category
                            </label>

                            <select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={(e) => setDoctorSpeciality(e.target.value)}   >
                                <option value=''>Doctor Speciality</option>
                                <option value="ENT Specialist">ENT Specialist</option>
                                <option value="Urologist">Urologist</option>
                                <option value="Obstetrician/Gynecologist">Obstetrician/Gynecologist</option>
                                <option value="Oncologist">Oncologist</option>
                                <option value="Endocrinologist">Endocrinologist</option>
                                <option value="Gynecologist/Oncologist">Gynecologist/Oncologist</option>
                                <option value="Orthopedic Specialist">Orthopedic Specialist</option>
                                <option value="Gynecologist/Urologist">Gynecologist/Urologist</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Ophthalmologist">Ophthalmologist</option>
                                <option value="Infectious Disease Specialist">Infectious Disease Specialist</option>
                                <option value="Pediatrician">Pediatrician</option>
                                <option value="ENT Specialist/Neurologist">ENT Specialist/Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Nephrologist">Nephrologist</option>
                                <option value="Vascular Surgeon">Vascular Surgeon</option>
                                <option value="Pulmonologist">Pulmonologist</option>
                                <option value="Psychiatrist">Psychiatrist</option>
                                <option value="Rheumatologist">Rheumatologist</option>
                                <option value="Hematologist">Hematologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="General Practitioner">General Practitioner</option>

                            </select>

                            <select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={(e) => setTreatmentType(e.target.value)}   >

                                <option value=''>Treatment Type</option>
                                {/* 'surgery', 'medicine' */}
                                <option value="surgery">Surgery</option>
                                <option value="medicine">Medicine</option>
                            </select>

                            <select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={(e) => setDegree(e.target.value)}   >

                                <option value=''>Degree</option>
                                <option value="MBBS, MS">MBBS, MS</option>
                                <option value="MBBS, MD">MBBS, MD</option>
                                <option value="MBBS, MCh">MBBS, MCh</option>
                                <option value="MBBS">MBBS</option>
                                <option value="MBBS, DM">MBBS, DM</option>
                            </select>

                            <label style={{ alignItems: 'start' }} htmlFor="doctorSpeciality">
                                Hospital's Category
                            </label>
                            <select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={(e) => setPolicestation(e.target.value)}   >
                                <option value=''>Police Station</option>
                                <option value="Mirpur">Mirpur</option>
                                <option value="Motijheel">Motijheel</option>
                                <option value="Lalbagh">Lalbagh</option>
                                <option value="Dhanmondi">Dhanmondi</option>
                                <option value="Ramna">Ramna</option>
                                <option value="Cantonment">Cantonment</option>
                                <option value="Mugdha">Mugdha</option>
                                <option value="Tejgaon">Tejgaon</option>
                                <option value="Gulshan">Gulshan</option>
                                <option value="Shahjahanpur">Shahjahanpur</option>
                                <option value="Shahbag">Shahbag</option>
                                <option value="Sher-e-Bangla Nagar">Sher-e-Bangla Nagar</option>
                                <option value="Badda">Badda</option>
                            </select>



                        </div>
                        <div class="col-9" >
                            <div class="container text-center">
                                <div class="row align-items-center">
                                    <div class="col">
                                <img src="doctor.jpg" alt="doctor" style={{ display: 'block', margin: '0 auto', marginBottom: '20px',borderRadius:'50px' }} />
                                    {showDoctor && Doctor !== null && <div  style={{ height: '100vh', overflowY: 'scroll' }}>
                                        

                                        {Doctor.map((doctor) => (
                                            <div className="card mb-3" key={doctor.doctor_id}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{doctor.doctor_name}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">{doctor.doctor_speciality}</h6>
                                                    <p className="card-text">{doctor.degree}</p>
                                                    <p className="card-text">{doctor.treatment_type}</p>
                                                    <p className="card-text">{doctor.contact_info}</p>
                                                    <p className="card-text"><strong>Hospital:</strong> {doctor.hospital_name}</p>
                                                    <p className="card-text">{doctor.street}, {doctor.city}, {doctor.policestation}</p>
                                                    <p className="card-text">{doctor.email}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>}
                                    </div>
                                    <div class="col">
                                    <img src="hospital.jpg" alt="doctor" style={{ display: 'block', margin: '0 auto', marginBottom: '20px',borderRadius:'50px' }} />
                                    {showHospital && Hospital !== null && <div class="col" style={{ height: '100vh', overflowY: 'scroll' }}>
                                        
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
            </div>
        </>

    )
}
