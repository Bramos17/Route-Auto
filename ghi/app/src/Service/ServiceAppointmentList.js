import React, { useState, useEffect } from "react";

function ServiceAppointmentList() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchFilteredData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const filteredData = data.appointments.filter(object => (object["status"] === "created"));
            setAppointments(filteredData);
        }
    }

    useEffect(() => {
        fetchFilteredData();
    }, []);

    const handleCancel = async (id) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}/cancel`;
        const fetchConfig = {
            method: "PUT",
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            fetchFilteredData();
        }
    }

    const handleFinish = async (id) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}/finish`;
        const fetchConfig = {
            method: "PUT",
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            fetchFilteredData();
        }
    }

    return (
        <>
            <h1>Service Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th></th>
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
                                <td>
                                    <button onClick={() => handleCancel(appointment.id)} type="button" className="btn btn-danger">Cancel</button>
                                    <button onClick={() => handleFinish(appointment.id)} type="button" className="btn btn-success">Finish</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ServiceAppointmentList;
