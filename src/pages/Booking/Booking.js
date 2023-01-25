import { stringify } from '@firebase/util';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useServices from '../../Hooks/useServices';
import "./Booking.css"


const Booking = () => {



    const { serviceId } = useParams();
    console.log('serviceid', serviceId);

    const { services } = useServices();
    console.log(services);
    const matchingServices = services.find((service) => (service._id) === (serviceId));
    console.log(matchingServices);
    const productName = matchingServices?.name;


    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch("https://together-with-travel-agency-server-site.vercel.app/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('your order placement successfully');
                    reset();
                }
            })



    };

    return (
        <div>

            <h1>{matchingServices?.name}</h1>
            <img src={matchingServices?.img} alt="" />
            <h1>{matchingServices?.description}</h1>

            <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Place Your Order</h1>
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input defaultValue={productName} {...register("productName")} />
                <input placeholder="Address" defaultValue="" {...register("address")} required />
                <input placeholder="" defaultValue="pending" {...register("status")} required />
                <input placeholder="City" defaultValue="" {...register("city")} required />
                <input placeholder="phone number" defaultValue="" {...register("phone")} required />

                <input className="btn btn-danger" type="submit" />
                {/* <Button className="btn btn-danger" >Place Order</Button> */}
            </form>



        </div>
    );
};

export default Booking;
