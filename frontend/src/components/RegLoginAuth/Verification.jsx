import React, { useEffect, useState, useContext, useRef } from 'react';
import FinalAuthenticate from './FinalAuthenticate';
import '../../cssFiles/button.css';
import { userContext, tokenContext } from '../../context/context';

export default function Verification() {
    const [modalVisible, setModalVisible] = useState(true);
    const [iscopied, setIscopied] = useState(false);
    const value = useContext(userContext);
    const tokenValue = useContext(tokenContext);
    const verificationButtonRef = useRef(null);
    const [btnVisible, setbtnVisible] = useState(true);
    const closeButttonRef = useRef(null);

    // useEffect(() => {
    //     // Initialize and show the modal when the component mounts
    //     const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    //     modal.show();
    // }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(tokenValue.token)
            .then(() => {
                alert('Token copied to clipboard');

                if (closeButttonRef.current) {
                    closeButttonRef.current.click();
                    // setbtnVisible(false);
                }
                setIscopied(true);

            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    useEffect(() => {
        if (verificationButtonRef.current) {
            verificationButtonRef.current.click();
            setbtnVisible(false);
        }
    }, [tokenValue.token]);

    // const handleCloseModal = () => {
    //     // Perform actions when modal is closed
    //     setModalVisible(false); // Hide modal
    //     setIscopied(true); // Reset copied state
    // };

    return (
        <div className='container'>
            {iscopied ?
                <FinalAuthenticate />
                :
                (
                    <div>
                        {btnVisible &&
                            <button type="button" className="btn btn-primary my-3 custom-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" ref={verificationButtonRef}>
                                See Token
                            </button>
                        }

                        <div className="modal" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Authentication Code</h1>
                                        {/* <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button> */}
                                    </div>
                                    <div className="modal-body">
                                        <p>Your code (don't share with others)</p>
                                        <textarea
                                            className="form-control"
                                            value={tokenValue.token}
                                            readOnly
                                            rows="4"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeButttonRef}>Close</button>
                                        <button type="button" className="btn btn-primary" onClick={copyToClipboard}>Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
