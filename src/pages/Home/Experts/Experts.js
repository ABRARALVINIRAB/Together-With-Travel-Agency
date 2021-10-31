import React from 'react';
import image1 from "../../../images/experts/image1.jpg"
import image2 from "../../../images/experts/image2.jpg"
import image3 from "../../../images/experts/image3.jpg"
import image4 from "../../../images/experts/image4.jpg"

import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            img: image1,

            name: ' Robartis',
            expertize: 'SEA'
        },
        {
            img: image2,

            name: ' Linda Davis',
            expertize: 'HILL'
        },
        {
            img: image3,

            name: 'Zakaria Smith',
            expertize: 'SEA'
        },
        {
            img: image4,

            name: 'Maria',
            expertize: 'HILL'
        },
    ]
    return (
        <div className="container" id="experts">

            <h2 className="mb-5">Our best Tour guides</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;