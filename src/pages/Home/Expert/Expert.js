import React from 'react';
import "./Expert.css"
const Expert = ({ expert }) => {
    console.log(expert);
    const { name, img, category, expertize } = expert;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 dentists">


            <img className="w-75 h-75" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger"> Expert in : {expertize}</h5>
        </div>
    );
};

export default Expert;