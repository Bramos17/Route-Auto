import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import person from '../images/person.png';

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    const fetchCustomerData = async () => {
        const customerUrl = "http://localhost:8090/api/customers/";
        const response = await fetch(customerUrl);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    };

    useEffect(() => { fetchCustomerData(); }, []);
    const handleDeleteCustomer = async (id) => {
        const Url = `http://localhost:8090/api/customers/${id}`;
        const response = await fetch(Url, { method: "DELETE" });
        if (response.ok) {
            window.location.reload();
        }
    };

    return (
        <div className="container">
            <h1 className="text-center">Customers</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Phone Number</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.phone_number}>
                                <td className="text-center">{customer.first_name}</td>
                                <td className="text-center">{customer.last_name}</td>
                                <td className="text-center">{customer.phone_number}</td>
                                <td className="text-center">
                                    <Link to={`/customers/edit/${customer.id}/`} relative="path">Edit</Link></td>
                                <td className="text-center">
                                    <button onClick={() => handleDeleteCustomer(customer.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <a href="http://localhost:3000/customers/new" role="button" id="addnewauto"> <img id="stearingwheel" width="40px" height="auto" src={person} alt="person"/> Add New Customer
            </a>
        </div>
    );
}

export default CustomerList;
