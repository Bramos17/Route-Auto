import React, { useState } from 'react';


function CustomerForm(props) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        phone_number: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const Url = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };


        const response = await fetch(Url, fetchConfig);

        if (response.ok) {
            setFormData({
                first_name: '',
                last_name: '',
                address: '',
                email: '',
                phone_number: '',
            });
            alert('Customer created successfully');
            window.location.href = '/sales/CustomerList';
        }
    }

    const handleFormChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({
            ...formData,
            [name]: value,
        });
    }



    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>New Customer!</h1>
                    <h5>Welcome!</h5>
                    <h5> Please fill out the Following </h5>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Email" required type="text" name="email" id="email" className="form-control" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="PhoneNumber" required type="text" name="phone_number" id="phone_number" className="form-control" />
                            <label htmlFor="phone_number">Phone</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CustomerForm;
