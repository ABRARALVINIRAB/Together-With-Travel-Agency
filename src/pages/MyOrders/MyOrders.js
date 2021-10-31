import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch('https://shrieking-chupacabra-20310.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    const matchingemail = orders.filter((order) => (order.email) === (user.email))
    console.log(matchingemail);
    const handleDeleteOrder = (id) => {
        const url = `https://shrieking-chupacabra-20310.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('delete succesfully')
                }
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            })

    }


    return (
        <div>
            <h1>My Orders</h1>



            {
                matchingemail.map(email => <>
                    <div className="container border border-1">
                        <h1>Name: {email.name}</h1>
                        <h1>Email: {email.email}</h1>
                        <h1>Order Id: {email._id}</h1>
                        <h1>Address: {email.address}</h1>
                        <h1>Phone: {email.phone}</h1>
                        <button onClick={() => handleDeleteOrder(email._id)} className="btn btn-danger">Delete</button>
                        <hr />
                    </div>

                </>)
            }


        </div>
    );
};

export default MyOrders;