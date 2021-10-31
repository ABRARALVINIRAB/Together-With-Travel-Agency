import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { _id, name, price, img, description, days } = service;
    return (
        <div className="container" className="service pb-3">


            <h1>{name}</h1>
            <img className="img-fluid" src={img} alt="" />


            <h3>Days: {days}</h3>
            <h3> Price: ${price}</h3>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-danger">Booking in {name}</button>
            </Link>
        </div>
    );
};

export default Service;