import React, { useState, useEffect } from "react";
import steeringwheel from '../images/steeringwheel.png'

function AutomobileList () {
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/automobiles/");
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <h1>Automobiles</h1>
        <table className="table table">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
            {automobiles.map((automobile) => {
                const soldStyle = automobile.sold ? {color: "red" } : {color: "limegreen" };
                return (
                    <tr key={automobile.id}>
                        <td>{automobile.vin}</td>
                        <td>{automobile.color}</td>
                        <td>{automobile.year}</td>
                        <td>{automobile.model.name}</td>
                        <td>{automobile.model.manufacturer.name}</td>
                        <td style={soldStyle}>{automobile.sold ? "Sold" : "in stock"}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
            <a href="http://localhost:3000/inventory/automobile/new" role="button" id="addnewauto"> <img id="stearingwheel" width="40px" height="auto" src={steeringwheel} alt="Steering"/> Add New Automobile
            </a>
        </>
    );
}

export default AutomobileList;
