import React, { useState, useEffect } from "react";

function TechnicianList() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <h1>Technicians</h1>
        <table className="table table">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map(tech => {
                    return (
                        <tr key={tech.id}>
                            <td>{tech.employee_id}</td>
                            <td>{tech.first_name}</td>
                            <td>{tech.last_name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}

export default TechnicianList;
