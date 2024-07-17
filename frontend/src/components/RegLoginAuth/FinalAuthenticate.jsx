import React, { useState, useEffect, useContext,useRef } from 'react';
import { userContext,tokenContext } from '../../context/context'
import { useNavigate } from 'react-router-dom';
import '../../cssFiles/button.css';
import UserLifeInfo from './UserLifeInfo';

export default function FinalAuthenticate() {
    const [token, setToken] = useState('');
    const value = useContext(userContext);
    const tokenValue = useContext(tokenContext);
    const [gotUser, setGotUser] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    const authButtonRef = useRef(null);
    const [btnVisible, setbtnVisible] = useState(true);
    const closeButttonRef = useRef(null);
    const navigate = useNavigate(); 


    // useEffect(() => {
    //     // Initialize and show the modal when the component mounts
    //     const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    //     modal.show();
    // }, []);

    useEffect(() => {
        if (authButtonRef.current) {
            authButtonRef.current.click();
            setbtnVisible(false);
        }
    }, [tokenValue.token]);


    useEffect(() => {
        // Check if user is updated
        if (value.user) {
            console.log('User updated:', value.user);
            // setGotUser(true);
        }
    }, [value.user]);

    // const handleCloseModal = () => {
    //     // Perform actions when modal is closed
    //     setModalVisible(false); // Hide modal
    //     setGotUser(true);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { token };
            const response = await fetch("http://localhost:8000/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (response.status === 200) {
                const responsedata = await response.json();
                alert(responsedata.message);
                // setModalVisible(false); // Hide modal after verification
                value.setUser(responsedata.user);
                closeButttonRef.current.click();
                navigate('/'); // Redirect to home page
                //redirected to home page


            } else {
                alert("Verification failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Check if user is authenticated and show UserLifeInfo component
    return (
        <div className='container'>
           {tokenValue.token!=='' && btnVisible && <button type="button" className="btn btn-primary my-3 custom-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal3" ref={authButtonRef}>
                JWT Authentication
            </button>}

            <div className="modal" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Verify Token</h1>
                            {/* <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button> */}
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="animated-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="Token" className="form-label">Token</label>
                                    <input type="text" className="form-control" id="Token" name="Token" value={token} onChange={e => setToken(e.target.value)} required />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref ={closeButttonRef}>Close</button>
                                    <button type="submit" className="btn btn-primary">Verify</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
