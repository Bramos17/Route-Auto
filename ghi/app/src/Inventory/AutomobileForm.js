import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AutomobileForm () {
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [vin, setVin] = useState("");
    const [model, setModel] = useState("");
    const [models, setModels] = useState([]);
    const navigate = useNavigate();

    const fetchData = async() => {
        const response = await fetch("http://localhost:8100/api/models/");

        if(response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async(event) =>{
        event.preventDefault();

        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;

        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {
            const newAuto = await response.json();

            setColor("");
            setYear("");
            setVin("");
            setModel("");

            alert("Automobile created successfully!");

            navigate("/inventory/automobiles");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add An Automobile To Inventory</h1>
                    <form onSubmit={handleSubmit} id="create-auto-form">
                        <div className="form-floating mb-3">
                            <input value={color} onChange={event => setColor(event.target.value)} placeholder="Color" required type="text" id="color" className="form-control" name="color" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={year} onChange={event => setYear(event.target.value)} placeholder="Year" required type="text" id="year" className="form-control" name="year" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={vin} onChange={event => setVin(event.target.value)} placeholder="VIN" required type="text" id="vin" className="form-control" name="vin" />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select value={model} onChange={event => setModel(event.target.value)} required id="model_id" className="form-select" name="model_id">
                                <option>Choose a model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AutomobileForm;
