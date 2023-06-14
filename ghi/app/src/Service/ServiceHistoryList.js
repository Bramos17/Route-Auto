import React, { useState, useEffect } from "react";

function ServiceHistoryList() {
    const [appointments, setAppointments] = useState([]);
    const [searchVIN, setSearchVIN] = useState("");

    const url = "http://localhost:8080/api/appointments/";

    const fetchData = async () => {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleVINSearch = async (vin) => {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const filteredData = data.appointments.filter(object => object["vin"] === vin);
            setAppointments(filteredData);
        }
    }

    const handleKeyDown = async (event) => {
        if (event.keyCode === 8 && searchVIN === "") {
            fetchData();
        }
    }

    return (
        <>
            <h1>Service History</h1>
            <div className="input-group rounded">
                <input value={searchVIN} onChange={event => setSearchVIN(event.target.value)} onKeyDown={handleKeyDown} type="text" className="form-control rounded" placeholder="Search by VIN" aria-label="Search" aria-describedby="search-addon" />
                <button onClick={() => handleVINSearch(searchVIN)} type="button" className="btn btn-outline-secondary">Search</button>
            </div>
            <table className="table table">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        const dateTime = new Date(appointment.date_time);
                        const date = dateTime.toLocaleDateString();
                        const time = dateTime.toLocaleTimeString();
                        return (
                            <tr key={appointment.href}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.is_vip ? "Yes" : "No"}</td>
                                <td>{appointment.customer}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ServiceHistoryList;
