import React, { Fragment } from 'react';

import Navbar from './utils/Navbar';
import HazardButton from './utils/HazardButton';

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <div>
                flowing text
            </div>

            <div style = {{
                    height: "auto",
                    width: "auto",   
                    backgroundColor: "white",
                    alignItems: "center", 
                    justifyContent: "center",
                    margin: "50px",
                    padding: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                }}
                >
                <HazardButton />
            </div>

        </Fragment>
    );
};

export default Home;