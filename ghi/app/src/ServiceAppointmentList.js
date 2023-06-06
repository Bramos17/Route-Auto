import React, { useState, useEffect } from "react";

function ServiceAppointmentList() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async() =>{
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
                    return (
                        <tr key={appointment.href}>
                            <td>{appointment.vin}</td>
                            <td></td>
                            <td>{appointment.customer}</td>
                            <td></td>
                            <td></td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}

export default ServiceAppointmentList;
