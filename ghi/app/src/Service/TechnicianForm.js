import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TechnicianForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();

            setFirstName("");
            setLastName("");
            setEmployeeId("");

            alert("Technician created successfully!");

            navigate("/services/technicians");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add A Technician</h1>
                    <form onSubmit={handleSubmit} id="create-tech-form">
                        <div className="form-floating mb-3">
                            <input value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="First Name" required type="text" id="first_name" className="form-control" name="first_name" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Last Name" required type="text" id="last_name" className="form-control" name="last_name" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employeeId} onChange={event => setEmployeeId(event.target.value)} placeholder="Employee Id" required type="text" id="employee_id" className="form-control" name="employee_id" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TechnicianForm;
