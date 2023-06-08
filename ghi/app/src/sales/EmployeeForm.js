import React, { useState } from 'react';

function EmployeeForm(props) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const EmployeeUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(EmployeeUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                first_name: '',
                last_name: '',
                employee_id: '',
            });
            alert('Employee created successfully');
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
                    <h1>Employee sign up!</h1>
                    <h5>Welcome!</h5>
                    <h5> Please fill out the Following </h5>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">FirstName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">LastName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="employee_id" required type="text" name="employee_id" id="employee_id" className="form-control" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EmployeeForm;
