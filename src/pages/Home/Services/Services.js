import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-chupacabra-20310.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container' id="services" >
            <h1 className="text-danger">POPULAR CRUISES</h1>

            <div className="service-container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;