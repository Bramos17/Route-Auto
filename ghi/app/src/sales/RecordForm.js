import React, { useState } from 'react';


function RecordForm() {
    const [formData, setFormData] = useState({
        name: '',
        employee_number: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log(fetchConfig);

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            setFormData({
                name: '',
                employee_number: '',
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
                    <h1>Employee</h1>
                    <h5>Welcome!</h5>
                    <h5> Please fill out the Following </h5>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="First Name" required type="text" name="salesPersonFirstName" id="salesPersonFirstName" className="form-control" />
                            <label htmlFor="salesPersonFirstname">FirstName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Last Name" required type="text" name="salesPersonLastName" id="salesPersonLastName" className="form-control" />
                            <label htmlFor="salesPersonLastName">LastName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="employee_id" required type="text" name="employee_id" id="employee_id" className="form-control" />
                            <label htmlFor="employee_id">Employee ID </label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea onChange={handleFormChange} placeholder="Notes" required type="text" name="Notes" id="Notes" rows="3" className="form-control" />
                            <label htmlFor="Notes">Notes</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select onChange={handleFormChange} required  className="form-select" name="Status">
                                <option value="Busy">Busy</option>
                                <option value="Open">Open</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default RecordForm;
