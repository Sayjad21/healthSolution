import React, { useEffect, useState, useContext } from 'react';
import '../cssFiles/button.css';
import { userContext,tokenContext } from '../context/context';
import Verification from './Verification';
import FinalAuthenticate from './FinalAuthenticate';

export default function Login() {
    const value = useContext(userContext);
    const tokenValue = useContext(tokenContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showVerification, setShowVerification] = useState(false);
    const [token, setToken] = useState('');
    const [modalVisible, setModalVisible] = useState(true);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

    // useEffect(() => {
    //     // Initialize and show the modal when the component mounts
    //     const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    //     modal.show();
    // }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const isValidEmail = (email) => {
        // Using a simple regex to check for the "@" symbol
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // const handleCloseModal = () => {
    //     // Perform actions when modal is closed
    //     setShowVerification(true); // Show verification component
    //     setModalVisible(false); // Hide modal
    // };

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
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (response.status === 200) {
                const responseData = await response.json();
                alert(responseData.message);
                console.log(responseData);
                setToken(responseData.token);
                tokenValue.setToken(responseData.token);
                // handleCloseModal();
            }
        } catch (error) {
            console.error(error.message);
            console.log("login error");
        }
    };

    return (
        <div className="container">

            <button type="button" className="btn btn-primary my-3 custom-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>

            <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            {/* <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button> */}
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="animated-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
