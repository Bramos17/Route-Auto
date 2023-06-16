import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TechnicianChangeForm() {
    const navigate = useNavigate();
    const [technicians, setTechnicians] = useState([]);
    const [technician, setTechnician] = useState("");
    const { id } = useParams();

    const fetchData = async() => {
        const response = await fetch("http://localhost:8080/api/technicians/");
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.technician = technician;

        const appointmentUrl = `http://localhost:8080/api/appointments/${id}`;
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();

            setTechnician("");

            alert("Technician changed successfully!");

            navigate("/services/appointments");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Change Technician</h1>
                    <form onSubmit={handleSubmit} id="create-tech-form">
                    <div className="mb-3">
                            <select value={technician} onChange={event => setTechnician(event.target.value)} required id="technician" className="form-select" name="technician">
                                <option>Choose a technician</option>
                                {technicians.map(tech => {
                                    return (
                                        <option key={tech.id} value={tech.id}>
                                            {tech.first_name} {tech.last_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TechnicianChangeForm;
