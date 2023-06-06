import React, { useState, useEffect } from "react";

function ServiceAppointmentForm() {
    const [vin, setVin] = useState("");
    const [customer, setCustomer] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [technician, setTechnician] = useState("");
    const [reason, setReason] = useState("");

    const [technicians, setTechnicians] = useState([]);
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

    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = {};

        data.vin = vin;
        data.customer = customer;
        data.technician = technician;
        data.reason = reason;
        data.date_time = new Date(`${date}T${time}`);

        const appointmentUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            console.log(newAppointment);

            setVin("");
            setCustomer("");
            setDate("");
            setTime("");
            setTechnician("");
            setReason("");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create A Service Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input value={vin} onChange={event => setVin(event.target.value)} placeholder="Automobile VIN" required type="text" id="vin" className="form-control" name="vin" />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={customer} onChange={event => setCustomer(event.target.value)} placeholder="Customer" required type="text" id="customer" className="form-control" name="customer" />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={date} onChange={event => setDate(event.target.value)} placeholder="Date" required type="date" id="date" className="form-control" name="date_time" />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={time} onChange={event => setTime(event.target.value)} placeholder="Time" required type="time" id="time" className="form-control" name="date_time" />
                            <label htmlFor="time">Time</label>
                        </div>
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
                        <div className="form-floating mb-3">
                            <textarea value={reason} onChange={event => setReason(event.target.value)} required type="text" id="reason" className="form-control" name="reason"></textarea>
                            <label htmlFor="reason" className="form-label">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ServiceAppointmentForm;
