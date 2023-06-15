import React, { useState, useEffect } from 'react';
import steeringwheel from '../images/steeringwheel.png';

const ManufacturerList = (props) => {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8100/api/manufacturers/');
            if (response.ok) {
                const data = await response.json();
                setManufacturers(data.manufacturers);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container mt-2">
            <h1>Manufacturers</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map((manufacturer, index) => {
                        return (
                            <tr key={index}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <a href="http://localhost:3000/manufacturers/new" role="button" id="addnewauto"> <img id="stearingwheel" width="40px" height="auto" src={steeringwheel} alt="Steering"/> Add New Manufacturer
            </a>
        </div>
    );
};

export default ManufacturerList;
