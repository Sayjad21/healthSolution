import React, { useEffect,useState } from 'react';
import FinalAuthenticate from './FinalAuthenticate';

export default function Verification(props) {
    useEffect(() => {
        // Initialize and show the modal when the component mounts
        const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }, []);

    const [iscopied, setIscopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.token)
            .then(() => {
                alert('Token copied to clipboard');
                setIscopied(true);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div className='container'>
            {iscopied ? 
            (
                <FinalAuthenticate/>
            )
            :(<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Authentication Code</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Your code (don't share with others)</p>
                            <textarea
                                className="form-control"
                                value={props.token}
                                readOnly
                                rows="4"
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={copyToClipboard}>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
