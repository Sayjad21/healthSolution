import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../utils/Navbar';
import '../../cssFiles/vaccine.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Vaccine() {
    const [vaccine, setVaccine] = useState([]);
    const [disease, setDisease] = useState([]);
    const [vaccineDisease, setVaccineDisease] = useState([]);
    const [age, setAge] = useState(0);
    const [patientDisease, setPatientDisease] = useState('');
    const [filteredVaccine, setFilteredVaccine] = useState([]);
    const [selectedVaccine, setSelectedVaccine] = useState([]);
    const [hospital, setHospital] = useState([]);

    const formRef = useRef();

    useEffect(() => {
        getVaccine();
        getDisease();
        getVaccineDisease();
        getHospital();
    }, []);

    const getHospital = async () => {
        try {
            const response = await fetch('http://localhost:8000/hospital', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                setHospital(data);
            } else {
                console.log('Error fetching hospitals');
            }
        } catch (error) {

            console.log(error.message);
        }
    };


    const getVaccine = async () => {
        try {
            const response = await fetch('http://localhost:8000/vaccine', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                setVaccine(data);
            } else {
                console.log('Error fetching vaccines');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const getDisease = async () => {
        try {
            const response = await fetch('http://localhost:8000/disease', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                setDisease(data);
            } else {
                console.log('Error fetching diseases');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const getVaccineDisease = async () => {
        try {
            const response = await fetch('http://localhost:8000/vaccineDisease', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                setVaccineDisease(data);
            } else {
                console.log('Error fetching vaccine diseases');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const showVaccines = async () => {
        try {
            const body = { age, patientDisease };
            const response = await fetch('http://localhost:8000/vaccinefilter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.status === 200) {
                const data = await response.json();
                setFilteredVaccine(data);
                console.log(data);
            } else {
                console.log('Error fetching filtered vaccines');
            }
        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        showVaccines();
    }
        , [age, patientDisease]);

    const addVaccine = (name, manufacturer, marketPrice, diseaseName) => {
        const isDuplicate = selectedVaccine.some(vaccine => vaccine.name === name);
        if (!isDuplicate) {
            const newVaccine = { name, manufacturer, marketPrice, diseaseName };
            setSelectedVaccine([...selectedVaccine, newVaccine]);
        } else {
            alert("This vaccine has already been selected.");
        }
    };


    const deleteVaccine = (name) => {
        setSelectedVaccine(selectedVaccine.filter((vaccine) => vaccine.name !== name));
    };


    const handleDownload = async () => {
        const formElement = formRef.current;
    
        // Capture the form as a canvas
        const canvas = await html2canvas(formElement, { scrollY: -window.scrollY });
        const imgData = canvas.toDataURL('image/png');
    
        // Create a new jsPDF instance with landscape orientation
        const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape, 'mm' for millimeters, 'a4' for paper size
    
        // Calculate dimensions
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width * 0.264583; // Convert px to mm (1 px = 0.264583 mm)
        const imgHeight = canvas.height * 0.264583; // Convert px to mm
    
        // Scale the image to fit the PDF page
        const scale = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const scaledWidth = imgWidth * scale;
        const scaledHeight = imgHeight * scale;
    
        // Add image to PDF with scaling
        pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
    
        // Save the PDF
        pdf.save('form.pdf');
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Diseases</h2>
                <div className="card-container">
                    {disease.map((d) => (
                        <div key={d.disease_id} className="card">
                            <h3>{d.disease_name}</h3>
                            <p><strong>Specialized:</strong> {d.preferred_specialized}</p>
                            <p><strong>Symptoms:</strong> {d.symptom}</p>
                        </div>
                    ))}
                </div>
                <h2>Vaccines</h2>
                <div className="card-container">
                    {vaccine.map((v) => (
                        <div key={v.id} className="card">
                            <h3>{v.name}</h3>
                            <p><strong>Manufacturer:</strong> {v.manufacturer}</p>
                            <p><strong>Dose:</strong> {v.dose}</p>
                            <p><strong>Interval:</strong> {v.vaccine_interval}</p>
                            <p><strong>Effectiveness:</strong> {v.vaccine_effectiveness}%</p>
                            <p><strong>From Age:</strong> {v.from_age}</p>
                            <p><strong>To Age:</strong> {v.to_age}</p>
                            <p><strong>Side Effects:</strong> {v.side_effects}</p>
                            <p><strong>Precautions:</strong> {v.precaution}</p>
                            <p><strong>Price:</strong> ${v.market_price}</p>
                            <p><strong>Disease:</strong> {v.disease_name}</p>
                        </div>
                    ))}
                </div>

                <div ref={formRef} className='vaccineForm' >

                    <h2>Vaccination Form</h2>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Full name" aria-label="name" />
                        </div>
                        <div class="col">
                            <label htmlFor="age">Age(required for get list of vaccines)</label>
                            <input type="number" class="form-control" placeholder={age} aria-label="Age" onChange={(e) => setAge(e.target.value)} required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="Phone" aria-label="Phone" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="col">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={patientDisease}
                                onChange={(e) => setPatientDisease(e.target.value)}
                            >
                                <option value=''>Disease</option>
                                {vaccineDisease.map((v) => (
                                    <option key={v.disease_name} value={v.disease_name}>
                                        {v.disease_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='my-3'>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Select Hospital</option>
                                {hospital.map((h) => (
                                    <option key={h.id} value={h.id}>
                                        {h.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Selected vaccines */}
                        <div className="mt-3">
                            <h2>Selected Vaccines for patients</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Manufacturer</th>
                                        <th>Price</th>
                                        <th>Disease</th>
                                        <th>Dose</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedVaccine.map((sv) => (
                                        <tr key={sv.name}>
                                            <td>{sv.name}</td>
                                            <td>{sv.manufacturer}</td>
                                            <td>${sv.marketPrice}</td>
                                            <td>{sv.diseaseName}</td>
                                            <td>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected>Select Dose</option>
                                                    <option>1st</option>
                                                    <option>2nd</option>
                                                    <option>3rd</option>
                                                    <option>4th</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        

                    </div>
                    {/* <button type="button" class="btn btn-danger" onClick={showVaccines}>Show Vaccines</button> */}
                    {/* //filtered vaccines */}


                </div>
                <div className="mt-3">
                <button type="button"
                            className="btn btn-info my-3" onClick={handleDownload} >
                            Download Form as PDF
                </button>
                </div>
                <div className="mt-3">
                    <h2>Patient needs following vaccines</h2>
                    <p>Select vaccines from following table</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Manufacturer</th>
                                <th>Dose</th>
                                <th>Interval</th>
                                <th>Effectiveness</th>
                                <th>From Age</th>
                                <th>To Age</th>
                                <th>Side Effects</th>
                                <th>Precautions</th>
                                <th>Price</th>
                                <th>Disease</th>
                                <th>Select</th>
                                <th>Deselect</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVaccine.map((fv) => (
                                <tr key={fv.id}>
                                    <td>{fv.name}</td>
                                    <td>{fv.manufacturer}</td>
                                    <td>{fv.dose}</td>
                                    <td>{fv.vaccine_interval}</td>
                                    <td>{fv.vaccine_effectiveness}%</td>
                                    <td>{fv.from_age}</td>
                                    <td>{fv.to_age}</td>
                                    <td>{fv.side_effects}</td>
                                    <td>{fv.precaution}</td>
                                    <td>${fv.market_price}</td>
                                    <td>{fv.disease_name}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={() => addVaccine(fv.name, fv.manufacturer, fv.market_price, fv.disease_name)}
                                        >
                                            Select
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => deleteVaccine(fv.name)}
                                        >
                                            Deselect
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}
