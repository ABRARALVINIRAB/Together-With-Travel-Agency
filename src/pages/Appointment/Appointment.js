import React from 'react';
import { useForm } from 'react-hook-form';

const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Make Appointment for visit Our office</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Phone number" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Guides name" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Date" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Time" {...register("firstName")} />
                <br /> <br />
                <select {...register("guides")}>
                    <option value="female">Alvi</option>
                    <option value="male"> Nir</option>
                    <option value="other">Abrar</option>
                </select>
                <br /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Appointment;
