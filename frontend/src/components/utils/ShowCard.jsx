import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './css/showCard.css';

import Health from '../img/Health.jpg';

export default function ShowCard({ ...details }) {

    console.log(details);

    return (
        <Fragment>  
            <Link to={details.navigateTo} style={{ textDecoration: 'none' }}>
            <div
                className="darkShadow"
                style={{
                    height: "auto",
                    width: "auto",
                    marginTop: "30px",
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                    borderRadius: 20,
                    padding: "20px",
                    marginBottom: "100px",
                }}
            >

                <div className="content">
                    <div className="title">
                        <h2> <u> {details.title} </u> </h2>
                        <p>
                            {details.content}
                        </p>
                    </div>

                    <div
                        className="imageSection "
                    >
                        <img
                            src={details.image}
                            alt="image"
                            className="darkShadow"
                            style={{ height: "150px", width: "250px"}}
                        />
                    </div>
                </div>
            </div> 
            </Link>           
        </Fragment>
    );
}