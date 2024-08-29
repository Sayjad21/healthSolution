import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../utils/Navbar';

export default function Updatedoctor() {
    const [doctor, setDoctor] = React.useState([]);
    const [doctorName, setDoctorName] = useState('');
    const [degree, setDegree] = useState('');
    const [doctorSpeciality, setDoctorSpeciality] = useState('');
    const [hospital, setHospital] = useState('');
    const [treatmentType, setTreatmentType] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const hospitals = [
        'Kurmitola General Hospital',
        'National Institute of Neurosciences & Hospital',
        'United Hospital',
        'Popular Diagnostic Centre',
        'Apollo Hospital',
        'Abhishek Memorial Hospital',
        'Bangladesh Bank Medical Center',
        'Bangabandhu Sheikh Mujib Medical University',
        'Robin GG Hospital',
        'Holy Family Red Crescent Medical College Hospital',
        'Anwar Khan Modern Medical College Hospital',
        'Ibn Sina Hospital',
        'Mugdha Medical Hospital',
        'Islami Bank Hospital',
        'Birdem General Hospital',
        'National Institute of Cardiovascular Diseases',
        'Square Hospital',
        'Dhaka Shishu (Children) Hospital',
        'Dhaka Medical College Hospital',
        'SSLove Hospital',
        'Labaid Hospital'
    ];

    const doctorSpecialities = [
        'ENT Specialist',
        'Urologist',
        'Obstetrician/Gynecologist',
        'Oncologist',
        'Endocrinologist',
        'Gynecologist/Oncologist',
        'Orthopedic Specialist',
        'Gynecologist/Urologist',
        'Gynecologist',
        'Cardiologist',
        'Ophthalmologist',
        'Infectious Disease Specialist',
        'Pediatrician',
        'ENT Specialist/Neurologist',
        'Gastroenterologist',
        'Neurologist',
        'Nephrologist',
        'Vascular Surgeon',
        'Pulmonologist',
        'Psychiatrist',
        'Rheumatologist',
        'Hematologist',
        'Dermatologist',
        'General Practitioner'
    ];

    const degrees = [
        'MBBS, MS',
        'MBBS, MD',
        'MBBS, MCh',
        'MBBS',
        'MBBS, DM'
    ];

    const treatmentTypes = ['surgery', 'medicine'];


    useEffect(() => {
        fetchDoctors();
    }, []);



    const fetchDoctors = async () => {
        try {
            const response = await fetch('http://localhost:8000/getDoctors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data);
            setDoctor(data.doctors || []);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const doctorData = { doctorName, degree, doctorSpeciality, hospital, treatmentType, contactInfo };
            const response = await fetch('http://localhost:8000/addDoctors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(doctorData)
            });
            const data = await response.json();
            console.log(data);
            alert('Doctor added successfully');
            fetchDoctors();
        }
        catch (error) {
            console.log(error);
        }
    }





    return (
        <>
            <Navbar />
            <div className="container my-3">
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
                <div>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="doctorName" className="form-label">Doctor's Name</label>
                            <input type="text" className="form-control" id="doctorName" onChange={(e) => setDoctorName(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="degree" className="form-label">Degree</label>
                            <select id="degree" className="form-select" onChange={(e) => setDegree(e.target.value)}>
                                <option selected>Choose...</option>
                                {degrees.map(degree => <option key={degree}>{degree}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="speciality" className="form-label">Speciality</label>
                            <select id="speciality" className="form-select" onChange={(e) => setDoctorSpeciality(e.target.value)}>
                                <option selected>Choose...</option>
                                {doctorSpecialities.map(speciality => <option key={speciality}>{speciality}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="hospital" className="form-label">Hospital</label>
                            <select id="hospital" className="form-select" onChange={(e) => setHospital(e.target.value)}>
                                <option selected>Choose...</option>
                                {hospitals.map(hospital => <option key={hospital}>{hospital}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="treatmentType" className="form-label">Treatment Type</label>
                            <select id="treatmentType" className="form-select" onChange={(e) => setTreatmentType(e.target.value)}>
                                <option selected>Choose...</option>
                                {treatmentTypes.map(type => <option key={type}>{type}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="contactInfo" className="form-label">Contact Info</label>
                            <input type="text" className="form-control" id="contactInfo" onChange={(e) => setContactInfo(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Submit Doctor Details</button>
                        </div>
                    </form>
                </div>

                <div>
                    <div style={{ height: '100vh', overflowY: 'scroll' }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Doctor's Name</th>
                                    <th scope="col">Degree</th>
                                    <th scope="col">Speciality</th>
                                    <th scope="col">Hospital</th>
                                    <th scope="col">Treatment Type</th>
                                    <th scope="col">Contact Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctor && doctor.map(doc => (
                                    <tr key={doc.doctor_id}>
                                        <td>{doc.doctor_name}</td>
                                        <td>{doc.degree}</td>
                                        <td>{doc.doctor_speciality}</td>
                                        <td>{doc.name}</td>
                                        <td>{doc.treatment_type}</td>
                                        <td>{doc.contact_info}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </div></>
    )

}
