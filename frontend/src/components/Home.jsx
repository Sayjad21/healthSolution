import React, { Fragment } from 'react';

import Navbar from './utils/Navbar';

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <h1>Welcome to the Health Solution App</h1>
            <p>Start building your health solution here!</p>
        </Fragment>
    );
};

export default Home;