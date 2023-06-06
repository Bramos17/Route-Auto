import React, { useState } from 'react';


function CustomerForm() {
    const [formData, setFormData] = useState({
        customer: '',
        customerFirstName: '',
        customerLastName: '',
        customerAddress: '',
        customerEmail: '',
        customerPhone: '',
        customerNote: '',
        customerStatus: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const CustomerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log(fetchConfig);

        const response = await fetch(CustomerUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                customerFirstName: '',
                customerLastName: '',
                customerAddress: '',
                customerEmail: '',
                customerPhone: '',
                customerNote: '',
                customerStatus: '',
            });
            alert('Customer created successfully');
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
                            <input onChange={handleFormChange} placeholder="First Name" required type="text" name="customerFirstName" id="customerFirstName" className="form-control" />
                            <label htmlFor="customerFirstname">FirstName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Last Name" required type="text" name="customerLastName" id="customerLastName" className="form-control" />
                            <label htmlFor="customerLastName">LastName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Address" required type="text" name="Address" id="Address" className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Email" required type="text" name="Email" id="Email" className="form-control" />
                            <label htmlFor="Email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="PhoneNumber" required type="text" name="phone_number" id="phone_number" className="form-control" />
                            <label htmlFor="phone_number">Phone number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea onChange={handleFormChange} placeholder="Notes" required type="text" name="Notes" id="Notes" rows="3" className="form-control" />
                            <label htmlFor="Notes">Notes</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select onChange={handleFormChange} required id="location" className="form-select" name="location">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
