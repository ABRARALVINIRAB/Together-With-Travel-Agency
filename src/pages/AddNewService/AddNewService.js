import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("https://together-with-travel-agency-server-site.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New service added succesfully');
                    reset();
                }
            })

    }
    return (
        <div>
            <h1>Add a new service</h1>
            <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" defaultValue="" {...register("name")} required />
                <input placeholder="img" defaultValue="" {...register("img")} required />
                <input placeholder="days" defaultValue="" {...register("days")} required />
                <input placeholder="price" defaultValue="" {...register("price")} required />

                <input className="btn btn-danger" type="submit" />

            </form>
        </div>
    );
};

export default AddNewService;