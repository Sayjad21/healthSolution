import {React, Fragment } from "react";

export default function HospitalCard({hospital,handleDelete}) {
    const {id,name, street, city, policestation, contact_number, email} = hospital;

    return(
        <Fragment>
            <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Street: {street}</p>
                        <p className="card-text">City: {city}</p>
                        <p className="card-text">Police Station: {policestation}</p>
                        <p className="card-text">Contact Number: {contact_number}</p>
                        <p className="card-text">Email: {email}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(id)}
                            style={{ marginLeft: '300px' }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}