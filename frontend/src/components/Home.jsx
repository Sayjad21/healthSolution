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
                    backgroundColor: "lightcoral", 
                    // margin: "50px",
                    padding: "20px",
                }}
                >
                <HazardButton />
            </div>

        </Fragment>
    );
};

export default Home;