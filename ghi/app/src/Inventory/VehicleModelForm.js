import React, { useState, useEffect } from "react";

function VehicleModelForm() {
    const [modelName, setModelName] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const [manufacturers, setManufacturers] = useState([]);

    const fetchData = async() => {
        const response = await fetch("http://localhost:8100/api/manufacturers/");

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;

        const vehicleModelUrl = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(vehicleModelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();

            setManufacturer("");
            setModelName("");
            setPictureUrl("");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6" id= "VehicleForm">
                <div className="shadow p-4 mt-4">
                    <h1>Create A Vehicle Model</h1>
                    <form onSubmit={handleSubmit} id="create-vehicle-form">
                        <div className="form-floating mb-3">
                            <input value={modelName} onChange={event => setModelName(event.target.value)} placeholder="Model Name" required type="text" id="name" className="form-control" name="name" />
                            <label htmlFor="name">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={pictureUrl} onChange={event => setPictureUrl(event.target.value)} placeholder="Picture URL" required type="text" id="picture_url" className="form-control" name="picture_url" />
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select value={manufacturer} onChange={event => setManufacturer(event.target.value)} required id="manufacturer_id" className="form-select" name="manufacturer_id">
                                <option>Choose a manufacturer</option>
                                {manufacturers.map(manufacturer => {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary"id="vehicleModelBtn">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VehicleModelForm;
