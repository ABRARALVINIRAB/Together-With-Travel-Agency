import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../../images/404.jpg"

const NotFound = () => {
    return (
        <div>
            <img src={error} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;