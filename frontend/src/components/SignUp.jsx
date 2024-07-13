import React, { useEffect, useState, useContext } from 'react'
import '../cssFiles/Signup.css'
import { userContext } from '../context/context';

export default function SignUp() {
    const value = useContext(userContext);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        weight: '',
        gender: '',
        country: '',
        state_district: '',
        police_station: '',
        blood_group: '',
        blood_donor: false,
        last_donated_blood: null,
        sperm_donor: false,
        last_donated_sperm: null,
        stats: '',
        email: '',
        password: ''
    });

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

    useEffect(() => {
        // Initialize and show the modal when the component mounts
        const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the email address
        if (!isValidEmail(formData.email)) {
            alert("Invalid email address");
            return;
        }
        // Validate the password
        if (!passwordRegex.test(formData.password)) {
            alert("Password must be at least 5 characters long and contain at least one letter, one number, and one special character.");
            return;
        }

        try {
            const body = { formData };
            console.log(body);
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (response.status === 200) {
                alert("User registered successfully");
                const responseData = await response.json();
                // Close the modal
                const modal = window.bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
                modal.hide();
                value.setUser(formData);
                // console.log("signup success");
                // console.log(value.user);
            }
        } catch (error) {
            console.error(error.message);
            console.log("signup error");
        }



        // console.log(formData);

    };

    const isValidEmail = (email) => {
        // Using a simple regex to check for the "@" symbol
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="container">
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="animated-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="height" className="form-label">Height (cm)</label>
                                    <input type="number" step="0.01" className="form-control" id="height" name="height" value={formData.height} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="weight" className="form-label">Weight (kg)</label>
                                    <input type="number" step="0.01" className="form-control" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state_district" className="form-label">State/District</label>
                                    <input type="text" className="form-control" id="state_district" name="state_district" value={formData.state_district} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="police_station" className="form-label">Police Station</label>
                                    <input type="text" className="form-control" id="police_station" name="police_station" value={formData.police_station} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="blood_group" className="form-label">Blood Group</label>
                                    {/* <input type="text" className="form-control" id="blood_group" name="blood_group" value={formData.blood_group} onChange={handleChange} /> */}
                                    <select className="form-control" id="blood_group" name="blood_group" value={formData.blood_group} onChange={handleChange} required>
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="blood_donor" name="blood_donor" checked={formData.blood_donor} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="blood_donor" >Blood Donor</label>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="last_donated_blood" className="form-label">Last Donated Blood</label>
                                    <input type="date" className="form-control" id="last_donated_blood" name="last_donated_blood" value={formData.last_donated_blood} onChange={handleChange} />
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="sperm_donor" name="sperm_donor" checked={formData.sperm_donor} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="sperm_donor">Sperm Donor</label>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="last_donated_sperm" className="form-label">Last Donated Sperm</label>
                                    <input type="date" className="form-control" id="last_donated_sperm" name="last_donated_sperm" value={formData.last_donated_sperm} onChange={handleChange} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="stats" className="form-label">Registered As</label>
                                    <select className="form-control" id="stats" name="stats" value={formData.stats} onChange={handleChange} required>
                                        <option value="">Select Status</option>
                                        <option value="admin">Admin</option>
                                        <option value="patient">Patient</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

