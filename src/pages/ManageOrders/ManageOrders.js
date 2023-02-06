import React, { useEffect, useState } from 'react';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updated, setUpdated] = useState();

    useEffect(() => {
        fetch('https://travel-agency-9ugf.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [updated])
    const handleDeleteOrder = (id) => {
        const url = `https://travel-agency-9ugf.onrender.com/orders/${id}`;
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

    // const url = `http://localhost:5000/orders/${id}`;
    // fetch(url, {
    //     method: "PUT",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(orders)
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    const handleUpdateOrder = (id) => {
        const matched = orders.filter((order) => order._id === id);
        console.log("matched update ", matched);

        let orderstatus;

        if (matched[0].status === "pending") {
            orderstatus = "Approved";
            console.log("matched update ", matched[0].status);
        } else {
            orderstatus = "pending";
        }
        const updates = {
            name: matched[0].name,
            phone: matched[0].phone,
            id: matched[0].id,
            price: matched[0].price,
            days: matched[0].days,

            status: orderstatus,

        };



        if (matched[0].name) {
            console.log("updated", updated);

            const url = `https://travel-agency-9ugf.onrender.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updates),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        alert('status changes')
                        setOrders(orders);
                        setUpdated({});
                    }
                });
        }
    };



    return (

        <div className='container '>
            <h1>All orders list</h1>
            {
                orders.map(order => <>
                    <div className="header border border-1">
                        <h3>Id :{order._id}</h3>
                        <h3>User Name :{order.name}</h3>
                        <h3>Email :{order.email}</h3>
                        <h3>Address :{order.address}</h3>
                        <h3>Phone :{order.phone}</h3>
                        <h3>status :{order.status}</h3>

                        <button onClick={() => handleUpdateOrder(order._id)} className="btn btn-success">Update</button>
                        <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button>
                        <hr />

                    </div>

                    {/* <table className="tables">
                        <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Email</th>

                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                        <tr>
                            <td>{order._id}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>

                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                        </tr>

                    </table> */}

                </>)
            }

        </div>
    );
};

export default ManageOrders;