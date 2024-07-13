import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { userContext } from '../context/context';


export default function FinalAuthenticate() {
    const [token, setToken] = useState('');
    const value = useContext(userContext);

    useEffect(() => {
        // Initialize and show the modal when the component mounts
        const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }, []);

    useEffect(() => {
        // Check if user is updated
        if (value.user) {
            console.log('User updated:', value.user);
        }
    }, [value.user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { token };
            // console.log(body);
            const response = await fetch("http://localhost:3000/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (response.status === 200) {
                const responsedata = await response.json();
                alert(responsedata.message);
                // console.log(responsedata);
                value.setUser(responsedata.user);
                // console.log(value.user);
            } else {
                alert("Verification failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
  return (
    <div className='container'>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit} className="animated-form">
                                    <div className="form-group mb-3">
                                        <label htmlFor="Token" className="form-label">Token</label>
                                        <input type="text" className="form-control" id="Token" name="Token" value={token} onChange={e=>setToken(e.target.value)} required />
                                    </div>
                                    
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Verify</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
